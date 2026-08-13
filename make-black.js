const Jimp = require('jimp');

Jimp.read('public/images/logo-transparent.png')
  .then(image => {
    // Invert the image (will turn white into black, transparent remains transparent)
    // Wait, invert also turns black into white. But the logo is white, so invert makes it black!
    image.invert();
    return image.writeAsync('src/app/icon.png');
  })
  .then(() => {
    console.log('Successfully created black icon!');
  })
  .catch(err => {
    console.error(err);
  });
