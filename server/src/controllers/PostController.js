//Imports
const {Post} = require('../models') //Sequelize Model for User

module.exports = {
//Routes
//Gets All Instruction Guides from the database
  async getAllPosts (req, res) {
    try {
      const posts = await Posts.findAll({
        limit:10
    })
      res.send(posts);
    } catch (err) {
      res.status(500).send({
         error: 'An error has occurred trying to get all posts'
      })
    }
  },
async postPosts (req, res) {
  try {
        const post = await Post.create(req.body)
        res.send(post);
  } catch (err) {
      console.log(err);
      res.status(500).send({
        error: 'An error has occurred trying to post a new post'
        })
    }
  },
  async getPostById(req, res){
    try {
      const post = await Post.findOne({
        where: {id: req.params.postId}
    })
      res.send(post);
    } catch (err) {
      res.status(500).send({
         error: 'An error has occurred trying to get a post'
      })
    }
  },
}