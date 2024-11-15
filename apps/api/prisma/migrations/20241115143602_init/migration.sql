-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(45) NOT NULL,
    `last_name` VARCHAR(45) NOT NULL,
    `email` VARCHAR(45) NOT NULL,
    `phone` VARCHAR(20) NULL,
    `password` VARCHAR(255) NOT NULL,
    `gender` ENUM('MALE', 'FEMALE') NULL,
    `date_of_birth` DATE NULL,
    `created_at` DATETIME(0) NULL,
    `updated_at` DATETIME(0) NULL,

    UNIQUE INDEX `email_UNIQUE`(`email`),
    UNIQUE INDEX `phone_UNIQUE`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employee` (
    `id` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(45) NOT NULL,
    `last_name` VARCHAR(45) NOT NULL,
    `email` VARCHAR(45) NOT NULL,
    `phone` VARCHAR(20) NULL,
    `address` TEXT NULL,
    `created_at` DATETIME(0) NULL,
    `updated_at` DATETIME(0) NULL,

    UNIQUE INDEX `email_UNIQUE`(`email`),
    UNIQUE INDEX `phone_UNIQUE`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
