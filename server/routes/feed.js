const express = require("express");
const router = express.Router();
const { API_KEY, API_URL } = process.env
const axios = require("axios")

router.get("/", async (req, res) => {
    console.log(API_URL + API_KEY)
    await axios.get(API_URL + API_KEY + "&count=9")
        .then((response) => {
            res.send(response.data)
        })
        .catch((err) => {
            console.log("yo")
        })
})

module.exports = router