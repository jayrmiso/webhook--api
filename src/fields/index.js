const generateObject = (req, callback) =>{
	var obj = {
		'name': req.body.event_id,
	    '_archived': false,
	    '_draft': false,
	}
	if(req.params.collectionid == process.env.WEBFLOW_1){
		console.log(`Adding a new record to a collection with an ID of: ${process.env.WEBFLOW_1}`)
		Object.assign(obj, {'company-name': req.body.form_response.answers[0].text})
		Object.assign(obj, {'email-address':req.body.form_response.answers[1].email})
		Object.assign(obj, {'editable-document':{'url': req.body.form_response.answers[2].file_url}})
		Object.assign(obj, {'photo':{'url':req.body.form_response.answers[3].file_url}})
		Object.assign(obj, {'description':req.body.form_response.answers[4].text})
		const arr = req.body.form_response.answers[5].choices.labels
		var str = arr.join(", ")
		Object.assign(obj, {'multiple-choice-answer-2': str})
	}else if(req.params.collectionid == process.env.WEBFLOW_2){
		console.log(`Adding a new record to a collection with an ID of: ${process.env.WEBFLOW_2}`)
		Object.assign(obj, {'description': req.body.form_response.answers[0].text})
		Object.assign(obj, {'image': {'url': req.body.form_response.answers[1].file_url}})
	}else if(req.params.collectionid == process.env.WEBFLOW_3){
		console.log(`[Vietnam Microsite 2021] Adding a new record to a collection with an ID of: ${process.env.WEBFLOW_3}`)
		Object.assign(obj, {'client': req.body.form_response.answers[0].text})
		Object.assign(obj, {'name': req.body.form_response.answers[0].text})
		Object.assign(obj, {'view-live-website':req.body.form_response.answers[1].email})
		Object.assign(obj, {'csr-report':{'url': req.body.form_response.answers[2].file_url}})
		Object.assign(obj, {'main-project-image':{'url':req.body.form_response.answers[3].file_url}})
		Object.assign(obj, {'project-details':req.body.form_response.answers[4].text})

	}
	//Add another if statement for every new typeform fields
	//Add collectionid value to .env for the if statement
	//else if(req.params.collectionid == process.env.WEBFLOW_#){...WEBFLOW FIELDS...}
	callback(obj)
}

module.exports = generateObject