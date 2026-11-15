
--AGGREGATION


CREATE TABLE smart_watch_sales(
  sales_id SERIAL PRIMARY KEY,
  brand VARCHAR(50),
  model VARCHAR(100),
  city VARCHAR(50),
  units_sold INT,
  price_per_unit DECIMAL(10,2),
  sale_date DATE
);

INSERT INTO smart_watch_sales (brand, model, city, units_sold, price_per_unit, sale_date) VALUES
('Boat', 'Storm Call', 'Mumbai', 10, 1500.00, '2023-10-01'),
('Boat', 'Storm Call', 'Delhi', 15, 1500.00, '2023-10-02'),
('Noise', 'ColorFit', 'Bangalore', 20, 2000.00, '2023-10-01'),
('Noise', 'ColorFit', 'Mumbai', 5, 2000.00, '2023-10-03'),
('Apple', 'Watch Series 9', 'Mumbai', 2, 45000.00, '2023-10-01'),
('Apple', 'Watch Series 9', 'Bangalore', 8, 45000.00, '2023-10-02'),
('Samsung', 'Galaxy Watch', 'Delhi', 3, 25000.00, '2023-10-01'),
('Boat', 'Xtend', 'Pune', 25, 1200.00, '2023-10-04'),
('Noise', 'Pro 4', 'Delhi', 12, 2500.00, '2023-10-05');


SELECT COUNT(*) as tottal_rows FROM smart_watch_sales ;

SELECT SUM(units_sold*price_per_unit) AS total_revenue FROM smart_watch_sales

SELECT AVG(price_per_unit) AS avg_price_per_unit FROM smart_watch_sales

SELECT MIN(price_per_unit) AS cheapest FROM smart_watch_sales
SELECT MAX(price_per_unit) AS costliest FROM smart_watch_sales



-- GROUP BY

SELECT brand, SUM(units_sold) AS total_units_sold
FROM  smart_watch_sales
GROUP BY brand
ORDER BY total_units_sold DESC


SELECT city, SUM(units_sold * price_per_unit) AS city_revenue
FROM  smart_watch_sales
GROUP BY city
ORDER BY city_revenue DESC


SELECT brand, MIN(price_per_unit) AS price
FROM  smart_watch_sales
GROUP BY brand


SELECT city,brand , SUM(units_sold) AS units
FROM smart_watch_sales
GROUP BY city,brand

--USING HAVING KEYWORD
//Study on ur own


// FLOW OF SQL
WHERE
SELECT
FROM <TABLE>
JOIN
WHERE CLAUSE
GROUP BY
HAVING
ORDER BY
LIMIT
