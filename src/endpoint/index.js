const express = require('express')
const router = new express.Router()
const Webflow = require('webflow-api')
const downloadFile = require('../utils/downloader.js')
console.log(downloadFile)

router.post('/test/:token/:collectionid', (req, res) => {

	const tokenid = req.params.token
	const collectionid = req.params.collectionid
	console.log(JSON.stringify(req.body.form_response.answers[0].file_url))
	downloadFile(JSON.stringify(req.body.form_response.answers[0].file_url))
	// const api = new Webflow({token: tokenid})
	// const item = api.createItem({
    //    collectionId: collectionid,
	// 	  fields: {
	// 	    'name': req.body.event_id,
	// 	    'slug': req.body.event_id,
	// 	    'test': {
	// 	    	'url': "https://admin.typeform.com/form/gECEdihl/field/QzMcuktoO684/results/file.ext/download",
	// 	    },
	// 	    '_archived': false,
	// 	    '_draft': false,
	// 	  },
	// });

	// item.then(i => console.log(i));
	res.send(req.body)
})

module.exports = router