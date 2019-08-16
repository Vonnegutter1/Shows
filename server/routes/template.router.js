const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Start of GET Routes
 */
router.get('/', (req, res) => {
   
    const sqlText = `SELECT * FROM "shows"
  JOIN "images" on shows.id = images.shows_id
  WHERE "main_image" = 'true'
  ORDER BY "shows"."id";`;
    pool.query(sqlText)
        .then((response) => {
            res.send(response.rows);
            console.log('In Router GET shows data', response.rows);
        })
        .catch((error) => {
            console.log('Unable to get show data. Sadness ensues')
            res.sendStatus(500)
        })
});

router.get('/:id', (req, res) => {
    console.log('req.query.id', req.params.id);
    console.log('req.body.id',req.body)
    const sqlText = `SELECT * from "shows"
    JOIN "images" on "shows"."id" = "images"."shows_id"
    WHERE "shows"."id" = $1
    ORDER BY "shows"."id";`;
    value = [req.params.id];
    
    pool.query(sqlText, value)
        .then((response) => {
            console.log('response.rows is', response.rows)
            res.send(response.rows);
        })
        .catch((error) => {
            console.log('Unable to get show details.', error)
            res.sendStatus(500)
        })
});



router.get('/images/:id', (req, res) => {
    console.log('req.query.id', req.params.id);
    const sqlText = `SELECT * from "shows"
    JOIN "images" on "shows"."id" = "images"."shows_id"
    WHERE "shows"."id" = $1
    ORDER BY "shows"."id";`;
    value =[req.params.id];

    pool.query(sqlText, value)
        .then((response) => {
            console.log('response.rows is', response.rows)
            res.send(response.rows);
        })
        .catch((error) => {
            console.log('unable to get show images', error)
            res.sendStatus(500)
        })
});



/**
 * POST route template
 */

router.post('/add', async (req, res) => {
    const client = await pool.connect();
    console.log(req.body);
    try {
        const {
            band_name,
            date,
            venue,
            city_state,
            memories,
            people_went_with,
            band_website,
            images,

        } = req.body;
        await client.query('BEGIN')
        const showsInsertResults = await client.query (`INSERT INTO "shows" ("band_name", "date", "venue", "city_state", "memories", "people_went_with", 
        "band_website")
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id;`, [band_name, date, venue, city_state, memories, people_went_with, band_website]);
        const showId = showsInsertResults.rows[0].id;
        console.log('This is the', showId )
        await Promise.all(images.map(image => {
         
         if
             (image !== '') {
             const insertLineItemText = `INSERT INTO "images" ("shows_id", "url", "main_image") 
            VALUES ($1, $2, $3)`;
             const insertLineItemValues = [showId, image, true];
             return client.query(insertLineItemText, insertLineItemValues);
         }
        }));       
        await client.query('COMMIT')
        res.sendStatus(201);
    } catch (error){
        await client.query('ROLLBACK')
        console.log('Error POST /shows/add', error);
        res.sendStatus(500);
    } finally {
        client.release()
    }
});
 

router.delete('/:id', (req, res) => {
    console.log('SKFHJDIUWETKHUG', req.params.id);
    const sqlText1 = `DELETE FROM "images" WHERE shows_id=$1;`;
    const sqlText2 = `DELETE FROM "shows" WHERE id=$1;`;

    value = [req.params.id];
    pool.query(sqlText1, value)
    pool.query(sqlText2, value)
        .then((response) => {
            res.sendStatus
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500)
        })
});



module.exports = router;