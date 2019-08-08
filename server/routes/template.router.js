const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('In Router GET shows data');
    const sqlText = `SELECT * from "shows";`;
    pool.query(sqlText)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((error) => {
            console.log('Unable to get show data. Sadness ensues')
            res.sendStatus(500)
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;