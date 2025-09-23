#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

/**
 * Image to Binary Heightmap Converter
 * Converts grayscale images (PNG, JPG, etc.) to 256x256 binary heightmap files
 *
 * Usage: node convert.js <input-image> [output-dir]
 */

async function convertImageToBin(inputPath, outputDir = null) {
  try {
    console.log(`📸 Loading image: ${inputPath}`);

    // Load and process image with Sharp
    const { data, info } = await sharp(inputPath)
      .resize(256, 256, { fit: 'fill' })
      .greyscale()
      .raw()
      .toBuffer({ resolveWithObject: true });

    console.log(`✅ Image loaded and processed: ${info.width}x${info.height}`);

    // Convert to binary heightmap (data is already single channel greyscale)
    const binaryData = new Uint8Array(data);

    // Generate output filename in same directory as input (unless outputDir specified)
    const inputParsed = path.parse(inputPath);
    const outputDir_final = outputDir || inputParsed.dir;
    const outputPath = path.join(outputDir_final, `${inputParsed.name}.bin`);

    // Write binary file
    fs.writeFileSync(outputPath, binaryData);

    console.log(`✅ Binary heightmap created: ${outputPath}`);
    console.log(`📊 Size: ${binaryData.length} bytes (256x256)`);

    return outputPath;

  } catch (error) {
    console.error(`❌ Error converting ${inputPath}:`, error.message);
    throw error;
  }
}

async function batchConvert(inputDir, outputDir = null) {
  const supportedExtensions = ['.png', '.jpg', '.jpeg', '.bmp', '.gif'];

  try {
    const files = fs.readdirSync(inputDir);
    const imageFiles = files.filter(file =>
      supportedExtensions.includes(path.extname(file).toLowerCase())
    );

    if (imageFiles.length === 0) {
      console.log(`❌ No image files found in ${inputDir}`);
      return;
    }

    console.log(`🔄 Converting ${imageFiles.length} images...`);

    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      // For batch convert, use outputDir if specified, otherwise same directory as input
      await convertImageToBin(inputPath, outputDir);
    }

    console.log(`✅ Batch conversion complete!`);

  } catch (error) {
    console.error(`❌ Batch conversion failed:`, error.message);
    throw error;
  }
}

// CLI interface
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(`
Image to Binary Heightmap Converter

Usage:
  node convert.js <input-image> [output-dir]     Convert single image
  node convert.js --batch <input-dir> [output-dir]  Convert all images in directory

Examples:
  node convert.js terrain.png
  node convert.js terrain.png ./output
  node convert.js --batch ./images ./output

Supported formats: PNG, JPG, JPEG, BMP, GIF
Output: 256x256 binary heightmap (.bin)
`);
    process.exit(1);
  }

  try {
    if (args[0] === '--batch') {
      if (args.length < 2) {
        console.error('❌ Batch mode requires input directory');
        process.exit(1);
      }

      const inputDir = args[1];
      const outputDir = args[2] || '.';

      // Create output directory if it doesn't exist
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      await batchConvert(inputDir, outputDir);

    } else {
      const inputPath = args[0];
      const outputDir = args[1] || '.';

      // No need to create output directory - file goes in same folder as input
      await convertImageToBin(inputPath);
    }

  } catch (error) {
    console.error('❌ Conversion failed:', error.message);
    process.exit(1);
  }
}

// Export for use as module
export { convertImageToBin, batchConvert };

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}