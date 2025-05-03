import { Schema, model } from "mongoose";

const hotelSchema = new Schema({
  name: { 
    type: String, 
    required: true },
  address: { 
    type: String, 
    required: true },
  category: { 
    type: Number, required: true },
    descripcion: String,
  admin: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  }
});

export default model('Hotel', hotelSchema);
