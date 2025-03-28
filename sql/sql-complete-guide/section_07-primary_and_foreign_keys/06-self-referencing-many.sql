CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(300) NOT NULL,
    last_name VARCHAR(300) NOT NULL
);
CREATE TABLE users_friends (
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    friend_id INT REFERENCES users(id) ON DELETE CASCADE,
    CHECK (user_id < friend_id),
    PRIMARY KEY (user_id, friend_id)
);