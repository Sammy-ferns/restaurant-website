import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  phone: {
    type: Number,
    required: true,
    minLength: [10, "Phone number must be 10 digits long"],
    maxLength: [10, "Phone number must be 10 digits long"],
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  people: {
    type: Number,
    required: true,
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
