const { Router } = require('express');
const router = Router();
const { emailsGet, emailPostUser, emailDelete } = require('../controllers/emails');



router.post('/', emailsGet );

router.put('/',emailPostUser);

router.delete('/', emailDelete);







module.exports = router;

