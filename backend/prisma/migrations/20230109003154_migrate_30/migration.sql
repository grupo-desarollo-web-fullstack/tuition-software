/*
  Warnings:

  - You are about to drop the column `horario_hora` on the `tbl_horario` table. All the data in the column will be lost.
  - Made the column `tbl_estudiante_estudiante_id` on table `tbl_matricula` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tbl_clase_clase_id` on table `tbl_matricula` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `tbl_matricula` DROP FOREIGN KEY `tbl_matricula_tbl_clase_clase_id_fkey`;

-- DropForeignKey
ALTER TABLE `tbl_matricula` DROP FOREIGN KEY `tbl_matricula_tbl_estudiante_estudiante_id_fkey`;

-- AlterTable
ALTER TABLE `tbl_horario` DROP COLUMN `horario_hora`,
    ADD COLUMN `horario_hora_final` TIME(6) NULL,
    ADD COLUMN `horario_hora_inicio` TIME(6) NULL;

-- AlterTable
ALTER TABLE `tbl_matricula` MODIFY `tbl_estudiante_estudiante_id` INTEGER NOT NULL,
    MODIFY `tbl_clase_clase_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `tbl_matricula` ADD CONSTRAINT `tbl_matricula_tbl_estudiante_estudiante_id_fkey` FOREIGN KEY (`tbl_estudiante_estudiante_id`) REFERENCES `tbl_estudiante`(`estudiante_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_matricula` ADD CONSTRAINT `tbl_matricula_tbl_clase_clase_id_fkey` FOREIGN KEY (`tbl_clase_clase_id`) REFERENCES `tbl_clase`(`clase_id`) ON DELETE CASCADE ON UPDATE CASCADE;
