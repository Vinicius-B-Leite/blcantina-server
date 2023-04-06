/*
  Warnings:

  - You are about to drop the column `productInOrderID` on the `Order` table. All the data in the column will be lost.
  - Added the required column `orderID` to the `ProductInOrder` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_productInOrderID_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "productInOrderID";

-- AlterTable
ALTER TABLE "ProductInOrder" ADD COLUMN     "orderID" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ProductInOrder" ADD CONSTRAINT "ProductInOrder_orderID_fkey" FOREIGN KEY ("orderID") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
