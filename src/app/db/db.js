require('dotenv').config
const mongoose = require('mongoose')

mongoose.set('strictQuery', false);

db().catch(err => console.error(err));

async function db () {
  await mongoose.connect(`${process.env.MONGO_URL}/${process.env.MONGO_DB}`)
}

module.exports = { db };
