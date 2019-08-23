CREATE TABLE shows
(
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "band_name" VARCHAR (100) NOT NULL,
    "date" VARCHAR,
    "venue" VARCHAR (100),
    "city_state" VARCHAR (50),
    "memories" VARCHAR (400),
    "people_went_with" VARCHAR (100),
    "band_website" VARCHAR
);

CREATE TABLE images
(
    "id" SERIAL PRIMARY KEY,
    "shows_id" INT REFERENCES "shows",
    "url" VARCHAR,
    "main_image" BOOLEAN
);

CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

INSERT INTO "shows"
    ("user_id", "band_name", "date", "venue", "city_state", "memories", "people_went_with", "band_website")
VALUES
    ('1', 'Edward Sharpe and the Magnetic Zeros: Broken Social Scene', '8/3/2019', 'CHS Field', 'St. Paul, MN', 'The sun was setting against the backdrop of the stage on CHS Field', 'Rebecca, Riley, and Kyle', 'https://www.edwardsharpeandthemagneticzeros.com');
INSERT INTO "shows"
    ("user_id", "band_name", "date", "venue", "city_state", "memories", "people_went_with", "band_website")
VALUES('1', 'Garbage:Blondie', '7/21/2017', 'Treasure Island Casino', 'Prior Lake, MN', 'Natalie and I snagged ninth row center tickets for free. Seeing Blondie was one of my life goals! We ran into Alyssa there and all danced through the show!', 'Natalie', 'blondie.net');
INSERT INTO "shows"
    ("user_id", "band_name", "date", "venue", "city_state", "memories", "people_went_with", "band_website")
VALUES
    ('1', 'Haim: Lizzo', '5/15/2018', 'Palace Theatre', 'St. Paul, MN', 'Lizzo always puts on an amazing live show. Haim is hella white girl music!', 'Rebecca and John', 'https://www.haimtheband.com');

INSERT INTO "shows"
    ("user_id", "band_name", "date", "venue", "city_state", "memories", "people_went_with", "band_website")
VALUES
    ('1', 'Belle and Sebastian: The New Pornographers ', '3/5/2006', '930 Club', 'Washington DC', 'It was my birthday and I managed to snag free tickets. Both bands played an encore birthday song for someone in their band. ', 'Amanda', 'https://belleandsebastian.com/');

INSERT INTO "shows"
    ("user_id", "band_name", "date", "venue", "city_state", "memories", "people_went_with", "band_website")
VALUES
    ('1', 'Bob Dylan:Paul Simon', '7/2/1999', 'Canterbury Park', 'Shakopee, MN', 'Had a blast dancing with my parents. For some reason the opener to the show was The Rembrandts.', 'Emily and The Parents', '');
INSERT INTO "shows"
    ("user_id", "band_name", "date", "venue", "city_state", "memories", "people_went_with", "band_website")
VALUES
    ('1', 'Ladytron', '9/18/2003', 'Astoria Theatre', 'London, England', 'One of the best shows of my life!', 'Richard Evans Lacey', '');
INSERT INTO "shows"
    ("user_id", "band_name", "date", "venue", "city_state", "memories", "people_went_with", "band_website")
VALUES
    ('1', 'Eaux Claires', '2015', 'Foster Farms', 'Eaux Claires', 'I met a guy who had stolen a golf cart from the festival and was driving it around the campgrounds.', 'Chris and Natalie', '');
INSERT INTO "shows"
    ("user_id", "band_name", "date", "venue", "city_state", "memories", "people_went_with", "band_website")
VALUES
    ('2', 'Blink 182', '7/2/1999', 'First Ave', 'Minneapolis, MN', 'It was super fun!', 'The cast of Taboo', '');

INSERT INTO "images"
    ("shows_id", "url", "main_image")
VALUES
    ('1', 'images/EdwardSharpe.jpg', 'true');
INSERT INTO "images"
    ("shows_id", "url", "main_image")
VALUES
    ('3', 'images/HaimLizzo.jpg', 'true');
INSERT INTO "images"
    ("shows_id", "url", "main_image")
VALUES
    ('1', 'images/BrokenSocialScene.jpg', 'false');
INSERT INTO "images"
    ("shows_id", "url", "main_image")
VALUES
    ('3', 'images/Haim.jpg', 'false');
INSERT INTO "images"
    ("shows_id", "url", "main_image")
VALUES
    ('3', 'images/HaimEnd.jpg', 'false');

INSERT INTO "images"
    ("shows_id", "url", "main_image")
VALUES
    ('2', 'images/Garbage.jpg', 'true');
INSERT INTO "images"
    ("shows_id", "url", "main_image")
VALUES
    ('2', 'images/Blondie.jpg', 'false');
    INSERT INTO "images"
    ("shows_id", "url", "main_image")
VALUES
    ('4', 'images/BelleAndSebastian.jpg', 'true');
INSERT INTO "images"
    ("shows_id", "url", "main_image")
VALUES
    ('4', 'images/NewPornographers.jpg', 'false');

INSERT INTO "images"
    ("shows_id", "url", "main_image")
VALUES
    ('5', 'images/Dylan.jpg', 'true');
INSERT INTO "images"
    ("shows_id", "url", "main_image")
VALUES
    ('5', 'images/SimonTicket.jpg', 'false');
    INSERT INTO "images"
    ("shows_id", "url", "main_image")
VALUES
    ('6', 'images/Ladytron1.jpg', 'true');
INSERT INTO "images"
    ("shows_id", "url", "main_image")
VALUES
    ('6', 'images/Ladytron2.jpg', 'false');

INSERT INTO "images"
    ("shows_id", "url", "main_image")
VALUES
    ('7', 'images/EauxClaires.jpg', 'true');
INSERT INTO "images"
    ("shows_id", "url", "main_image")
VALUES
    ('7', 'images/EauxClaires2.jpg', 'false');

SELECT *
FROM "shows"
    JOIN "images" on shows.id = images.shows_id
WHERE "main_image" = 'true'
ORDER BY "shows"."id";

SELECT *
from "shows"
    JOIN "images" on "shows"."id" = "images"."shows_id"
WHERE "shows"."id"=1
ORDER BY "shows"."id";

SELECT *
FROM "shows"
    JOIN "images" on "shows"."id" = "images"."shows_id"
WHERE "main_image" = 'True';

DELETE FROM "images" WHERE id=15;
DELETE FROM "shows" WHERE id=1;

SELECT *
FROM "shows"
    JOIN "images" on shows.id = images.shows_id
WHERE "main_image" = 'true'
    AND "user_id" = '1'
ORDER BY "shows"."id";
