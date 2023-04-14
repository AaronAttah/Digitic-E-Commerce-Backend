const { default: mongoose } = require("mongoose");

// The applicaton middleware below is to compress default mongoose error due to upcoming upgrade from mongoose
mongoose.set('strictQuery', true);

const dbConnect = () => {
  try {

    const conn = mongoose.connect(process.env.MONGODB_URL );
    // const conn = mongoose.connect("mongodb://localhost:27017/shopper" );
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log({ 
      message:"database error",
      error
      });
  }
};
module.exports = dbConnect;
