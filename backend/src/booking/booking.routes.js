import { Schema, model } from "mongoose";

const reservaSchema = new Schema({
  usuario: { 
    type: Schema.Types.ObjectId, 
    ref: 'Usuario', 
    required: true 
},
  hotel: { 
    type: Schema.Types.ObjectId, 
    ref: 'Hotel', 
    required: true 
},
  room: { 
    type: Schema.Types.ObjectId, 
    ref: 'Habitacion', 
    required: true 
},
  dateStart: { 
    type: Date, 
    required: true 
},
  dateEnd: { 
    type: Date, 
    required: true 
},
  state: { 
    type: String, 
    enum: ['activa', 'cancelada', 'finalizada'], 
    default: 'activa' 
},
  
    totalPayment: Schema.Types.Decimal128
});

export default model('Reserva', reservaSchema);
