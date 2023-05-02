-- CreateTable
CREATE TABLE "PantryCalendar" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "img" TEXT NOT NULL,
    "alt" TEXT NOT NULL,

    CONSTRAINT "PantryCalendar_pkey" PRIMARY KEY ("id")
);
