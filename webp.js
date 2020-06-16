var imagemin = require("imagemin"),    // The imagemin module.
  webp = require("imagemin-webp"),   // imagemin's WebP plugin.
  outputFolder = "img";            // Output folder

(async () => {
    const img = await imagemin(['images/*.{jpg,png}'], {
        destination: outputFolder,
        plugins: [
            webp({quality: 75, lossless: true, method: 6})
        ]
    });
 
    console.log('Images optimized');
    console.log(img);
})();