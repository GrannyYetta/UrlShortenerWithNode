import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
	urlId: {
		type: String,
		required: true,
	},
	origUrl: {
		type: String,
		required: true,
	},
	shortUrl: {
		type: String,
		required: true,
	},
	clicks: {
		type: Number,
		required: true,
		default: 0,
	},
	date: {
		type: String,
		default: Date.now,
	},
});

// the first parameter is the singular form of the data that will be stored
//the second parameter is the schema itself

export default mongoose.model("Url", UrlSchema);
