CREATE TABLE Users(
	id SERIAL PRIMARY KEY,
	email VARCHAR(255) UNIQUE NOT NULL,
	hashed_password VARCHAR(255) NOT NULL,
	username VARCHAR(255) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE Admins(
	id SERIAL PRIMARY KEY,
	email VARCHAR(255) UNIQUE NOT NULL,
	hashed_password VARCHAR(255) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE Owners(
	id SERIAL PRIMARY KEY,
	email VARCHAR(255) UNIQUE NOT NULL,
	hashed_password VARCHAR(255) NOT NULL,
	phone_no VARCHAR(255) NOT NULL,
	verified_by INT REFERENCES Admins(id),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE Grounds(
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	phone_no VARCHAR(255) NOT NULL,
	latitude VARCHAR(255) NOT NULL,
	longitude VARCHAR(255) NOT NULL,
	city VARCHAR(255) NOT NULL,
	country VARCHAR(255) NOT NULL,
	address VARCHAR(255) NOT NULL,
	description VARCHAR(255) NOT NULL,
	rating FLOAT,
	verified_by INT REFERENCES Admins(id),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE GroundImages(
    id SERIAL PRIMARY KEY,
    ground_id INT REFERENCES Grounds(id) ON DELETE CASCADE,
    image_data BYTEA NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE Pitches(
	id SERIAL PRIMARY KEY,
	ground_id INT REFERENCES Grounds(id),
	name VARCHAR(255) NOT NULL,
	description TEXT NOT NULL,
	length VARCHAR(255) NOT NULL,
	width VARCHAR(255) NOT NULL,
	price_per_60mins VARCHAR(255) NOT NULL,
	price_per_90mins VARCHAR(255) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE Bookings(
	id SERIAL PRIMARY KEY,
	pitch_id INT REFERENCES Pitches(id),
	ground_id INT REFERENCES Grounds(id),
	user_email VARCHAR(255) REFERENCES Users(email),
	start_time TIMESTAMP NOT NULL,		--assumed UTC
	duration INTERVAL NOT NULL CHECK (duration = '60 minutes' OR duration = '90 minutes'),
	end_time TIMESTAMP GENERATED ALWAYS AS (start_time + duration) STORED,
	payment_status VARCHAR(255) CHECK (payment_status IN ('pending', 'paid')) DEFAULT 'pending',
	UNIQUE (pitch_id, user_email, start_time)
);

CREATE TABLE GroundOwners(
	id SERIAL NOT NULL,
	ground_id INT REFERENCES Grounds(id) ON DELETE CASCADE,
	owner_id INT REFERENCES Owners(id) ON DELETE CASCADE,
	PRIMARY KEY (ground_id, owner_id)
);
CREATE TABLE AdminLogs (
    id SERIAL PRIMARY KEY,
    admin_id INT REFERENCES Admins(id) ON DELETE CASCADE, 
    login_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45), -- Stores the IP address, IPv4 or IPv6 compatible
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE OwnerLogs (
    id SERIAL PRIMARY KEY,
    owner_id INT REFERENCES Owners(id) ON DELETE CASCADE,
    login_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45), -- Stores the IP address, IPv4 or IPv6 compatible
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE UserLogs (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(id) ON DELETE CASCADE,
    login_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45), -- Stores the IP address, IPv4 or IPv6 compatible
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);