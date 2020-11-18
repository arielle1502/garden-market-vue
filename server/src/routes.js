const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const PostControllerPolicy = require('./policies/PostControllerPolicy')
const PostController = require('./controllers/PostController')

module.exports = (app) => {

    // so the user enters in data, the first bit of middleware that runs is the policy, if that doesnt work it will spit an error, if its doesnt spit an error then it will move to the next middleware: authentication controller
    app.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register);

    app.post('/login', 
    AuthenticationController.login);

    app.get('/posts', PostController.getAllPosts)
    app.post('/posts',PostControllerPolicy.postPost, PostController.postPosts)
    app.get('/posts/:postId', PostController.getPostById)
    app.put('/posts/:postId',PostControllerPolicy.postPost, PostController.putPostById)
    app.delete('/posts/:postId', PostController.deletePostById)
    
}