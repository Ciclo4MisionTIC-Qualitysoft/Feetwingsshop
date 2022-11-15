const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ventaSchema = new Schema({
  fecha: String,
  cliente: {
    idCliente: {
      type: Schema.Types.ObjectId,
      ref: "Usuario",
    },
    detalleCompra: [
      {
        idProducto: {
          type: Schema.Types.ObjectId,
          ref: "Producto",
        },
        cantidad: Number,
        precio: Number,
      },
    ],
    confirmado: Boolean,  //SOBRA
    valor: Number,
  },
});

const Venta = model("Venta", ventaSchema);

module.exports = Venta;
