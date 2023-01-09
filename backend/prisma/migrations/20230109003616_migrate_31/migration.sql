/*
  Warnings:

  - Made the column `horario_hora_final` on table `tbl_horario` required. This step will fail if there are existing NULL values in that column.
  - Made the column `horario_hora_inicio` on table `tbl_horario` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `tbl_horario` MODIFY `horario_hora_final` TIME(6) NOT NULL,
    MODIFY `horario_hora_inicio` TIME(6) NOT NULL;
