const express = require('express')
const router = new express.Router()
const Webflow = require('webflow-api')
const downloadFile = require('../utils/downloader.js')
const fs = require("fs");

// __dirname means relative to script. Use "./data.txt" if you want it relative to execution path.
// fs.readFile(__dirname + "/download.html", (error, data) => {
//     if(error) {
//         throw error;
//     }
//     console.log(data.toString());
// });


router.post('/test/:token/:collectionid', (req, res) => {

	const tokenid = req.params.token
	const collectionid = req.params.collectionid
	console.log(JSON.stringify(req.body.form_response.answers[0].file_url))
	downloadFile(req.body.form_response.answers[0].file_url)
	const api = new Webflow({token: tokenid})


	const item = api.createItem({
       collectionId: collectionid,
		  fields: {
		    'name': req.body.event_id,
		    'slug': req.body.event_id,
		    'test': {
		    	'url': "https://uploads-ssl.webflow.com/613eed8927974a73dea5babd/613f0273ad5dea464ef43c5f_thumbnail_image008.jpg",
		    },
		    '_archived': false,
		    '_draft': false,
		  },
	});

	item.then(i => console.log(i));


	res.send(req.body)
})

module.exports = router