/*
  Warnings:

  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - Added the required column `fullName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('STUDENT', 'TEACHER');

-- CreateEnum
CREATE TYPE "OpportunityTypes" AS ENUM ('EXTENSION', 'COMPLEMENTARY');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "username",
ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "role" "UserRole" NOT NULL;

-- CreateTable
CREATE TABLE "StudentRecord" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "complementaryHours" INTEGER NOT NULL,
    "course" TEXT NOT NULL,
    "entrance" TEXT NOT NULL,
    "finishedSubjects" TEXT[],

    CONSTRAINT "StudentRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeacherRecord" (
    "id" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,
    "subjects" TEXT[],

    CONSTRAINT "TeacherRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OpportunityPost" (
    "id" TEXT NOT NULL,
    "tittle" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" "OpportunityTypes" NOT NULL,
    "deadline" TIMESTAMP(3) NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "hours" INTEGER NOT NULL,
    "publisherId" TEXT NOT NULL,

    CONSTRAINT "OpportunityPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Candidates" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_Candidates_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "StudentRecord_studentId_key" ON "StudentRecord"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "TeacherRecord_teacherId_key" ON "TeacherRecord"("teacherId");

-- CreateIndex
CREATE INDEX "_Candidates_B_index" ON "_Candidates"("B");

-- AddForeignKey
ALTER TABLE "StudentRecord" ADD CONSTRAINT "StudentRecord_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherRecord" ADD CONSTRAINT "TeacherRecord_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OpportunityPost" ADD CONSTRAINT "OpportunityPost_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Candidates" ADD CONSTRAINT "_Candidates_A_fkey" FOREIGN KEY ("A") REFERENCES "OpportunityPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Candidates" ADD CONSTRAINT "_Candidates_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
