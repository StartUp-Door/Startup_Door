const router = require('express-promise-router')();
const Controller = require('../../../controllers/Service_Provider/Plant/plant.controller');

router.post('/plant/:id', Controller.addPlant);

router.get('/plant', Controller.listPlant);
router.get('/plant/:id', Controller.listPlantID);
router.get('/athukorala/listposts', Controller.listPosts);
router.get('/plant/ongoing/:id', Controller.ongoing); 

module.exports = router;