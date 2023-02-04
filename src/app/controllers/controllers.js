const { Url } = require('./../schemas/url.schema')

const sendHomePage = async (req, res) => {
	res.render("index.ejs");
	res.end()
}
const regex = new RegExp(/^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:?#[\]@!\$&'\(\)\*\+,;=.]+$/gm)
const handleInputData = async (req, res) => {
	const url = await req.body.url;
	const match = regex.test(url);
	const checkForEntry = await Url.find({ original_url: url })
	if (match === true && checkForEntry.length === 0) {
		console.log(checkForEntry.length)
		let randomUrl = Math.floor(Math.random() * 100000)
		const url = new Url({ original_url: req.body.url, short_url: randomUrl })
		url.save().then(() => console.log("Saved To MDB"))
		res.json({ original_url: req.body.url, short_url: randomUrl })
	}
	else if (checkForEntry.length > 0) {
		console.log("Find Entry")
		const findEntry = await Url.find({ original_url: url })
		res.json({ original_url: findEntry[0].original_url, short_url: findEntry[0].short_url })
	}
	else {
		console.log(regex.test(url))
		if (!regex.test(url)) {
			res.json({ error: "invalid url" })
		}
	}
}

const findById = async (req, res) => {
	const id = req.params.id;
	const findFromDB = await Url.find({ short_url: id })
	if (findFromDB.length === 0) {
		res.json({ error: "No short URL found for the given input" })
	}
	else {
		res.redirect(`${findFromDB[0].original_url}`);
		res.end();
	}
	
}

module.exports = {
	findById,
	sendHomePage,
	handleInputData
}