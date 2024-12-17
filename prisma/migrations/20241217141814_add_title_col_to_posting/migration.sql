/*
  Warnings:

  - Added the required column `title` to the `Posting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Posting" ADD COLUMN     "title" TEXT NOT NULL;
