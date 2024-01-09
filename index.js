import express from "express";

const app = express();

const PORT = 3000 || 5000;

app.listen(PORT, () => {
	console.log(`server running on http://localhost:3000`);
});
