import Errorhandler from "../error/errorHandler.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, time, date, people } = req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !time ||
    !date ||
    !people
  ) {
    return next(new Errorhandler(400, "All fields are required"));
  }
  try {
    // Correct way to create a reservation using Reservation.create()
    await Reservation.create({
      firstName,
      lastName,
      email,
      phone,
      time,
      date,
      people,
    });
    res.status(200).json({
      success: true,
      message: "Reservation sent successfully",
    });
  } catch (error) {
    // General error handling
    console.error(error); // Log the error for debugging
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new Errorhandler(validationErrors.join(","), 400));
    } else {
      return next(new Errorhandler("Failed to send reservation", 500));
    }
  }
};
