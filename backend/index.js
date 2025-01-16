const express = require("express");
const app = express();
const cors = require("cors");

const { connection } = require("./db");


const { dealerRoutes } = require("./routes/dealerAuth");
const { userRoutes } = require("./routes/userAuth");
const oemsRouter = require("./routes/oem");
const { dealCrudRoutes } = require("./routes/dealerCrud");


app.use(cors());
app.use(express.json());

app.use("/dealer_auth",dealerRoutes)
app.use("/user_auth",userRoutes)
app.use("/oems_spe",oemsRouter)
app.use("/dealer_crud",dealCrudRoutes)


const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("DB connected");
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
