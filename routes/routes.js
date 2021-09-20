import express from 'express';
import { userSignup, userLoginIn } from '../controller/user-controller.js';
import { getProducts, getProductById} from '../controller/product-controller.js';
import { addPaymentGateway, paymentResponse  } from '../controller/payment-controller.js';

const router = express.Router();

router.post('/signup', userSignup);                  //ui se jab signup ki call ayegi , tab usersignup function ko call karega
router.post('/login', userLoginIn);

router.get('/products', getProducts);
router.get('/product/:id', getProductById)

router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResponse);

export default router;