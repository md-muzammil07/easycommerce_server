import express from "express";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import cors from 'cors';
import { v4 as uuid } from 'uuid';

import Routes from "./routes/routes.js";
import DefaultData from "../server/default.js";
import Connection from "../server/database/db.js";

dotenv.config();
const app = express();
const PORT = 8000;


app.use(bodyParser.json({ extended: true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use('/', Routes);
/* 
app.use('/signup', () => {
    //data save to database
}) */

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});

Connection();
DefaultData();

export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};

paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback'
paytmParams['EMAIL'] = 'muzz0540@gmail.com'
paytmParams['MOBILE_NO'] = '7676792398'
