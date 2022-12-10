/*
  Warnings:

  - You are about to drop the column `tbl_aforo` on the `tbl_horario` table. All the data in the column will be lost.
  - Added the required column `horario_aforo` to the `tbl_horario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tbl_horario` DROP COLUMN `tbl_aforo`,
    ADD COLUMN `horario_aforo` INTEGER NOT NULL;
