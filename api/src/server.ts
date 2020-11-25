import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';

import CheckoutPage from './pages/CheckoutPage';
import CheckoutCancelPage from './pages/CheckoutCancelPage';
import CheckoutSeccessPage from './pages/CheckoutSuccessPage';

const server = express();
server.use(cors());
server.use(express.json());

const stripe = new Stripe(
  'sk_test_51HmIdsISMJLbjMXzo1L8qbkP2P7od2s5huJ1eoYRbfy1zk6F4YSuLvfbsIfVuRxfM0EZwJLHqukHcIOwdoCUuImk00axdZ7LoQ',
  {
    apiVersion: '2020-08-27',
  }
);

const item = {
  price: 'price_1Hr8EkISMJLbjMXztzgHuvs4',
  quantity: 1,
}

/**
 * this route make a session from checkout
 */
server.get('/create_session', async (request, response) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [item],
      success_url: 'http://192.168.2.175:3333/success_payment',
      cancel_url: 'http://192.168.2.175:3333/cancel_payment',
      mode: 'payment',
    });
  
    return response.status(200).json({ sessionId: session.id });
  }catch (error) {
    return response.status(400).json({ error });
  }
});

/**
 * this route process checkout
 */
server.get('/checkout', (request, response) => {
  const { sessionId } = request.query;
  return response.send(
    CheckoutPage(
      'pk_test_51HmIdsISMJLbjMXzYFPUmX5uhE7vDWQUXl0uwZYgSccxpTBASSyY74euSbGFCbeltriuJFAJG1x1LStBBanTN6fH00SDgVE3sQ',
      sessionId as string,
    ));
});

/**
 * if payment is success
 */
server.get('/success_payment', (request, response) => {
  return response.send(CheckoutSeccessPage());
});

/**
 * if payment is canceled
 */
server.get('/cancel_payment', (request, response) => {
  return response.send(CheckoutCancelPage());
});
  
server.listen(3333, () => console.log('server is started! 🚀'));