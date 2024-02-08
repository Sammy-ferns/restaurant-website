import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "restaurant",
    })
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log(err.message);
    });
};
