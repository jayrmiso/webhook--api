const express = require('express')
const router = new express.Router()
const Webflow = require('webflow-api')

const api = new Webflow({token: '67461abf8fa602c5eed5ee0054375260b61c0476b4d91d63582c4f7468a2b2cd'})

router.post('/test', (req, res) => {
	console.log(req)
	
	// const item = api.createItem({
 //  		  collectionId: '613b15722ae9a2ac9ac49c37',
	// 	  fields: {
	// 	    'name': req.body.name,
	// 	    'slug': req.body.slug,
	// 	    '_archived': false,
	// 	    '_draft': false,
	// 	  },
	// });

	// item.then(i => console.log(i));



	res.send(req)
})

module.exports = router