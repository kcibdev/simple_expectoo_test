const express = require("express");
const cors = require("cors");

const { errorHandler } = require("./middleware/errorHandler");
const authRoute = require("./routes/auth_route");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: "https://expectootest.netlify.app",
    credentials: true,
  })
);

app.use("/api/auth", authRoute);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
