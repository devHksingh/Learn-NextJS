import mongoose from "mongoose";

export async function dbConnect() {
  try {
    let conn = await mongoose.connect(String(process.env.MONGO_DB_CONNECTION_STRING));
    return conn;
  } catch (e) {
    console.log("DB connection failed");
    
    process.exit(1)
    throw new Error("DB connection failed");
    
  }
}