-- CreateTable
CREATE TABLE "Supper" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "img" TEXT NOT NULL,
    "alt" TEXT NOT NULL,

    CONSTRAINT "Supper_pkey" PRIMARY KEY ("id")
);
