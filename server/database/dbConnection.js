import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
export const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: "true",
    useUnifiedTopology: "true",
      dbName: "MERN_STACK_TASK_MANAGEMENT"
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database! : ${err}`);
    });
};
