/*
  Warnings:

  - You are about to drop the `tipo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "tipo";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Tipo" (
    "idTipo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "preco" REAL NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ingresso" (
    "idIngresso" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idTipo" INTEGER NOT NULL,
    "idUser" INTEGER NOT NULL,
    CONSTRAINT "Ingresso_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User" ("idUser") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Ingresso_idTipo_fkey" FOREIGN KEY ("idTipo") REFERENCES "Tipo" ("idTipo") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Ingresso" ("idIngresso", "idTipo", "idUser") SELECT "idIngresso", "idTipo", "idUser" FROM "Ingresso";
DROP TABLE "Ingresso";
ALTER TABLE "new_Ingresso" RENAME TO "Ingresso";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
