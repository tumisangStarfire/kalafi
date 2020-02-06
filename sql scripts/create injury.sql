CREATE TABLE Injury(
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `userId` int(11) DEFAULT NULL,
    `date_of_injury` date DEFAULT NULL,
    `vitalsId` int(11) DEFAULT NULL,
    `injuryType` int(11) DEFAULT NULL,
    `doctorsNotes` varchar(255) DEFAULT NULL,
    `medicalFacility` int(11) DEFAULT NULL,
    `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;