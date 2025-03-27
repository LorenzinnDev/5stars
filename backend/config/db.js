import mongoose, { mongo } from "mongoose";

async function dbConnect() {
  mongoose.connect("mongodb+srv://viniciusgrzyb:vini0802@vinigrzyb.bqq5y.mongodb.net/?retryWrites=true&w=majority&appName=vinigrzyb", {
    dbName: '5stars',
    ssl: true,
    tlsAllowInvalidCertificates: true,
    // tlsInsecure: true
  });
  return mongoose.connection;
};

export default dbConnect;