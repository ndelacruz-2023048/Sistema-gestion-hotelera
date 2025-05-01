import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
  name: { 
    type: String,
    required: [true, 'Nombre es requerido'] },
  email: { 
    type: String,
    required: [true, 'Email es requerido'], 
    unique: true },
  password: { 
    type: String, 
    required: [true, 'Contraseña es requerida'] },
  rol: { 
    type: String, 
    enum: ['usuario', 'admin_plataforma', 'admin_hotel'], 
    default: 'usuario' 
  },
  date: { 
    type: Date, 
    default: Date.now },
  state: { 
    type: Boolean, 
    default: true }
});

export default model('Usuario', usuarioSchema);
