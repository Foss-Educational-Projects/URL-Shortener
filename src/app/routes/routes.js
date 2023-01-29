const express = require('express')
const router = express.Router()

const { sendHomePage, handleInputData, findById } = require('./../controllers/controllers')

router.get('/', sendHomePage);

router.get('/api/shorturl/:id', findById)

router.post('/api/shorturl', handleInputData);



module.exports = router;