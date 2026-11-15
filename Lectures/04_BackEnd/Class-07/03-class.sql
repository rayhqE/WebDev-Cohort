CREATE TABLE canteen_menu(
  item_id SERIAL PRIMARY KEY,
  item_name  VARCHAR(100),
  category VARCHAR(50),
  price INT,
  is_available BOOLEAN DEFAULT TRUE

)

INSERT INTO canteen_menu
(item_name,category,price)
VALUES
('Masala Chai','Beverages','10'),
('Vada Pav','Snacks','15'),
('Samosa','Snacks','12'),
('Iced Tea','Beverages','40'),
('Rajma Chawal','Meals','60'),
('Maggi','Snacks','25'),
('Idli','Snacks','50');


UPDATE canteen_menu 
SET price = 20
WHERE item_name = 'Vada Pav'

UPDATE canteen_menu
SET price = price-5
WHERE category = 'Beverages'

UPDATE canteen_menu
SET is_available = FALSE, price = 20
WHERE item_name = 'Samosa'


DELETE FROM canteen_menu
WHERE item_name = 'Idli'


-- Dry run in SQL.




-- TRUNCATE TABLE canteen_menu RESTART IDENTITY;

SELECT * FROM canteen_menu;


-- DML - Data Manipulation Language
 