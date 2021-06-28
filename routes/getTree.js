const express = require('express')
const app = express.Router()
const db = require('../controller/getTree')

app.get('/get/tree', async (req, res, next) => {
    const getTree = await db.get_tree()
        .catch((err) => next(err))
    if (getTree) {
        res.status(200).send(getTree);
    } else {
        res.status(404).send("Data is not found");
    }
})

module.exports = app
