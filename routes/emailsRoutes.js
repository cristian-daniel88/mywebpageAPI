const { Router } = require('express');
const { emailsGet } = require('../controllers/emails');
const router = Router();


router.get('/', emailsGet );



module.exports = router;

