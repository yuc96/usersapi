const express = require('express');
const router = express.Router();
const usersRoute=require('./users.routes')
// colocar las rutas aquí
router.use("/user",usersRoute);

module.exports = router;