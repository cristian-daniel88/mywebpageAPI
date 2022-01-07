const { Router } = require('express');
const router = Router();
const { emailsGet, emailPostUser } = require('../controllers/emails');



router.get('/', emailsGet );

router.post('/',emailPostUser)



module.exports = router;

