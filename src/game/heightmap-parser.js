// heightmap-parser.js

self.onmessage = async (event) => {
  const { filename } = event.data;

  try {
    const response = await fetch(filename);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${filename}: ${response.statusText}`);
    }
    const blob = await response.blob();
    const imageBitmap = await createImageBitmap(blob);

    const canvas = new OffscreenCanvas(imageBitmap.width, imageBitmap.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(imageBitmap, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;

    const grayscale = new Uint8Array(canvas.width * canvas.height);
    for (let i = 0; i < pixels.length; i += 4) {
      // Standard luminance conversion
      const gray =
        pixels[i] * 0.2126 + pixels[i + 1] * 0.7152 + pixels[i + 2] * 0.0722;
      grayscale[i / 4] = gray;
    }

    self.postMessage(
      {
        filename,
        heightmap: { data: grayscale, size: canvas.width },
      },
      [grayscale.buffer]
    ); // Transfer buffer ownership for zero-copy
  } catch (error) {
    self.postMessage({ filename, error: error.message });
  }
};
