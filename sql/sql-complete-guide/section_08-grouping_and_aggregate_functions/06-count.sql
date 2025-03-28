-- SELECT COUNT(*)
-- FROM bookings;
--
-- SELECT COUNT(amount_tipped) AS number_of_tips
-- FROM bookings;
--
SELECT COUNT(DISTINCT booking_date) AS unique_booking_dates
FROM bookings;