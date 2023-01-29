const mongoose = require('mongoose')

const { db } = require('./../db/db')


const urlShortenerSchema = new mongoose.Schema({
  original_url: String,
  short_url: Number
})

const Url = mongoose.model('Urls', urlShortenerSchema)

module.exports = { Url };