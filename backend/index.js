const express = require("express");

const { errorHandler } = require("./middleware/errorHandler");
const authRoute = require("./routes/auth_route");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/auth", authRoute);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
