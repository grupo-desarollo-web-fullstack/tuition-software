/*
  Warnings:

  - Added the required column `tbl_clase_clase_id` to the `tbl_matricula` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tbl_matricula` ADD COLUMN `tbl_clase_clase_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `tbl_docente` (
    `docente_id` INTEGER NOT NULL AUTO_INCREMENT,
    `docente_nombre` VARCHAR(200) NOT NULL,
    `docente_edad` INTEGER NOT NULL,

    PRIMARY KEY (`docente_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_horario` (
    `horario_id` INTEGER NOT NULL AUTO_INCREMENT,
    `horario_fecha` DATETIME(3) NOT NULL,
    `horario_disponibilidad` BOOLEAN NOT NULL,
    `tbl_aforo` INTEGER NOT NULL,
    `tbl_docente_docente_id` INTEGER NOT NULL,

    PRIMARY KEY (`horario_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_clase` (
    `clase_id` INTEGER NOT NULL AUTO_INCREMENT,
    `clase_nsalon` VARCHAR(10) NOT NULL,
    `tbl_horario_horario_id` INTEGER NOT NULL,

    PRIMARY KEY (`clase_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_matricula` ADD CONSTRAINT `tbl_matricula_tbl_clase_clase_id_fkey` FOREIGN KEY (`tbl_clase_clase_id`) REFERENCES `tbl_clase`(`clase_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_horario` ADD CONSTRAINT `tbl_horario_tbl_docente_docente_id_fkey` FOREIGN KEY (`tbl_docente_docente_id`) REFERENCES `tbl_docente`(`docente_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_clase` ADD CONSTRAINT `tbl_clase_tbl_horario_horario_id_fkey` FOREIGN KEY (`tbl_horario_horario_id`) REFERENCES `tbl_horario`(`horario_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
