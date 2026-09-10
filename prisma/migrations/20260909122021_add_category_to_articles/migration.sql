-- AlterTable
ALTER TABLE `articles` ADD COLUMN `category` VARCHAR(191) NULL,
    ADD COLUMN `seoDescription` VARCHAR(191) NULL,
    ADD COLUMN `seoTitle` VARCHAR(191) NULL,
    ADD COLUMN `tags` JSON NULL;
