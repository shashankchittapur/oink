-- AlterTable
ALTER TABLE "JobPosition" ADD COLUMN     "location" TEXT,
ADD COLUMN     "maxExperience" INTEGER,
ADD COLUMN     "minExperience" INTEGER,
ADD COLUMN     "techStack" TEXT[];
