import sharp from "sharp";
console.log('Sharp version:', sharp.version);

const createThumbnail = async (req, res, next) => {
  try {
    if (!req.file) {
      next();
      return;
    }
    const extension = req.file.mimetype.split('/')[1];
    await sharp(req.file.path)
      .resize(100, 100)
      .toFile(`${req.file.path}_thumb.${extension}`);
    next();
  } catch (error) {
    console.error('Error creating thumbnail:', error);
    res.status(500).send('Error processing file');
  }
};

export {createThumbnail};