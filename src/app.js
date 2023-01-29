require('dotenv').config();
const path = require('path')
const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();

const { server } = require('./app/server/server')
const route = require('./app/routes/routes')
// Basic Configuration

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "client", "views"))
app.use(cors());
app.use(express.static(path.join(__dirname, "../", "public")));
app.use(express.static(path.join(__dirname, "client", "assets")));
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
router.use("/", route)
app.use(router)
app.listen(process.env.PORT, server);
