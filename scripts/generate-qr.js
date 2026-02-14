// Simple Node.js script to generate QR code
// Run: node scripts/generate-qr.js <your-url>

const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const url = process.argv[2];

if (!url) {
  console.log('Usage: node scripts/generate-qr.js <your-url>');
  console.log('Example: node scripts/generate-qr.js https://your-site.vercel.app');
  process.exit(1);
}

// Validate URL
try {
  new URL(url);
} catch (e) {
  console.error('Invalid URL! Must start with http:// or https://');
  process.exit(1);
}

const outputPath = path.join(__dirname, '..', 'public', 'qr-code.png');

QRCode.toFile(outputPath, url, {
  width: 512,
  margin: 2,
  color: {
    dark: '#000000',
    light: '#FFFFFF'
  }
}, function (err) {
  if (err) {
    console.error('Error generating QR code:', err);
    process.exit(1);
  }
  console.log('✅ QR code generated successfully!');
  console.log(`📁 Saved to: ${outputPath}`);
  console.log(`🔗 URL: ${url}`);
  console.log('\n💡 You can now print or share this QR code!');
});
