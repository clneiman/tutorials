CREATE TABLE IF NOT EXISTS cities (name VARCHAR(200) PRIMARY KEY);
--
CREATE TABLE IF NOT EXISTS locations (
    id SERIAL PRIMARY KEY,
    city_name VARCHAR(200) REFERENCES cities(name) ON DELETE RESTRICT ON UPDATE CASCADE,
    title VARCHAR(300),
    street VARCHAR(300) NOT NULL,
    house_number VARCHAR(10) NOT NULL,
    postal_code VARCHAR(5) NOT NULL
);
--
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(300) NOT NULL,
    last_name VARCHAR(300) NOT NULL,
    birthdate DATE NOT NULL,
    email VARCHAR(300) NOT NULL
);
--
CREATE TABLE IF NOT EXISTS organizers (
    password VARCHAR(500) NOT NULL,
    user_id INT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE
);
--
CREATE TABLE IF NOT EXISTS tags (name VARCHAR(100) PRIMARY KEY);
--
CREATE TABLE IF NOT EXISTS events (
    id SERIAL PRIMARY KEY,
    location_id INT REFERENCES locations(id) ON DELETE CASCADE,
    organizer_id INT REFERENCES organizers(user_id) ON DELETE CASCADE,
    name VARCHAR(300) NOT NULL CHECK (LENGTH(name) > 5),
    date_planned TIMESTAMP NOT NULL,
    image VARCHAR(300),
    description TEXT NOT NULL,
    max_participants INT CHECK (max_participants > 0),
    min_age INT CHECK (min_age > 0)
);
--
CREATE TABLE IF NOT EXISTS events_users (
    event_id INT REFERENCES events(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    PRIMARY KEY (event_id, user_id)
);
--
CREATE TABLE IF NOT EXISTS events_tags (
    event_id INT REFERENCES events(id) ON DELETE CASCADE,
    tag_name VARCHAR(100) REFERENCES tags(name) ON DELETE CASCADE,
    PRIMARY KEY (event_id, tag_name)
);