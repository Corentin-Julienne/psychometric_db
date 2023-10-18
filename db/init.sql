-- Creating user table

CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(255) UNIQUE NOT NULL,
	password VARCHAR(255) NOT NULL,
	profile_picture_url VARCHAR(1024) DEFAULT NULL,
	two_fa_key VARCHAR(255) DEFAULT NULL,
	created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Creating had_sessions table

CREATE TABLE IF NOT EXISTS had_sessions (
	id SERIAL PRIMARY KEY,
	user_id INT REFERENCES users(id) ON DELETE CASCADE,
	created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Creating had_a table

CREATE TABLE IF NOT EXISTS had_a (
	id SERIAL PRIMARY KEY,
	session_id INT UNIQUE REFERENCES had_sessions(id) ON DELETE CASCADE,
	item_1 INT NOT NULL,
	item_2 INT NOT NULL,
	item_3 INT NOT NULL,
	item_4 INT NOT NULL,
	item_5 INT NOT NULL,
	item_6 INT NOT NULL,
	item_7 INT NOT NULL
);

-- Creating had_d table

CREATE TABLE IF NOT EXISTS had_d (
	id SERIAL PRIMARY KEY,
	session_id INT UNIQUE REFERENCES had_sessions(id) ON DELETE CASCADE,
	item_1 INT NOT NULL,
	item_2 INT NOT NULL,
	item_3 INT NOT NULL,
	item_4 INT NOT NULL,
	item_5 INT NOT NULL,
	item_6 INT NOT NULL,
	item_7 INT NOT NULL
);

-- Creating bdi_13_sessions table

CREATE TABLE IF NOT EXISTS bdi_13_sessions (
	id SERIAL PRIMARY KEY,
	user_id INT REFERENCES users(id) ON DELETE CASCADE,
	created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Creating bdi_13 table

CREATE TABLE IF NOT EXISTS bdi_13 (
	id SERIAL PRIMARY KEY,
	session_id INT UNIQUE REFERENCES had_sessions(id) ON DELETE CASCADE,
	item_1 INT NOT NULL,
	item_2 INT NOT NULL,
	item_3 INT NOT NULL,
	item_4 INT NOT NULL,
	item_5 INT NOT NULL,
	item_6 INT NOT NULL,
	item_7 INT NOT NULL,
	item_8 INT NOT NULL,
	item_9 INT NOT NULL,
	item_10 INT NOT NULL,
	item_11 INT NOT NULL,
	item_12 INT NOT NULL,
	item_13 INT NOT NULL
); 

-- Creating stai_sessions table

CREATE TABLE IF NOT EXISTS stai_sessions (
	id SERIAL PRIMARY KEY,
	user_id INT REFERENCES users(id) ON DELETE CASCADE,
	created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Creating stai_y_a table

CREATE TABLE IF NOT EXISTS stai_y_a (
	id SERIAL PRIMARY KEY,
	session_id INT UNIQUE REFERENCES had_sessions(id) ON DELETE CASCADE,
	item_1 INT NOT NULL,
	item_2 INT NOT NULL,
	item_3 INT NOT NULL,
	item_4 INT NOT NULL,
	item_5 INT NOT NULL,
	item_6 INT NOT NULL,
	item_7 INT NOT NULL,
	item_8 INT NOT NULL,
	item_9 INT NOT NULL,
	item_10 INT NOT NULL,
	item_11 INT NOT NULL,
	item_12 INT NOT NULL,
	item_13 INT NOT NULL,
	item_14 INT NOT NULL,
	item_15 INT NOT NULL,
	item_16 INT NOT NULL,
	item_17 INT NOT NULL,
	item_18 INT NOT NULL,
	item_19 INT NOT NULL,
	item_20 INT NOT NULL
);

-- Creating stai_y_b table

CREATE TABLE IF NOT EXISTS stai_y_b (
	id SERIAL PRIMARY KEY,
	session_id INT UNIQUE REFERENCES had_sessions(id) ON DELETE CASCADE,
	item_1 INT NOT NULL,
	item_2 INT NOT NULL,
	item_3 INT NOT NULL,
	item_4 INT NOT NULL,
	item_5 INT NOT NULL,
	item_6 INT NOT NULL,
	item_7 INT NOT NULL,
	item_8 INT NOT NULL,
	item_9 INT NOT NULL,
	item_10 INT NOT NULL,
	item_11 INT NOT NULL,
	item_12 INT NOT NULL,
	item_13 INT NOT NULL,
	item_14 INT NOT NULL,
	item_15 INT NOT NULL,
	item_16 INT NOT NULL,
	item_17 INT NOT NULL,
	item_18 INT NOT NULL,
	item_19 INT NOT NULL,
	item_20 INT NOT NULL
);

-- Automatic timestamp management for users

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
	NEW.updated_at = now();
	RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_user_modtime
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
