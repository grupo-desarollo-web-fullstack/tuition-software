/*
  Warnings:

  - You are about to drop the column `tbl_horario_horario_id` on the `tbl_clase` table. All the data in the column will be lost.
  - You are about to drop the column `tbl_clase_clase_id` on the `tbl_matricula` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `tbl_clase` DROP FOREIGN KEY `tbl_clase_tbl_horario_horario_id_fkey`;

-- DropForeignKey
ALTER TABLE `tbl_matricula` DROP FOREIGN KEY `tbl_matricula_tbl_clase_clase_id_fkey`;

-- AlterTable
ALTER TABLE `tbl_clase` DROP COLUMN `tbl_horario_horario_id`,
    ADD COLUMN `tbl_curso_curso_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `tbl_matricula` DROP COLUMN `tbl_clase_clase_id`;

-- CreateTable
CREATE TABLE `_ClaseToHorario` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ClaseToHorario_AB_unique`(`A`, `B`),
    INDEX `_ClaseToHorario_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_clase` ADD CONSTRAINT `tbl_clase_tbl_curso_curso_id_fkey` FOREIGN KEY (`tbl_curso_curso_id`) REFERENCES `tbl_curso`(`curso_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ClaseToHorario` ADD CONSTRAINT `_ClaseToHorario_A_fkey` FOREIGN KEY (`A`) REFERENCES `tbl_clase`(`clase_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ClaseToHorario` ADD CONSTRAINT `_ClaseToHorario_B_fkey` FOREIGN KEY (`B`) REFERENCES `tbl_horario`(`horario_id`) ON DELETE CASCADE ON UPDATE CASCADE;
