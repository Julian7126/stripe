import express from "express";
import cors from "cors";
import router from "./router/payment.router.js";

const app = express();

app.use(cors());
app.use("/api/payments", router);



app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
