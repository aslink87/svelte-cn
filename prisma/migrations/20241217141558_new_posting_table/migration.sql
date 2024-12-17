-- CreateTable
CREATE TABLE "Posting" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "link" TEXT NOT NULL,

    CONSTRAINT "Posting_pkey" PRIMARY KEY ("id")
);
