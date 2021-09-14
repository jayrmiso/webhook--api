const express = require('express')
const router = new express.Router()
const Webflow = require('webflow-api')
const downloadFile = require('../utils/downloader.js')
const fs = require("fs");
var path = require('path');


router.post('/test/:token/:collectionid', (req, res) => {

	const tokenid = req.params.token
	const collectionid = req.params.collectionid
	// console.log(JSON.stringify(req.body.form_response.answers[0].file_url))
	// downloadFile(req.body.form_response.answers[0].file_url)
	const api = new Webflow({token: tokenid})


	// function fileUrl(str) {
 //    if (typeof str !== 'string') {
 //        throw new Error('Expected a string');
 //    }

 //    var pathName = path.resolve(str).replace(/\\/g, '/');

 //    // Windows drive letter must be prefixed with a slash
 //    if (pathName[0] !== '/') {
 //        pathName = '/' + pathName;
 //    }

 //    return encodeURI('file://' + pathName);
	// };
	// console.log(fileUrl(__dirname + '/download.html'))
	// const temp = fileUrl(__dirname + '/download.html')
	// console.log(temp)

	const item = api.createItem({
       collectionId: collectionid,
		  fields: {
		    'name': req.body.event_id,
		    'slug': req.body.event_type,
		    'test': {
		    	'url': `${req.body.form_response.answers.file_url}`,
		    },
		    '_archived': false,
		    '_draft': false,
		  },
	});

	item.then(i => console.log(i));
	res.send(req.body)
})

module.exports = router