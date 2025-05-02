import { Schema, model } from "mongoose"

const userSchema = Schema(
    {
        name: {
            type: String
        },
        surname: {
            type: String
        },
        address: {
            type: String
        },
        mobilePhone: {
            type: String
        },
        country: {
            type: String
        },
        username: {
            type: String,
            unique: true
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String
        },
        profilePicture: {
            type: String
        },
        role: {
            type: String,
            uppercase: true,
            enum: ['ADMIN', 'CLIENT', 'EMPLOYEE'],
            default: 'CLIENT'
        },
        birthDate: {
            type: Date,
            required: function() { this.role === 'EMPLOYEE'; }
        },
        identificationNumber: {
            type: String,
            required: function() { this.role === 'EMPLOYEE'; }
        },
        paymentInfo: {
            type: String,
        },
        roomPreferences: {
            type: String,
        },
        reservationHistory: {
            type: [String],
        },
        jobPosition: {
            type: String,
            required: function() { return this.role === 'EMPLOYEE'; }
        },
        hireDate: {
            type: Date,
            required: function() { return this.role === 'EMPLOYEE'; }
        },
        permissions: {
            type: [String],
            required: function() { return this.role === 'ADMIN' || this.role === 'EMPLOYEE'; }
        }
    
    },
    {
        versionKey: false,
        timestamps: true
    }
)

userSchema.methods.toJSON = function(){
    const { __v, password, ...user } = this.toObject() //Sirve para convertir un documento de MongoDB a Objeto de JS
    return user
}

export default model('User', userSchema)