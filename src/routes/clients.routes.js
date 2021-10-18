const { Router } = require('express');
const router = Router();
const clientController = require('../controllers/clients.controllers')

router.post('/client', clientController.newClient)

module.exports = router;