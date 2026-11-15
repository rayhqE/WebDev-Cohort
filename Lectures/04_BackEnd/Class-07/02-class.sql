CREATE TABLE ipl_players (
  player_id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  team VARCHAR(50),
  role VARCHAR(50),
  runs_scored INT CHECK(runs_scored > 0),
  wickets_taken INT CHECK(wickets_taken > 0),
  auction_price_crore INT
);
ALTER TABLE ipl_players
ADD COLUMN nickname VARCHAR(50);
INSERT INTO ipl_players (
    name,
    team,
    role,
    runs_scored,
    wickets_taken,
    auction_price_crore,
    nickname
  )
VALUES (
    'Virat Kohli',
    'RCB',
    'Batsman',
    973,
    1,
    15.00,
    'King Kohli'
  ),
  (
    'MS Dhoni',
    'CSK',
    'Wicketkeeper',
    450,
    1,
    12.00,
    'Thala'
  ),
  (
    'Jasprit Bumrah',
    'Mumbai Indians',
    'Bowler',
    15,
    27,
    12.00,
    'Jassi'
  ),
  (
    'Hardik Pandya',
    'Mumbai Indians',
    'All-Rounder',
    400,
    15,
    15.00,
    'Kung Fu Pandya'
  ),
  (
    'Sunil Narine',
    'KKR',
    'All-Rounder',
    350,
    20,
    8.50,
    'Carrom King'
  ),
  (
    'Rohit Sharma',
    'Mumbai Indians',
    'Batsman',
    550,
    1,
    16.00,
    'Hitman'
  ),
  (
    'Rashid Khan',
    'Gujarat Titans',
    'Bowler',
    50,
    19,
    15.00,
    'The Magician'
  ),
  (
    'Rinku Singh',
    'KKR',
    'Batsman',
    475,
    1,
    0.55,
    'The Spirit'
  ),
  (
    'Arjun Tendulkar',
    'Mumbai Indians',
    'Bowler',
    10,
    3,
    0.30,
    'Arjun'
  ),
  (
    'Kane Williamson',
    'LSG',
    'Batsman',
    600,
    1,
    11.00,
    'Kane Mama'
  ),
  (
    'Mystery Player',
    NULL,
    'Batsman',
    1,
    1,
    1.00,
    'Mystery Man'
  );
-- Unsold / No Team (NULL)
SELECT *FROM ipl_players;
SELECT name, nickname, team from ipl_players;


--  FILTERING
SELECT * FROM ipl_players WHERE team = 'Mumbai Indians';
-- TRUNCATE TABLE ipl_players RESTART IDENTITY;
SELECT name,  nickname,  auction_price_crore FROM ipl_players WHERE auction_price_crore > 10

-- Logical Operators(AND. OR)

SELECT * FROM ipl_players WHERE wickets_taken>10 AND  role= 'All-Rounder';

SELECT * FROM ipl_players WHERE team='CSK' OR team='RCB';


-- Pattern Matching 

SELECT * FROM ipl_players WHERE  name LIKE '__s%' -- case sensetive
SELECT * FROM ipl_players WHERE  name ILIKE '__S%' -- not case sensetive

SELECT * FROM ipl_players WHERE team  IN ('Mumbai Indians','KKR','Gujarat Titans','CSK','RCB');

SELECT * FROM ipl_players WHERE auction_price_crore BETWEEN 10 AND 15;


--    Sorting

SELECT name,nickname,auction_price_crore 
FROM ipl_players
ORDER BY auction_price_crore DESC

SELECT  team ,name, auction_price_crore
FROM ipl_players
ORDER BY team ASC, auction_price_crore DESC;
 

-- pagination 
SELECT name,nickname, auction_price_crore
FROM ipl_players
ORDER BY auction_price_crore DESC
LIMIT 3


SELECT name,nickname, auction_price_crore
FROM ipl_players
ORDER BY auction_price_crore DESC
LIMIT 3 OFFSET 3


SELECT name,nickname, auction_price_crore
FROM ipl_players
ORDER BY auction_price_crore DESC
LIMIT 15 OFFSET (page-1) * limit; 

page 1: (1-1)* 15 = 0 --  offset
page 2: (2-1)* 15 = 15 -- offset
page 3: (3-1)* 15 = 30 -- offset
page 4: (4-1)* 15 = 45 -- offset 

-- Modify data in runtime

SELECT 
  name,nickname,auction_price_crore,
  (auction_price_crore *100) AS price_in_lakhs
FROM ipl_players;


SELECT 
  name,nickname,auction_price_crore,
  (auction_price_crore + 2 ) AS new_bidding_price
FROM ipl_players;

-- How you can get  distinct values
SELECT distinct role FROM ipl_players



-- DQL - Data query language
