const express = require('express')
const router = new express.Router()
const Webflow = require('webflow-api')

//const api = new Webflow({token: '67461abf8fa602c5eed5ee0054375260b61c0476b4d91d63582c4f7468a2b2cd'})

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
		    'event': req.body.event_id,
		    'slug': req.body.event_id,
		    '_archived': false,
		    '_draft': false,
		  },
	});

	item.then(i => console.log(i));
	res.send(req.body)
})

module.exports = router