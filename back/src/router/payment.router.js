import express from "express"
import PaymentService from "../services/payment.services.js";


const router = express.Router();


const products = [
    { id: 1, name: "papas", price: 1000 },
    { id: 2, name: "queso", price: 500 },
    { id: 3, name: "hamburguesa", price: 1500 },
    { id: 4, name: "soda", price: 1000 },
    { id: 5, name: "golosinas", price: 800 }
]

router.post("/payment-intents", async (req, res) => {
const productsRequested = products.find(p => p.id == parseInt(req.query.id))
 if(!productsRequested) return res.status(404).send("product not found")


    const paymentIntent = {
        amount: productsRequested.price,
        currency: "usd",
        payment_method_types: ["card"],
   
}

const services = new PaymentService()
const result = await services.createPaymentIntent(paymentIntent);
console.log(result)

res.send({status: "success " , payload: result})

})


export default router;
