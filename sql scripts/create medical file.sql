CREATE TABLE MedicalFileType(
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `userId` int(11) DEFAULT NULL,
    `medical_file_type_id` varchar(45) DEFAULT NULL,
    `fileName` varchar(200) DEFAULT NULL,
    `filePath` varchar(200) DEFAULT NULL,
    `date_uploaded` date DEFAULT NULL,
    `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;