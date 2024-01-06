import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

dotenv.config();

const password = process.env.MONGO_PASSWORD || "";
const URI = process.env.MONGO_URI || "";

const DB = URI.replace("<password>", password);

async function connectDB() {
  try {
    const conn = await mongoose.connect(DB);
    console.log(
      `Database successfully connected: ${colors.green.bold(
        conn.connection.host
      )}`
    );
  } catch (err) {
    console.log(`${colors.red(`Database connection failed`)}`);
    console.log(err);
  }
}

export default connectDB;
