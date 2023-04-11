-- CreateTable
CREATE TABLE "Hero" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "link" TEXT,
    "image" TEXT,
    "video" TEXT,

    CONSTRAINT "Hero_pkey" PRIMARY KEY ("id")
);
