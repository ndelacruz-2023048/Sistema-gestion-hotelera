import { Schema, model } from "mongoose";

const Room = new Schema({
  hotel: { 
    type: Schema.Types.ObjectId, 
    ref: 'Hotel', 
    required: true 
  },
  nameOfTheRoom: {
    type: String,
    required: true
  },
  typeRoom: {
    type: String,
    enum: ['Estandar', 'Semipremium', 'Premium', 'Suite', 'Deluxe', 'Penthouse'],
    required: true
  },
  capacity: {
    adults: {
      type: Number,
      required: true
    },
    childrens: {
      type: Number,
      required: true
    }
  },
  squareMeters:{
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  disponibility: {
    fechas_ocupadas: [{
      type: String,
      required: true
    }],
    fechas_disponibles: {
      type: String,
      required: true
    }
  }
})

export default model('Room', Room)