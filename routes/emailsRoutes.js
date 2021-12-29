const { Router } = require('express');
const router = Router();
const { emailsGet } = require('../controllers/emails');


router.get('/', emailsGet );



module.exports = router;

