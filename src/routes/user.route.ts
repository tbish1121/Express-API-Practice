const userController = require('../controllers/user.controller');

module.exports = (app: any) => {
    let router = require("express").Router();

    
    router.get('/', userController.getAllUsers);
    router.get('/:id', userController.getUserByID);
    router.get('/posts/:id', userController.getUserPosts);
    router.post('/', userController.createUser);
    router.post('/posts/', userController.createPost);

    app.use('/api/users', router);
}