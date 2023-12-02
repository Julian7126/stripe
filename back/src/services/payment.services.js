import Stripe from 'stripe';


//private key
const key =" PUT HERE PRIVE KEY FROM STRIPE API "


export default class PaymentService {
    constructor() {
        this.stripe = new Stripe(key)
    }

    async createPaymentIntent(data) {
        const paymentIntent = await this.stripe.paymentIntents.create({
            amount: data.amount,
            currency: data.currency,
            payment_method_types: data.payment_method_types,
        });
        return paymentIntent;
    }


    
}