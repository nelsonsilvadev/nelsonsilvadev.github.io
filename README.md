# nelsonsilvadev.github.io

An awesome website that uses Jekyll to represent my whole career with a resume, a portfolio and a blog (fully hosted with GitHub Pages)

### How to set everything up

- Open your terminal `:)`
- Clone the repository
  - `git clone https://github.com/nelsonsilvadev/nelsonsilvadev.github.io.git`
- Enter to the repository directory
  - `cd nelsonsilvadev.github.io`
- Install **Jekyll** (proceed to the next step if you already have it installed)
  - [macOS](https://jekyllrb.com/docs/installation/macos/)
  - [Linux](https://jekyllrb.com/docs/installation/other-linux)
  - [Windows](https://jekyllrb.com/docs/installation/windows/)
- Go ahead and add your own configurations (open it with your favorite text editor)
  - `config.yml`
- To start everything up
  - `jekyll serve`
- Open your browser, give it a try and enjoy
  - [http://localhost:4000/](http://localhost:4000/)

### Optimizing display images

The homepage portrait uses responsive WebP files, and the Auramenta feature uses a
160 px WebP icon. The original PNGs remain as sources. After replacing either
original, install `cwebp` (`brew install webp` on macOS) and regenerate the display
images:

```sh
python3 scripts/optimize-site-images.py
JEKYLL_ENV=production jekyll build
python3 scripts/check-site.py
```

Commit the generated WebP files with the templates. Keep the portrait's `sizes`
attribute in sync with the `.hero-portrait` widths in `assets/css/site.css`.

### Public resume previews

The approved phone-free PDF is published as `assets/Nelson-Silva-Resume-public.pdf`, alongside WebP previews. Keep private source PDFs outside this repository. To regenerate the previews, install Pillow and PyMuPDF, ensure `pdftoppm` is available, then run:

```sh
python3 scripts/preview-resume.py /absolute/path/outside/repository/resume.pdf
```

The script removes phone-number text and telephone links before rendering, and discards its temporary PDF. It only updates the previews. When replacing the public download, verify that the replacement PDF itself has no phone number or telephone links, and regenerate the previews from the same version. Review both pages before publishing. Do not restore the old PDF or preview filenames: previously published copies may also require a Cloudflare cache purge after deployment.
