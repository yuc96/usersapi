const { getAll, create, getOne, remove, update } = require('../controllers/user.controller');
const express = require('express');

const usersRoute = express.Router();

usersRoute.route('/')
    .get(getAll)
    .post(create);

usersRoute.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = usersRoute;