-- CreateTable
CREATE TABLE "Calendar" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "img" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Calendar_pkey" PRIMARY KEY ("id")
);
