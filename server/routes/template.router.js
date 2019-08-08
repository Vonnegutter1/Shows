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

router.get('/details', (req, res) => {
    console.log('req.query.id');
    
    pool.query(`SELECT * from "shows" WHERE id=$1;`, [req.query.id])
        .then((response) => {
            res.send(response.rows[0]);
        })
        .catch((error) => {
            console.log('Unable to get show details. Sadness ensues')
            res.sendStatus(500)
        })
});



/**
 * POST route template
 */
// router.post('/', (req, res) => {
//     console.log('');
//     const sqlTEXT =`INSERT INTO "shows" ("band_name", "date", "venue", "city_state", "memories", "people_went_with", "band_website"???, "images") 
//   VALUES ;
// });

module.exports = router;