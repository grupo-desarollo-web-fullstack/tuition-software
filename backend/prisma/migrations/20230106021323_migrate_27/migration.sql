-- DropForeignKey
ALTER TABLE `tbl_clase` DROP FOREIGN KEY `tbl_clase_tbl_curso_curso_id_fkey`;

-- DropForeignKey
ALTER TABLE `tbl_clase` DROP FOREIGN KEY `tbl_clase_tbl_horario_horario_id_fkey`;

-- DropForeignKey
ALTER TABLE `tbl_horario` DROP FOREIGN KEY `tbl_horario_tbl_docente_docente_id_fkey`;

-- DropForeignKey
ALTER TABLE `tbl_matricula` DROP FOREIGN KEY `tbl_matricula_tbl_clase_clase_id_fkey`;

-- DropForeignKey
ALTER TABLE `tbl_matricula` DROP FOREIGN KEY `tbl_matricula_tbl_estudiante_estudiante_id_fkey`;

-- AddForeignKey
ALTER TABLE `tbl_matricula` ADD CONSTRAINT `tbl_matricula_tbl_estudiante_estudiante_id_fkey` FOREIGN KEY (`tbl_estudiante_estudiante_id`) REFERENCES `tbl_estudiante`(`estudiante_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_matricula` ADD CONSTRAINT `tbl_matricula_tbl_clase_clase_id_fkey` FOREIGN KEY (`tbl_clase_clase_id`) REFERENCES `tbl_clase`(`clase_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_horario` ADD CONSTRAINT `tbl_horario_tbl_docente_docente_id_fkey` FOREIGN KEY (`tbl_docente_docente_id`) REFERENCES `tbl_docente`(`docente_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_clase` ADD CONSTRAINT `tbl_clase_tbl_horario_horario_id_fkey` FOREIGN KEY (`tbl_horario_horario_id`) REFERENCES `tbl_horario`(`horario_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_clase` ADD CONSTRAINT `tbl_clase_tbl_curso_curso_id_fkey` FOREIGN KEY (`tbl_curso_curso_id`) REFERENCES `tbl_curso`(`curso_id`) ON DELETE CASCADE ON UPDATE CASCADE;
