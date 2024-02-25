// cloudConfig.js
const cloudinary = require('cloudinary').v2;
const axios = require('axios');
const fs = require('fs');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

async function downloadAndUploadToCloudinary(imageUrl) {
    const imageDestination = 'public/uploads/image.jpg';

    try {
        // Download the image
        await downloadImage(imageUrl, fs.createWriteStream(imageDestination));

        // Upload the downloaded image to Cloudinary
        const result = await cloudinary.uploader.upload(imageDestination);
        console.log('Image uploaded to Cloudinary:', result.url);
    } catch (error) {
        console.error('Error during download/upload:', error);
        throw error; // Re-throw the error for handling in the signup route
    }
}

async function downloadImage(url, destination) {
    const response = await axios({
        method: 'GET',
        url: url,
        responseType: 'stream',
    });

    response.data.pipe(destination);

    return new Promise((resolve, reject) => {
        destination.on('finish', resolve);
        destination.on('error', reject);
    });
}

module.exports = {
    cloudinary,
    downloadAndUploadToCloudinary
};
