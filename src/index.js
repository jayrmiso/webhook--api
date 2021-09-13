const app = require('./app')
const port = process.env.PORT

// const client = require('filestack-js').init('apikey');
// console.log(client)
// var uploadcare = require('uploadcare')('public_key', 'private_key'),
//  fs = require('fs');
//  console.log(__dirname )
// uploadcare.file.upload('../downloads/bfaf85008b5f-1cb8f7d2ee58_thumbnail_image008.jpg', function(err,res){
//         //Res should contain returned file ID
//         console.log(err,res);
//     });

// const client = require('@uploadcare/upload-client')
// const test = new client({publickKey: 'YOUR_PUBLIC_KEY'})


app.listen(port, () => {
	console.log('Server is up on port ' + port)
})