/*
  Warnings:

  - You are about to drop the column `maxExperience` on the `JobPosition` table. All the data in the column will be lost.
  - You are about to drop the column `minExperience` on the `JobPosition` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "JobPosition" DROP COLUMN "maxExperience",
DROP COLUMN "minExperience",
ADD COLUMN     "maximumExperience" INTEGER,
ADD COLUMN     "minimumExperience" INTEGER;
