import { Schema, model } from "mongoose";

const roomDetailsSchema = new Schema({
  roomNumber: {
    type: Number,
    required: true,
    unique: true
  },
  furniture: {
    type: String,
    required: true,
  }, // Ej: ['Cama', 'Sofá', 'Mesa']
  tecnologie: {
    type: String,
    required: true,
  }, // Ej: ['TV', 'Refrigerador', 'Cafetera', 'AC']
  bathroom: {
    type: String,
    required: true,
  }, // Ej: ['Retrete', 'Ducha']
  wifi: {
    type: String,
    required: true,
  },
  food: {
    type: String,
    required: true,
  }
});

export default model('roomDetails', roomDetailsSchema);