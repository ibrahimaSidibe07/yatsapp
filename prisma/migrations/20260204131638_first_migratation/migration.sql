-- CreateTable
CREATE TABLE "Text" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" BIGINT NOT NULL,

    CONSTRAINT "Text_pkey" PRIMARY KEY ("id")
);
