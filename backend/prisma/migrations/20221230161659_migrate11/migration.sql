/*
  Warnings:

  - Made the column `curso_ciclo` on table `tbl_curso` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `tbl_curso` MODIFY `curso_ciclo` INTEGER NOT NULL;
