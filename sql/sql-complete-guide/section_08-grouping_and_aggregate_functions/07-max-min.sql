-- SELECT MAX(num_seats) FROM tables;
-- 
-- SELECT MIN(num_seats) FROM tables;
--
-- SELECT MAX(amount_billed) AS max_amount_billed,
--     MAX(amount_tipped) AS max_amount_tipped
-- FROM bookings;
-- 
SELECT MIN(booking_date),
    MAX(booking_date)
FROM bookings;