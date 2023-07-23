-- CreateTable
CREATE TABLE "Pedido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "foiAtendido" BOOLEAN NOT NULL DEFAULT false,
    "qtdPaes" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_id_key" ON "Pedido"("id");
