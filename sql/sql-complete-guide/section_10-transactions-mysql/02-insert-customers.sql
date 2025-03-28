INSERT INTO customers(first_name, last_name, email)
VALUES(
        'Maria',
        'Jones',
        'maria@test.com'
    );
SAVEPOINT customer_inserted;