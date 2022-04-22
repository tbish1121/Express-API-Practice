const userController = require('../controllers/user.controller');

module.exports = (app: any) => {
    let router = require("express").Router();

    
    router.get('/', userController.getAllUsers);
    router.get('/:id', userController.getUserByID);
    router.post('/', userController.createUser);
    
    app.use('/api/users', router);
}