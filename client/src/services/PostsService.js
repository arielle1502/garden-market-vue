import Api from '@/services/Api';

export default {
  getAllPosts(){
    return Api().get('posts')
  },
  postPosts(post){
    return Api().post('posts', post)
  },
  getPostById(postId){
    return Api().get(`posts/${postId}`)
  },
  putPostById(postId, post){
    return Api().put(`posts/${postId}`,post)
  },
  deletePostById(postId){
    return Api().delete(`posts/${postId}`)
  }
}