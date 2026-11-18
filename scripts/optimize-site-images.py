"""Regenerate committed display images from the original PNGs using cwebp."""

from pathlib import Path
import shutil
import subprocess


ROOT = Path(__file__).resolve().parents[1]
IMAGES = ROOT / "assets/img"


def main():
    encoder = shutil.which("cwebp")
    if not encoder:
        raise SystemExit("Install cwebp first (macOS: brew install webp).")

    outputs = [
        ("nelson-silva.png", f"nelson-silva-{size}.webp", size, 82)
        for size in (192, 320, 440, 560, 840)
    ]
    outputs.append(("auramenta/app-icon.png", "auramenta/app-icon.webp", 160, 90))

    for source, destination, size, quality in outputs:
        subprocess.run(
            [
                encoder,
                "-quiet",
                "-q", str(quality),
                "-m", "6",
                "-resize", str(size), str(size),
                "-metadata", "none",
                str(IMAGES / source),
                "-o", str(IMAGES / destination),
            ],
            check=True,
        )
        print(f"{destination}: {(IMAGES / destination).stat().st_size:,} bytes")


if __name__ == "__main__":
    main()
