-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "status" SET DEFAULT 'opened';

-- CreateTable
CREATE TABLE "User" (
    "uid" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uid")
);
