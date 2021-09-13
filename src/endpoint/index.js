const express = require('express')
const router = new express.Router()
const Webflow = require('webflow-api')


router.post('/test/:token/:collectionid', (req, res) => {
	const tokenid = req.params.token
	const collectionid = req.params.collectionid
	console.log(req.body)
	console.log(`TOKEN:`,tokenid)
	console.log(`COLLECTION ID:`, collectionid)
	const api = new Webflow({token: tokenid})

	const item = api.createItem({
  		  collectionId: collectionid,
		  fields: {
		    'name': req.body.event_id,
		    'slug': req.body.event_id,
		    'test': req.body.form_response.answers.file_url,
		    '_archived': false,
		    '_draft': false,
		  },
	});

	item.then(i => console.log(i));
	res.send(req.body)
})

module.exports = router