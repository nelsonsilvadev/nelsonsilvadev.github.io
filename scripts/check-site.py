from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import re
import sys

ROOT = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path(__file__).resolve().parents[1] / '_site'
class Page(HTMLParser):
    def __init__(self, file):
        super().__init__()
        self.links=[]
        self.ids=[]
        self.h1=0
        self.meta=set()
        self.canonical=False
        self.image_errors=[]
        self.feed(file.read_text())
    def handle_starttag(self, tag, pairs):
        attrs=dict(pairs)
        if 'id' in attrs: self.ids.append(attrs['id'])
        if tag=='h1': self.h1+=1
        if tag=='meta': self.meta.add(attrs.get('name',attrs.get('property')))
        if tag=='link' and attrs.get('rel')=='canonical': self.canonical=True
        for key in ('href','src'):
            if attrs.get(key): self.links.append(attrs[key])
        if tag=='img' and ('alt' not in attrs or 'width' not in attrs or 'height' not in attrs):
            self.image_errors.append(attrs.get('src','unknown'))

pages={p:Page(p) for p in ROOT.rglob('*.html')}
errors=[]
checked=0
for file,page in pages.items():
    rel=str(file.relative_to(ROOT))
    if page.h1!=1: errors.append(f'{rel}: expected one H1, got {page.h1}')
    if not page.canonical: errors.append(f'{rel}: missing canonical URL')
    for name in ('description','viewport','og:title','og:image'):
        if name not in page.meta: errors.append(f'{rel}: missing {name}')
    for item,count in Counter(page.ids).items():
        if count>1: errors.append(f'{rel}: duplicate id {item}')
    for img in page.image_errors: errors.append(f'{rel}: image needs alt/dimensions: {img}')
    for raw in page.links:
        url=urlsplit(raw)
        if url.scheme or url.netloc: continue
        target=(ROOT / unquote(url.path).lstrip('/')) if url.path.startswith('/') else (file.parent / unquote(url.path))
        if not url.path: target=file
        if target.is_dir(): target=target/'index.html'
        if not target.exists(): errors.append(f'{rel}: missing target {raw}')
        if url.fragment and target in pages and unquote(url.fragment) not in pages[target].ids:
            errors.append(f'{rel}: missing anchor {raw}')
        checked+=1
    text=file.read_text()
    if re.search(r'\{[{%]',text): errors.append(f'{rel}: unrendered template')
    if '—' in text or '–' in text: errors.append(f'{rel}: unwanted long dash')
if not (ROOT/'assets/Nelson-Silva-Resume.pdf').read_bytes().startswith(b'%PDF-'):
    errors.append('Resume is not a PDF')
for excluded in ('docs','scripts','output','tmp'):
    if (ROOT/excluded).exists(): errors.append(f'Build leaks excluded {excluded} directory')
if errors:
    raise SystemExit('\n'.join(errors))
print(f'Passed: {len(pages)} pages, {checked} local references, metadata, headings, image attributes and PDF signature.')
