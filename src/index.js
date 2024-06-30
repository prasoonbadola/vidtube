import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env"
});

const PORT = process.env.PORT || 8001;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is up and running on PORT : ${PORT}`);
    });

  })
  .catch((err) => {
    console.log("MongoDb connection error", err)
  })