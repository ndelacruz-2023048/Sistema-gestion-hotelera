import { Schema, model } from "mongoose";

const roomViewSchema = new Schema({
  hotel: { 
    type: Schema.Types.ObjectId, 
    ref: 'Hotel', required: true 
  },
  squareMeters:{
    type: Number,
    required: true,
  },
  bedTypes: {
    type: String,
    enum: ['individual', 'doble', 'queen', 'king'],
    required: true
  },
  floor: {
    type: Number,
    required: true,
    min: 1
  },
  images: [{
    type: String
  }],
  available: {
    type: Boolean,
    default: true
  },
  pricePerNight: {
    type: Schema.Types.Decimal128,
    required: true,
    min: 0
  },
});

export default model('roomView', roomViewSchema);
