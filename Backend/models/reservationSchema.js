import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: [3,"First name must contain at least 3 characters!"],
        maxLength: [30,"First name connot exceed 30 characters!"],
    },
    lastName:{
        type: String,
        required: true,
        minLength: [3,"Last name must contain at least 3 characters!"],
        maxLength: [30,"Last name connot exceed 30 characters!"],
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail,"Provide a valid email"],
    },
    phone:{
        type: String,
        required: true,
  validate: {
    validator: function (v) {
      return /^\d{10,11}$/.test(v);
    },
    message: "Phone number must contain 20 or 25 digits only",
  }
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
})

export const Reservation = mongoose.model("Reservation",reservationSchema)
