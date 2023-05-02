-- CreateTable
CREATE TABLE "Blog" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "author" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "img" TEXT,
    "caption" TEXT,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);
