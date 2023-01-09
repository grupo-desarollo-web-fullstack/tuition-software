-- CreateTable
CREATE TABLE `tbl_estudiante` (
    `estudiante_id` INTEGER NOT NULL AUTO_INCREMENT,
    `estudiante_nombre` VARCHAR(200) NOT NULL,
    `estudiante_password` VARCHAR(200) NOT NULL,
    `estudiante_carrera` VARCHAR(200) NOT NULL,
    `estudiante_ciclo` INTEGER NOT NULL,
    `estudiante_foto` VARCHAR(191) NULL,
    `estudiante_email` VARCHAR(200) NOT NULL,

    UNIQUE INDEX `tbl_estudiante_estudiante_email_key`(`estudiante_email`),
    INDEX `tbl_estudiante_estudiante_email_idx`(`estudiante_email`),
    PRIMARY KEY (`estudiante_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_curso` (
    `curso_id` INTEGER NOT NULL AUTO_INCREMENT,
    `curso_nombre` VARCHAR(100) NOT NULL,
    `curso_creditos` INTEGER NOT NULL,
    `curso_tipo` VARCHAR(45) NOT NULL DEFAULT 'obligatorio',
    `curso_ciclo` INTEGER NOT NULL,

    PRIMARY KEY (`curso_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_matricula` (
    `matricula_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tbl_estudiante_estudiante_id` INTEGER NOT NULL,
    `tbl_clase_clase_id` INTEGER NOT NULL,

    PRIMARY KEY (`matricula_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
    `horario_dias` VARCHAR(100) NOT NULL,
    `horario_hora` TIME(6) NOT NULL,
    `horario_disponibilidad` BOOLEAN NOT NULL DEFAULT false,
    `tbl_docente_docente_id` INTEGER NOT NULL,

    PRIMARY KEY (`horario_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_clase` (
    `clase_id` INTEGER NOT NULL AUTO_INCREMENT,
    `clase_nsalon` VARCHAR(10) NOT NULL,
    `tbl_horario_horario_id` INTEGER NOT NULL,
    `clase_aforo` INTEGER NOT NULL,
    `tbl_curso_curso_id` INTEGER NOT NULL,

    PRIMARY KEY (`clase_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_matricula` ADD CONSTRAINT `tbl_matricula_tbl_estudiante_estudiante_id_fkey` FOREIGN KEY (`tbl_estudiante_estudiante_id`) REFERENCES `tbl_estudiante`(`estudiante_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_matricula` ADD CONSTRAINT `tbl_matricula_tbl_clase_clase_id_fkey` FOREIGN KEY (`tbl_clase_clase_id`) REFERENCES `tbl_clase`(`clase_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_horario` ADD CONSTRAINT `tbl_horario_tbl_docente_docente_id_fkey` FOREIGN KEY (`tbl_docente_docente_id`) REFERENCES `tbl_docente`(`docente_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_clase` ADD CONSTRAINT `tbl_clase_tbl_horario_horario_id_fkey` FOREIGN KEY (`tbl_horario_horario_id`) REFERENCES `tbl_horario`(`horario_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_clase` ADD CONSTRAINT `tbl_clase_tbl_curso_curso_id_fkey` FOREIGN KEY (`tbl_curso_curso_id`) REFERENCES `tbl_curso`(`curso_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
