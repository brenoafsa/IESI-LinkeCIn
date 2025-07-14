/*
  Warnings:

  - You are about to drop the `TeacherRecord` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TeacherRecord" DROP CONSTRAINT "TeacherRecord_teacherId_fkey";

-- DropTable
DROP TABLE "TeacherRecord";
