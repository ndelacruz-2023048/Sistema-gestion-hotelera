import { Schema, model } from "mongoose";

const eventoSchema = new Schema({
  hotel: { 
    type: Schema.Types.ObjectId, 
    ref: 'Hotel', 
    required: true 
},
  name: { 
    type: String, 
    required: true 
},
  description:{ 
    type: String
},
  dateStart: { 
    type: Date, 
    required: true 
},
  startEnd: { 
    type: Date, 
    required: true 
},
  typeEvent: String,
  state: { 
    type: String, 
    enum: ['programado', 'cancelado', 'finalizado'], 
    default: 'programado' }
});

export default model('Evento', eventoSchema);
