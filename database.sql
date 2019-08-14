
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE shows
(
    "id" SERIAL PRIMARY KEY,
    "band_name" VARCHAR (100) NOT NULL,
    "date" DATE,
    "venue" VARCHAR (100),
    "city_state" VARCHAR (50),
    "memories" VARCHAR (140),
    "people_went_with" VARCHAR (100),
    "band_website" VARCHAR
);

INSERT INTO "shows"
    ("band_name", "date", "venue", "city_state", "memories", "people_went_with", "band_website")
VALUES
    ('Edward Sharpe and the Magnetic Zeros: Broken Social Scene', '8/3/2019', 'CHS Field', 'St. Paul, MN', 'The sun was setting against the backdrop of the stage on CHS Field', 'Rebecca, Riley, and Kyle', 'https://www.edwardsharpeandthemagneticzeros.com');


SELECT *
FROM "shows"
    JOIN "images" on shows.id = images.shows_id
WHERE "main_image" = 'true';

SELECT *
from "shows"
    JOIN "images" on "shows"."id" = "images"."shows_id"
WHERE "shows"."id"=1;

CREATE TABLE images
(
    "id" SERIAL PRIMARY KEY,
    "shows_id" INT REFERENCES "shows",
    "url" VARCHAR,
    "main_image" BOOLEAN
);

CREATE TABLE users
(
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR (50),
    "last_name" VARCHAR (60),
    "email" VARCHAR (100),
    "username" VARCHAR (100),
    "user_id" INT REFERENCES "shows"


);

CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

INSERT INTO "shows"
    ("band_name", "date", "venue", "city_state", "memories", "people_went_with", "band_website")
VALUES
    ('Haim: Lizzo', '5/15/2018', 'Palace Theatre', 'St. Paul, MN', 'Lizzo always puts on an amazing live show. Haim is hella white girl music!', 'Rebecca and John', 'https://www.haimtheband.com');

SELECT *
from "shows"
WHERE id=1;

INSERT INTO "images"
    ("shows_id", "url", "main_image")
VALUES
    ('1', 'images/EdwardSharpe.jpg', 'true');
INSERT INTO "images"
    ("shows_id", "url", "main_image")
VALUES
    ('2', 'images/HaimLizzo.jpg', 'true');
INSERT INTO "images"
    ("shows_id", "url", "main_image")
VALUES
    ('1', 'images/BrokenSocialScene.jpg', 'false');

DELETE FROM "images" WHERE id=3;
