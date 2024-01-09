import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			// the underlying MongoDB driver has deprecated the current
			// connection string parser, this is why it has added a new flag.
			// If the connection encounters any issue with the new string parser,
			// it can fall back to the old one
			userNewUrlParser: true,

			// the defualt is false, so we set it to true  so that MongoDB 
            // driver's new connection management engine can be used
			useUnifiedTopology: true,
		});
		console.log("Database connected");
	} catch (error) {
		console.log(err.message);
		process.exit(1);
	}
};

export default connectDB;
