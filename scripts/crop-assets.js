const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const uploadedDir = 'C:/Users/posit/.gemini/antigravity/brain/6f86bf30-e447-4769-bb2e-7ed6c38774de/.user_uploaded/';
const outputDir = path.join(__dirname, '../public/images/instyle');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function run() {
  const img2 = path.join(uploadedDir, 'media_1793861287578_e1d62cf8.png'); // 1024 x 580
  const img3 = path.join(uploadedDir, 'media_1793861301559_3692bcf0.png'); // 1024 x 622
  const img4 = path.join(uploadedDir, 'media_1793861670666_002f4a35.jpg'); // 935 x 1024

  // In media 2:
  // 4 columns: ~205px wide each, with small margins
  // Col 1: 30 to 235 (width ~205)
  // Col 2: 238 to 443 (width ~205)
  // Col 3: 447 to 652 (width ~205)
  // Col 4: 655 to 860 (width ~205)
  // Row 1: y=12 to y=282 (height ~270)
  // Row 2: y=285 to y=555 (height ~270)

  console.log('Extracting from Image 2...');
  await sharp(img2)
    .extract({ left: 30, top: 12, width: 205, height: 270 })
    .jpeg({ quality: 95 })
    .toFile(path.join(outputDir, 'salon-space-interior.jpg'));

  await sharp(img2)
    .extract({ left: 238, top: 12, width: 205, height: 270 })
    .jpeg({ quality: 95 })
    .toFile(path.join(outputDir, 'eyelash-lift-glow.jpg'));

  await sharp(img2)
    .extract({ left: 447, top: 12, width: 205, height: 270 })
    .jpeg({ quality: 95 })
    .toFile(path.join(outputDir, 'ash-hair-smoothing.jpg'));

  await sharp(img2)
    .extract({ left: 655, top: 12, width: 205, height: 270 })
    .jpeg({ quality: 95 })
    .toFile(path.join(outputDir, 'french-gold-manicure.jpg'));

  await sharp(img2)
    .extract({ left: 30, top: 285, width: 205, height: 270 })
    .jpeg({ quality: 95 })
    .toFile(path.join(outputDir, 'sleek-chocolate-bob.jpg'));

  await sharp(img2)
    .extract({ left: 238, top: 285, width: 205, height: 270 })
    .jpeg({ quality: 95 })
    .toFile(path.join(outputDir, 'microblading-6d-brows.jpg'));

  await sharp(img2)
    .extract({ left: 447, top: 285, width: 205, height: 270 })
    .jpeg({ quality: 95 })
    .toFile(path.join(outputDir, 'glitter-gold-nails.jpg'));

  await sharp(img2)
    .extract({ left: 655, top: 285, width: 205, height: 270 })
    .jpeg({ quality: 95 })
    .toFile(path.join(outputDir, 'hair-botox-waves.jpg'));

  console.log('Extracting from Image 3...');
  // In Image 3: 1024 x 622, 4 columns
  // Col 1: 30 to 235, Col 2: 238 to 443, Col 3: 447 to 652, Col 4: 655 to 860
  // Row 2: y ~ 180 to 415
  // Row 3: y ~ 420 to 620
  await sharp(img3)
    .extract({ left: 447, top: 265, width: 205, height: 155 })
    .jpeg({ quality: 95 })
    .toFile(path.join(outputDir, 'hair-smoothing-before-after.jpg'));

  await sharp(img3)
    .extract({ left: 655, top: 420, width: 205, height: 180 })
    .jpeg({ quality: 95 })
    .toFile(path.join(outputDir, 'caramel-balayage-waves.jpg'));

  console.log('Extracting from Image 4 (Mockup)...');
  // Hero luxury model: x: 18, y: 120, width: 310, height: 420
  await sharp(img4)
    .extract({ left: 16, top: 125, width: 315, height: 410 })
    .jpeg({ quality: 95 })
    .toFile(path.join(outputDir, 'hero-luxury-model.jpg'));

  // Service 1: Hair smoothing: x: 372, y: 220, width: 124, height: 148
  await sharp(img4)
    .extract({ left: 372, top: 220, width: 124, height: 148 })
    .jpeg({ quality: 95 })
    .toFile(path.join(outputDir, 'service-hair-smoothing.jpg'));

  // Service 2: Eyelash extensions: x: 372, y: 384, width: 124, height: 148
  await sharp(img4)
    .extract({ left: 372, top: 384, width: 124, height: 148 })
    .jpeg({ quality: 95 })
    .toFile(path.join(outputDir, 'service-eyelash-extensions.jpg'));

  // Service 3: Nail art: x: 372, y: 544, width: 124, height: 148
  await sharp(img4)
    .extract({ left: 372, top: 544, width: 124, height: 148 })
    .jpeg({ quality: 95 })
    .toFile(path.join(outputDir, 'service-nail-art.jpg'));

  console.log('All crops created successfully!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
