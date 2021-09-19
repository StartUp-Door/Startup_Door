const router = require('express-promise-router')();
const Controller = require('../../controllers/Admin/admin-controller');

// stats page
router.get("/stats/users/:type", Controller.stats)
router.get("/ratings/negativeCount", Controller.ratings)
router.get("/typeCountRatings", Controller.typeCountRatings)
router.get("/categoryCount", Controller.categoryCount)
router.get("/bidCount", Controller.bidCount)