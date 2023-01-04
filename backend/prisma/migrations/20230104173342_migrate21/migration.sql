/*
  Warnings:

  - You are about to drop the column `horario_aforo` on the `tbl_horario` table. All the data in the column will be lost.
  - You are about to drop the column `horario_fecha` on the `tbl_horario` table. All the data in the column will be lost.
  - You are about to drop the column `tbl_curso_curso_id` on the `tbl_matricula` table. All the data in the column will be lost.
  - Added the required column `clase_aforo` to the `tbl_clase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tbl_curso_curso_id` to the `tbl_clase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horario_dias` to the `tbl_horario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horario_hora` to the `tbl_horario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tbl_matricula` DROP FOREIGN KEY `tbl_matricula_tbl_curso_curso_id_fkey`;

-- AlterTable
ALTER TABLE `tbl_clase` ADD COLUMN `clase_aforo` INTEGER NOT NULL,
    ADD COLUMN `tbl_curso_curso_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tbl_horario` DROP COLUMN `horario_aforo`,
    DROP COLUMN `horario_fecha`,
    ADD COLUMN `horario_dias` VARCHAR(100) NOT NULL,
    ADD COLUMN `horario_hora` TIME(6) NOT NULL;

-- AlterTable
ALTER TABLE `tbl_matricula` DROP COLUMN `tbl_curso_curso_id`;

-- AddForeignKey
ALTER TABLE `tbl_clase` ADD CONSTRAINT `tbl_clase_tbl_curso_curso_id_fkey` FOREIGN KEY (`tbl_curso_curso_id`) REFERENCES `tbl_curso`(`curso_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
