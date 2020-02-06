CREATE TABLE Vaccination(
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `userID` int(11) DEFAULT NULL,
    `recorded_on` date DEFAULT NULL,
    `temperature` int(11) DEFAULT NULL,
    `bloodPressure` int(11) DEFAULT NULL,
    `pulseRate` int(11) DEFAULT NULL,
    `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;