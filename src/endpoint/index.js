const express = require('express')
const router = new express.Router()
const Webflow = require('webflow-api')
const fs = require("fs");
var path = require('path');


router.post('/test/:token/:collectionid', (req, res) => {

	const tokenid = req.params.token
	const collectionid = req.params.collectionid
	const api = new Webflow({token: tokenid})
	const item = api.createItem({
       collectionId: collectionid,
		  fields: {
		    'name': req.body.event_id,
		    'slug': req.body.event_type,
		    'test': {
		    	'url': req.body.form_response.answers[0].file_url,
		    },
		    '_archived': false,
		    '_draft': false,
		  },
	});

	item.then(i => console.log(i));
	res.send(req.body)
})

module.exports = router