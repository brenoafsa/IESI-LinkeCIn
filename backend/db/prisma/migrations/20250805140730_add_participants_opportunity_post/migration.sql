-- CreateTable
CREATE TABLE "_PostParticipants" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PostParticipants_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_PostParticipants_B_index" ON "_PostParticipants"("B");

-- AddForeignKey
ALTER TABLE "_PostParticipants" ADD CONSTRAINT "_PostParticipants_A_fkey" FOREIGN KEY ("A") REFERENCES "OpportunityPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostParticipants" ADD CONSTRAINT "_PostParticipants_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
