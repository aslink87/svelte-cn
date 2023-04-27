-- CreateTable
CREATE TABLE "Newsletter" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "date" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "doc" TEXT NOT NULL,
    "index" INTEGER NOT NULL,

    CONSTRAINT "Newsletter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Newsletter_index_key" ON "Newsletter"("index");
