import { Schema, model } from "mongoose";

const facturaSchema = new Schema({
  reserva: {
    type: Schema.Types.ObjectId,
    ref: 'Reserva',
    required: [true, 'La reserva es obligatoria']
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'El usuario es obligatorio']
  },
  fecha_emision: {
    type: Date,
    default: Date.now
  },
  monto_total: {
    type: Schema.Types.Decimal128,
    required: [true, 'El monto total es obligatorio']
  },
  detalle: {
    type: String,
    required: [true, 'El detalle de la factura es obligatorio']
  }
});

export default model('Factura', facturaSchema);
