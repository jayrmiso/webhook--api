const express = require('express')
const router = new express.Router()

router.post('/test', (req, res) => {
	console.log(req.body)
	res.send(req.body)
})

module.exports = router