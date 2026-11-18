import argparse
from pathlib import Path
import re
import subprocess
import tempfile

from PIL import Image
import pymupdf

root = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description='Generate public resume previews without phone numbers.')
parser.add_argument('source_pdf', type=Path, help='Private resume PDF stored outside this repository')
source = parser.parse_args().source_pdf.resolve()
if source.is_relative_to(root):
    parser.error('Keep the private source PDF outside this repository.')

phone = re.compile(r'(?<!\w)\+?\d(?:[ \t().-]*\d){8,}(?!\w)')
out = root / 'assets/img/resume'
out.mkdir(parents=True, exist_ok=True)
with tempfile.TemporaryDirectory(prefix='resume-preview-') as tmp:
    sanitized = Path(tmp) / 'public-resume.pdf'
    with pymupdf.open(source) as document:
        if len(document) != 2:
            raise SystemExit('Expected two resume pages; update the page markup before changing this.')
        removed = 0
        for page in document:
            for match in phone.finditer(page.get_text()):
                for rect in page.search_for(match.group()):
                    page.add_redact_annot(rect, fill=(1, 1, 1))
                    removed += 1
            for link in page.get_links():
                if link.get('uri', '').lower().startswith('tel:'):
                    page.delete_link(link)
            page.apply_redactions(images=0, graphics=0)
        document.set_metadata({})
        document.del_xml_metadata()
        document.save(sanitized, garbage=4, deflate=True)
    with pymupdf.open(sanitized) as document:
        if any(phone.search(page.get_text()) for page in document):
            raise SystemExit('Phone number remains in the resume; previews were not generated.')

    prefix = str(Path(tmp) / 'page')
    subprocess.run(['pdftoppm', '-scale-to', '1800', '-png', str(sanitized), prefix], check=True)
    for page in sorted(Path(tmp).glob('page-*.png')):
        with Image.open(page) as image:
            image.save(out / (page.stem + '-public.webp'), quality=90)
            print(page.stem, image.size)
    print(f'Removed {removed} phone-number occurrence(s). Review both previews before publishing.')
