const express = require('express')
const router = new express.Router()
const Webflow = require('webflow-api')
const fs = require("fs");
var path = require('path');
const generateObject = require('../fields')
console.log(generateObject)
router.post('/test/:token/:collectionid', (req, res) => {

	const tokenid = req.params.token
	const collectionid = req.params.collectionid
	const api = new Webflow({token: tokenid})
	generateObject(req,(result) => {
		const item = api.createItem({
	 	     collectionId: collectionid,
			 fields: result
		});
		item.then(i => 
		console.log(`Successfully added a new record to a collection with an ID of: ${req.params.collectionid}`));
	})
	res.send(req.body)
})

module.exports = router