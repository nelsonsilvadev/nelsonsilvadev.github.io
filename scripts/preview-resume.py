from pathlib import Path
import subprocess
import tempfile
from PIL import Image

root = Path(__file__).resolve().parents[1]
out = root / 'assets/img/resume'
out.mkdir(parents=True, exist_ok=True)
with tempfile.TemporaryDirectory(prefix='resume-preview-') as tmp:
    prefix = str(Path(tmp) / 'page')
    subprocess.run(['pdftoppm', '-scale-to', '1800', '-png', str(root / 'assets/Nelson-Silva-Resume.pdf'), prefix], check=True)
    for page in sorted(Path(tmp).glob('page-*.png')):
        image = Image.open(page)
        image.save(out / (page.stem + '.webp'), quality=90)
        print(page.stem, image.size)
