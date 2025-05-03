import { Schema, model } from "mongoose";

const habitacionSchema = new Schema({
  hotel: { 
    type: Schema.Types.ObjectId, 
    ref: 'Hotel', required: true 
},
  type: { 
    type: String, 
    required: true 
},
    ability: { 
    type: Number, 
    required: true 
},
  nightPrice: { 
    type: Schema.Types.Decimal128, 
    required: true 
},
  state: { 
    type: String,
    enum: ['disponible', 'ocupada', 'mantenimiento'], 
    default: 'disponible' 
},
  descripcion: String
});

export default model('Habitacion', habitacionSchema);
