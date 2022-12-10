-- CreateTable
CREATE TABLE `tbl_estudiante` (
    `estudiante_id` INTEGER NOT NULL AUTO_INCREMENT,
    `estudiante_nombre` VARCHAR(200) NOT NULL,
    `estudiante_carrera` VARCHAR(200) NOT NULL,
    `estudiante_ciclo` INTEGER NOT NULL,
    `estudiante_foto` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`estudiante_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_curso` (
    `curso_id` INTEGER NOT NULL AUTO_INCREMENT,
    `curso_nombre` VARCHAR(100) NOT NULL,
    `curso_creditos` INTEGER NOT NULL,
    `curso_tipo` VARCHAR(45) NOT NULL DEFAULT 'obligatorio',

    PRIMARY KEY (`curso_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_matricula` (
    `matricula_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tbl_estudiante_estudiante_id` INTEGER NOT NULL,
    `tbl_curso_curso_id` INTEGER NOT NULL,

    PRIMARY KEY (`matricula_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_matricula` ADD CONSTRAINT `tbl_matricula_tbl_estudiante_estudiante_id_fkey` FOREIGN KEY (`tbl_estudiante_estudiante_id`) REFERENCES `tbl_estudiante`(`estudiante_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_matricula` ADD CONSTRAINT `tbl_matricula_tbl_curso_curso_id_fkey` FOREIGN KEY (`tbl_curso_curso_id`) REFERENCES `tbl_curso`(`curso_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
