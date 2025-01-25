import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${"mongodb+srv://hussainshamim:jP46GY6fv3Phn6jj@cluster0.o2whh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"}todo`
    );
    console.log(
      `\n MongoDB connected`
    );
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  }
};

export default connectDB;