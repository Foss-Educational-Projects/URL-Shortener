require('dotenv').config()


const server = () => {
  console.log(`Listening on ${process.env.HOST}:${process.env.PORT}`);
}

module.exports = { server };
