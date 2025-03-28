-- SELECT booking_date,
--     SUM(num_guests)
-- FROM bookings
-- GROUP BY booking_date;
-- 
-- SELECT p.name,
--     SUM(b.num_guests)
-- FROM payment_methods AS p
--     INNER JOIN bookings AS b on p.id = b.payment_id
-- GROUP BY name;
-- 
SELECT p.name,
    b.booking_date,
    SUM(b.num_guests),
    ROUND(AVG(b.amount_tipped), 2)
FROM payment_methods AS p
    INNER JOIN bookings AS b on p.id = b.payment_id
GROUP BY p.name,
    b.booking_date;