CREATE TABLE `Addresss` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `regionId` int(11) DEFAULT NULL,
  `cityId` varchar(45) DEFAULT NULL, 
   `townId` varchar(45) DEFAULT NULL,
  `village` varchar(45) DEFAULT NULL,
  `streetName` varchar(45) DEFAULT NULL,
  `plotNumber` varchar(45) DEFAULT NULL, 
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
