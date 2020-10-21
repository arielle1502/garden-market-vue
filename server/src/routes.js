const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const PostController = require('./controllers/PostController')

module.exports = (app) => {

    // so the user enters in data, the first bit of middleware that runs is the policy, if that doesnt work it will spit an error, if its doesnt spit an error then it will move to the next middleware: authentication controller
    app.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register);

    app.post('/login', 
    AuthenticationController.login);

    app.get('/posts', PostController.getAllPosts)
    app.post('/posts', PostController.postPosts)
    app.get('/posts/:postId', PostController.getPostById)
    
}