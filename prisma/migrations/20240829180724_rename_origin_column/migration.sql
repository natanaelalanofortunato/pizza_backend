/*
  Warnings:

  - You are about to drop the column `origin` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "origin",
ADD COLUMN     "cross_origin" TEXT;
