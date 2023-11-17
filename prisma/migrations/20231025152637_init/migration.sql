/*
  Warnings:

  - You are about to drop the column `techStack` on the `JobPosition` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "JobPosition" DROP COLUMN "techStack",
ADD COLUMN     "technologies" TEXT[];
