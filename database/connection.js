import mongoose, { mongo } from "mongoose";

export const connection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_AUCTION_PLATFORM",
    })
    .then(() => {
      console.log("Connected to Database.");
    }).catch(err=>{
        console.log(`Some Error occured while connecting to database : ${err}`)
    })
};
