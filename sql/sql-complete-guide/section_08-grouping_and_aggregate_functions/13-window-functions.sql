-- SELECT booking_date,
--     amount_tipped,
--     SUM(amount_tipped) OVER() AS total_tips
-- FROM bookings;
--
-- SELECT booking_date,
--     amount_tipped,
--     SUM(amount_tipped) OVER(PARTITION BY booking_date) AS total_tips
-- FROM bookings;
--
-- SELECT booking_date,
--     amount_tipped,
--     SUM(amount_tipped) OVER(
--         PARTITION BY booking_date
--         ORDER BY amount_billed
--     )
-- FROM bookings;
--
SELECT booking_date,
    amount_tipped,
    RANK() OVER(
        PARTITION BY booking_date
        ORDER BY amount_tipped DESC
    )
FROM bookings;