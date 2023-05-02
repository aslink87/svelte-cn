-- CreateTable
CREATE TABLE "Needs" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "item0" TEXT,
    "item1" TEXT,
    "item2" TEXT,
    "item3" TEXT,
    "item4" TEXT,
    "item5" TEXT,
    "item6" TEXT,
    "item7" TEXT,
    "item8" TEXT,
    "item9" TEXT,

    CONSTRAINT "Needs_pkey" PRIMARY KEY ("id")
);
