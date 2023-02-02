const router = require('express').Router();

// add our new route https://morioh.com/p/a1cd78288d90
const notesRoutes = require('./noteRoutes')

//"The router.use() function uses the specified middleware function or functions. It basically mounts middleware for the routes which are being served by the specific router."
router.use(notesRoutes);

module.exports = router;