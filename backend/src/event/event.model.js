import { Schema, model } from "mongoose"

const eventSchema = Schema(
  {
    hotel: {
      type: Schema.Types.ObjectId,
      ref: 'Hotel',
      required: true
    },
    name: {
      type: String
    },
    description: {
      type: String
    },
    startDate: {
      type: Date
    },
    endDate: {
      type: Date
    },
    location: {
      type: String
    },
    organizer: {
      type: String //Persona logueada "token" o el nombre del hotel?
    },
    designated: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    capacity: {
      type: Number,
      min: 1
    },
    price: {
      type: Number,
      min: 0,
      default: 0
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
      versionKey: false,
      timestamps: true
  }
)

export default model('Event', eventSchema)