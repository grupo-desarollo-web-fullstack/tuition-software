/*
  Warnings:

  - Added the required column `estudiante_password` to the `tbl_estudiante` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tbl_estudiante` ADD COLUMN `estudiante_password` VARCHAR(10) NOT NULL;
