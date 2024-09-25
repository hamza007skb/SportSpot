INSERT INTO Grounds (id, name, phone_no, latitude, longitude, city, country, address, description, rating)
VALUES 
(15, 'Greenfield Sports Arena', '123-456-7890', '40.712776', '-74.005974', 'New York', 'USA', '123 Main St', 'A large sports arena.', 4.5),
(16, 'Blue Sky Stadium', '234-567-8901', '34.052235', '-118.243683', 'Los Angeles', 'USA', '456 Elm St', 'An open-air stadium.', 4.2),
(17, 'Sunset Sports Complex', '345-678-9012', '41.878113', '-87.629799', 'Chicago', 'USA', '789 Oak St', 'A small, family-friendly ground.', 4.0),
(18, 'Mountain View Grounds', '456-789-0123', '37.774929', '-122.419418', 'San Francisco', 'USA', '101 Pine St', 'A hilltop sports ground.', 4.7),
(19, 'Lakeside Arena', '567-890-1234', '47.606209', '-122.332069', 'Seattle', 'USA', '202 Maple St', 'A beautiful arena near the lake.', 4.6),
(20, 'Riverside Sports Park', '678-901-2345', '51.507351', '-0.127758', 'London', 'UK', '303 Birch St', 'A riverside sports park.', 4.1),
(21, 'Palm Beach Field', '789-012-3456', '26.715342', '-80.053375', 'Palm Beach', 'USA', '404 Cedar St', 'A beachside sports facility.', 4.3),
(22, 'Desert Sports Arena', '890-123-4567', '36.169941', '-115.139832', 'Las Vegas', 'USA', '505 Willow St', 'A sports complex in the desert.', 4.8),
(23, 'Highland Sports Club', '901-234-5678', '55.953251', '-3.188267', 'Edinburgh', 'UK', '606 Redwood St', 'A highland sports club.', 4.9),
(24, 'Canyon Grounds', '012-345-6789', '34.052235', '-118.243683', 'Phoenix', 'USA', '707 Fir St', 'A sports ground near the canyon.', 4.4);

INSERT INTO Pitches (ground_id, name, description, length, width, price_per_60mins, price_per_90mins)
VALUES 
-- Pitches for Ground 15
(15, 'Soccer Pitch A', 'A standard soccer field.', '100m', '60m', '100', '150'),
(15, 'Basketball Court A', 'An outdoor basketball court.', '28m', '15m', '50', '75'),

-- Pitches for Ground 16
(16, 'Football Pitch B', 'A full-sized football field.', '120m', '80m', '200', '300'),
(16, 'Tennis Court B', 'A professional tennis court.', '23.77m', '8.23m', '70', '100'),

-- Pitches for Ground 17
(17, 'Cricket Ground C', 'A small cricket ground.', '137m', '50m', '150', '200'),
(17, 'Volleyball Court C', 'An indoor volleyball court.', '18m', '9m', '50', '75'),

-- Pitches for Ground 18
(18, 'Baseball Field D', 'A full-sized baseball field.', '110m', '100m', '180', '250'),
(18, 'Rugby Field D', 'An open rugby field.', '100m', '70m', '150', '220'),

-- Pitches for Ground 19
(19, 'Hockey Field E', 'A standard hockey field.', '91.4m', '55m', '140', '190'),
(19, 'Athletics Track E', 'A standard athletics track.', '400m', '10m', '160', '220'),

-- Pitches for Ground 20
(20, 'Soccer Pitch F', 'An artificial soccer field.', '100m', '60m', '110', '160'),
(20, 'Basketball Court F', 'An indoor basketball court.', '28m', '15m', '55', '80'),

-- Pitches for Ground 21
(21, 'Football Pitch G', 'A large football field.', '120m', '80m', '210', '310'),
(21, 'Tennis Court G', 'A clay tennis court.', '23.77m', '8.23m', '75', '105'),

-- Pitches for Ground 22
(22, 'Cricket Ground H', 'A premium cricket ground.', '150m', '60m', '170', '230'),
(22, 'Volleyball Court H', 'A beach volleyball court.', '18m', '9m', '55', '80'),

-- Pitches for Ground 23
(23, 'Baseball Field I', 'A small baseball field.', '90m', '90m', '120', '170'),
(23, 'Rugby Field I', 'An artificial rugby field.', '100m', '70m', '160', '230'),

-- Pitches for Ground 24
(24, 'Hockey Field J', 'An indoor hockey field.', '91.4m', '55m', '150', '210'),
(24, 'Athletics Track J', 'An open athletics track.', '400m', '10m', '170', '240');
