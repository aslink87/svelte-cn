/*
  Warnings:

  - A unique constraint covering the columns `[index]` on the table `Posting` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Posting" ADD COLUMN     "index" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Posting_index_key" ON "Posting"("index");
