const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request } = require("express");

const stripe = require("stripe")("API_KEY")

// App config

const app = express();

// Middleweares

app.use(cors({ origin: true}));
app.use(express.json());

//api routes
app.get('/', (request, response) => response.status(200).send('hello'))

app.post('/payments/create', async (request, response) => {

    const total = request.query.total;

    console.log('Payment Request got!!!!!!!!!!', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    }); 

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command

exports.api = functions.https.onRequest(app)

