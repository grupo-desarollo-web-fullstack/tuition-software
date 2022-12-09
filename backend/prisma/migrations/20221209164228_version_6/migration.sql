/*
  Warnings:

  - A unique constraint covering the columns `[estudiante_nombre]` on the table `tbl_estudiante` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `tbl_estudiante_estudiante_nombre_key` ON `tbl_estudiante`(`estudiante_nombre`);
