import "./src/config/env.js";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";
import { startNewsJob } from "./src/jobs/newsJob.js";
import { startDigestJob } from "./src/jobs/digestJob.js";


const PORT = process.env.PORT || 5000;

connectDB();
startNewsJob();
startDigestJob();


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
