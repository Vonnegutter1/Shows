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

router.post('/', async (req, res) => {
    const client = await pool.connect();

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
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id;`, [band_name, date, venue, city_state, memories, people_went_with]);
        const showId = showInsertResults.rows[0].id;

        await Promise.all(shows.map(show => {
            const insertLineItemText = `INSERT INTO "images" ("images") 
            VALUES ($1)`;
            const insertLineItemValues = [images];
            return client.query(insertLineItemText, insertLineItemValues);
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
// router.post('/', async (req, res) => {
//     const client = await pool.connect();

//     try {
//         const {
//             customer_name,
//             street_address,
//             city,
//             zip,
//             type,
//             total,
//             pizzas
//         } = req.body;
//         await client.query('BEGIN')
//         const orderInsertResults = await client.query(`INSERT INTO "orders" ("customer_name", "street_address", "city", "zip", "type", "total")
//         VALUES ($1, $2, $3, $4, $5, $6)
//         RETURNING id;`, [customer_name, street_address, city, zip, type, total]);
//         const orderId = orderInsertResults.rows[0].id;

//         await Promise.all(pizzas.map(pizza => {
//             const insertLineItemText = `INSERT INTO "line_item" ("order_id", "pizza_id", "quantity") VALUES ($1, $2, $3)`;
//             const insertLineItemValues = [orderId, pizza.id, pizza.quantity];
//             return client.query(insertLineItemText, insertLineItemValues);
//         }));
//         await client.query('COMMIT')
//         res.sendStatus(201);
//     } catch (error) {
//         await client.query('ROLLBACK')
//         console.log('Error POST /api/order', error);
//         res.sendStatus(500);
//     } finally {
//         client.release()
//     }
// });

module.exports = router;