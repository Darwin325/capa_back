DROP TABLE IF EXISTS tv_series_intervals;
DROP TABLE IF EXISTS tv_series;
CREATE TABLE tv_series (
    id bigint unsigned NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    channel varchar(100) NOT NULL,
    gender varchar(100) NOT NULL,
    created_at timestamp NULL DEFAULT NULL,
    updated_at timestamp NULL DEFAULT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE tv_series_intervals (
    id bigint unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tv_series_id bigint unsigned NOT NULL,
    week_day varchar(50) NOT NULL,
    show_time time NOT NULL,
    created_at timestamp NULL DEFAULT NULL,
    updated_at timestamp NULL DEFAULT NULL,
    FOREIGN KEY (tv_series_id) REFERENCES tv_series (id) ON DELETE CASCADE
);
INSERT INTO tv_series (title, channel, gender, created_at, updated_at)
VALUES (
        'The Office',
        'Dunder Mifflin TV',
        'comedy',
        NOW(),
        NOW()
    ),
    ('Breaking Bad', 'AMC TV', 'drama', NOW(), NOW()),
    (
        'Stranger Things',
        'Netflix',
        'fantasy',
        NOW(),
        NOW()
    ),
    ('The Crown', 'Netflix', 'drama', NOW(), NOW()),
    (
        'The Mandalorian',
        'Disney+',
        'sci-fi',
        NOW(),
        NOW()
    );
INSERT INTO tv_series_intervals (tv_series_id, week_day, show_time)
VALUES (1, 'Monday', '20:00:00'),
    (1, 'Wednesday', '21:30:00'),
    (1, 'Friday', '22:00:00'),
    (1, 'Saturday', '18:00:00'),
    (1, 'Sunday', '19:30:00'),
    (2, 'Tuesday', '19:00:00'),
    (2, 'Thursday', '20:30:00'),
    (2, 'Saturday', '23:00:00'),
    (3, 'Monday', '21:00:00'),
    (3, 'Wednesday', '22:30:00'),
    (4, 'Tuesday', '22:00:00'),
    (4, 'Thursday', '21:30:00'),
    (4, 'Saturday', '20:00:00'),
    (4, 'Sunday', '19:00:00'),
    (5, 'Monday', '22:00:00'),
    (5, 'Tuesday', '23:00:00'),
    (5, 'Wednesday', '21:30:00'),
    (5, 'Friday', '19:00:00'),
    (5, 'Sunday', '18:30:00');