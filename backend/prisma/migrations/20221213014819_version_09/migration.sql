/*
  Warnings:

  - A unique constraint covering the columns `[estudiante_email]` on the table `tbl_estudiante` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `estudiante_email` to the `tbl_estudiante` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `tbl_estudiante_estudiante_nombre_idx` ON `tbl_estudiante`;

-- DropIndex
DROP INDEX `tbl_estudiante_estudiante_nombre_key` ON `tbl_estudiante`;

-- AlterTable
ALTER TABLE `tbl_estudiante` ADD COLUMN `estudiante_email` VARCHAR(200) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `tbl_estudiante_estudiante_email_key` ON `tbl_estudiante`(`estudiante_email`);

-- CreateIndex
CREATE INDEX `tbl_estudiante_estudiante_email_idx` ON `tbl_estudiante`(`estudiante_email`);
