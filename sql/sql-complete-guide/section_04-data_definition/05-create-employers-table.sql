CREATE TABLE employers (
    company_name VARCHAR(250),
    company_address VARCHAR(300),
    -- yearly_revenue FLOAT(10,2) -- Approximation, Allowed: 123.12, 12.1, Not allowed: 1234.12, 1.123
    yearly_revenue NUMERIC(10, 2),
    -- Exact, Allowed: 123.12, Not allowed: 12345.123
    is_hiring BOOLEAN DEFAULT false
);