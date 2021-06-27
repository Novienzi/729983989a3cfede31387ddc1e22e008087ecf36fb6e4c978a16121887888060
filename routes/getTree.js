const express = require('express')
const app = express.Router()
const db = require('../controller/getTree')

app.get('/get/tree', async (req, res, next) => {
    const getTree = await db.get_tree(req.params.movie_id)
        .catch((err) => next(err))
    if (getTree.length > 0) {
        res.status(200).send(getTree);
    } else {
        res.status(404).send("Data is not found");
    }
})

module.exports = app
