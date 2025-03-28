-- Get all data
-- SELECT *
-- FROM sales;
-- Get specific columns
SELECT customer_name,
    product_name,
    volume / 1000 AS total_sales,
    date_created
FROM sales;