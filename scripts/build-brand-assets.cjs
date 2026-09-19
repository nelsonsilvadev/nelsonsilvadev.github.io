const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require("sharp");

const root = path.resolve(__dirname, "..");
const images = path.join(root, "assets/img");

async function build() {
  const photo = await fs.readFile(
    path.join(images, "nelson-silva.png")
  );
  const render = (size) => sharp(photo).resize(size, size);
  const renderFavicon = (size) =>
    render(size).composite([
      {
        input: Buffer.from(
          `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/></svg>`
        ),
        blend: "dest-in",
      },
    ]);
  const frames = await Promise.all(
    [16, 32, 48].map((size) =>
      renderFavicon(size).png().toBuffer()
    )
  );

  const directory = Buffer.alloc(6 + frames.length * 16);
  directory.writeUInt16LE(1, 2);
  directory.writeUInt16LE(frames.length, 4);
  let offset = directory.length;
  frames.forEach((frame, index) => {
    const entry = 6 + index * 16;
    const size = [16, 32, 48][index];
    directory[entry] = size;
    directory[entry + 1] = size;
    directory.writeUInt16LE(1, entry + 4);
    directory.writeUInt16LE(32, entry + 6);
    directory.writeUInt32LE(frame.length, entry + 8);
    directory.writeUInt32LE(offset, entry + 12);
    offset += frame.length;
  });
  const ico = Buffer.concat([directory, ...frames]);
  await fs.writeFile(path.join(root, "favicon.ico"), ico);
  await fs.writeFile(path.join(images, "favicon.ico"), ico);
  await fs.writeFile(
    path.join(images, "favicon-16x16.png"),
    frames[0]
  );
  await fs.writeFile(
    path.join(images, "favicon-32x32.png"),
    frames[1]
  );

  const outputs = [
    ["apple-touch-icon.png", 180],
    ["android-chrome-192x192.png", 192],
    ["android-chrome-384x384.png", 384],
    ["android-chrome-512x512.png", 512],
    ["mstile-150x150.png", 150],
  ];
  for (const [filename, size] of outputs) {
    await render(size)
      .flatten({ background: "#ffffff" })
      .png()
      .toFile(path.join(images, filename));
  }

  const thumbnail = await renderFavicon(128)
    .png()
    .toBuffer();
  const photoIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><image width="128" height="128" href="data:image/png;base64,${thumbnail.toString("base64")}"/></svg>\n`;
  await fs.writeFile(
    path.join(images, "favicon.svg"),
    photoIcon
  );

  const socialTemplate = await fs.readFile(
    path.join(images, "social-preview.svg"),
    "utf8"
  );
  const socialSvg = socialTemplate.replace(
    'href="nelson-silva.png"',
    `href="data:image/png;base64,${photo.toString("base64")}"`
  );
  await sharp(Buffer.from(socialSvg))
    .png()
    .toFile(path.join(images, "social-preview.png"));
}

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
