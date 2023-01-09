-- DropForeignKey
ALTER TABLE `tbl_horario` DROP FOREIGN KEY `tbl_horario_tbl_docente_docente_id_fkey`;

-- AddForeignKey
ALTER TABLE `tbl_horario` ADD CONSTRAINT `tbl_horario_tbl_docente_docente_id_fkey` FOREIGN KEY (`tbl_docente_docente_id`) REFERENCES `tbl_docente`(`docente_id`) ON DELETE CASCADE ON UPDATE CASCADE;
