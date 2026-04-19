/*
  Warnings:

  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_senderId_fkey";

-- DropTable
DROP TABLE "Message";

-- CreateTable
CREATE TABLE "message" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "friend" (
    "id" TEXT NOT NULL,
    "user1id" TEXT NOT NULL,
    "user2id" TEXT NOT NULL,

    CONSTRAINT "friend_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FriendRequest" (
    "id" TEXT NOT NULL,
    "fromUser" TEXT NOT NULL,
    "toUser" TEXT NOT NULL,

    CONSTRAINT "FriendRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "message_senderId_idx" ON "message"("senderId");

-- CreateIndex
CREATE INDEX "message_receiverId_idx" ON "message"("receiverId");

-- CreateIndex
CREATE INDEX "friend_user1id_idx" ON "friend"("user1id");

-- CreateIndex
CREATE INDEX "friend_user2id_idx" ON "friend"("user2id");

-- CreateIndex
CREATE UNIQUE INDEX "friend_user1id_user2id_key" ON "friend"("user1id", "user2id");

-- CreateIndex
CREATE UNIQUE INDEX "FriendRequest_fromUser_toUser_key" ON "FriendRequest"("fromUser", "toUser");

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friend" ADD CONSTRAINT "friend_user1id_fkey" FOREIGN KEY ("user1id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friend" ADD CONSTRAINT "friend_user2id_fkey" FOREIGN KEY ("user2id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FriendRequest" ADD CONSTRAINT "FriendRequest_fromUser_fkey" FOREIGN KEY ("fromUser") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FriendRequest" ADD CONSTRAINT "FriendRequest_toUser_fkey" FOREIGN KEY ("toUser") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
