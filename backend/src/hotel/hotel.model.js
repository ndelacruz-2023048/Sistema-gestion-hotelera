import { Schema, model } from "mongoose";

const hotelSchema = new Schema({
  name: { 
    type: String, 
    required: true },
  address: { 
    type: String, 
    required: true },
  category: { 
    type: String, 
    required: true,
    descripcion: String },
  price:{
    type: Schema.Types.Decimal128,
    required: true },
  /* user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true } */
  image: {
    type: String,
    require: true }
});

export default model('Hotel', hotelSchema);
