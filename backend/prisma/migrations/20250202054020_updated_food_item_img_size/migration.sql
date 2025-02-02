-- AlterTable
ALTER TABLE `FoodItem` MODIFY `img` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT true;
