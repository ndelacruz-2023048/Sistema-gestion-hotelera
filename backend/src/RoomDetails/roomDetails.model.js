import { Schema, model } from "mongoose";

const roomDetailsSchema = new Schema({
  room: {
      type: Schema.Types.ObjectId,
      ref: 'Room', required: true
  },
  roomNumber: {
    type: Number,
    required: true,
    unique: true
  },
  details:[
    {
      name: {
        type: String,
        enum: ['Habitación', 'Mobiliario', 'Internet', 'Conectividad', 'Tecnología', 'Climatización', 'Baño',
          'Seguridad','Servicios', 'Estacionamiento', 'Lavandería', 'Mascotas', 'Exteriores'
        ],
        required: true
      },
      description: {
        type: String,
        required: true
      },
    }
  ],
});

export default model('roomDetails', roomDetailsSchema)