const router = require('express-promise-router')();
const Controller = require('../../controllers/Plan/plan.controller');

router.post('/payment', Controller.addPayment);

