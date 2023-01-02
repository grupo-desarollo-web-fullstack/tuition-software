/*
  Warnings:

  - Made the column `tbl_curso_curso_id` on table `tbl_clase` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `tbl_clase` DROP FOREIGN KEY `tbl_clase_tbl_curso_curso_id_fkey`;

-- AlterTable
ALTER TABLE `tbl_clase` MODIFY `tbl_curso_curso_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tbl_horario` MODIFY `horario_disponibilidad` BOOLEAN NOT NULL DEFAULT true;

-- AddForeignKey
ALTER TABLE `tbl_clase` ADD CONSTRAINT `tbl_clase_tbl_curso_curso_id_fkey` FOREIGN KEY (`tbl_curso_curso_id`) REFERENCES `tbl_curso`(`curso_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
