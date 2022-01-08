const { Router } = require('express');
const router = Router();
const { emailsGet, emailPostUser } = require('../controllers/emails');



router.get('/', emailsGet );

router.put('/',emailPostUser)



module.exports = router;

