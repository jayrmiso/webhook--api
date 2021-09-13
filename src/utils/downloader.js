const Downloader = require('nodejs-file-downloader');


const downloadFile = (url) => {
(async () => {

    const downloader = new Downloader({
      url: url,
      directory: "./downloads",
    })
    try {
      await downloader.download();

      console.log('File downloaded!');
    } catch (error) {
      console.log('Download failed!',error)
    }


})(); 
}



module.exports = downloadFile