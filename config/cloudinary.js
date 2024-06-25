const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadToCloudinary = (stream) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
      if (error) {
        console.error("Error uploading to Cloudinary:", error);
        reject(error);
      } else {
        resolve(result);
      }
    });

    streamifier.createReadStream(stream).pipe(uploadStream);
  });
};

module.exports = uploadToCloudinary;
