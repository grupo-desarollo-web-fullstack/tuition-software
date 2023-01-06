/*
  Warnings:

  - You are about to drop the column `horario_disponibilidad` on the `tbl_horario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `tbl_clase` ADD COLUMN `clase_disponibilidad` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `tbl_horario` DROP COLUMN `horario_disponibilidad`;
