const router = require('express-promise-router')();
import { stats, ratings, typeCountRatings, categoryCount, bidCount } from '../../controllers/Admin/admin-stats-controller';
import { serviceTypes, getServiceTypes, getServiceType, updateServiceType, deleteServiceType, getServiceId } from '../../controllers/Admin/admin-service-controller'

// stats page
router.get("/stats/users/:type", stats)
router.get("/ratings/negativeCount", ratings)
router.get("/typeCountRatings", typeCountRatings)
router.get("/categoryCount", categoryCount)
router.get("/bidCount", bidCount)

// service Categories
router.post("/serviceTypes", serviceTypes)
router.get("/serviceTypes", getServiceTypes)
router.get("/serviceTypes/:id", getServiceType)
router.put("/serviceTypes/:id", updateServiceType)
router.delete("/serviceTypes/:id", deleteServiceType)
router.get("/servicetypes/id/:type", getServiceId)