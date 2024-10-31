-- CreateTable
CREATE TABLE "TestTable" (
    "test_id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TestTable_pkey" PRIMARY KEY ("test_id")
);
