<template>
 <div>
  <b-container fluid>
    <b-row class="outer-row">
      <b-col cols="12" md="4" lg="3" id="sidebarMenu" class=" ml-3 d-md-block sidebar" align-h="start">
        <div class="sidebar-sticky pt-3">
          <!-- back to browse button -->
              <div>
       <b-button block class="btn-filter">Back To Browse</b-button>
       </div>
               <!-- end back to browse button -->
               <!-- panel heading -->
                 <b-list-group >
            <b-list-group-item class="panel-image">
              <img :src="post.userImg" class="rounded-circle img-responsive" alt="">
            </b-list-group-item>
            <b-list-group-item class="panel-author">
              <h2>{{post.author}}</h2>
            </b-list-group-item>
             <b-list-group-item class="panel-city justify-content-center d-flex">
              <b-icon icon="geo-alt" aria-hidden="true"></b-icon><h4>{{post.userCity}}</h4>
            </b-list-group-item>
             <b-list-group-item class="panel-contact justify-content-center d-flex">
              <b-icon icon="chat-text-fill" aria-hidden="true"></b-icon><h5>{{post.userEmail}}</h5>
            </b-list-group-item>
            </b-list-group>
         </div>
                
            <div>
              <b-img fluid :src="lettuce" alt=""  class="panel-img"></b-img>
                </div>   
          </b-col>
        <!-- main section -->
        <b-col cols="12" md="7" lg="8">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">{{post.title}}</h1>
          </div>
        <SinglePost/>
          
        </b-col>
    </b-row>
  </b-container>
</div>
 
</template>

<script>
import panelImg from '@/assets/77.png';
import lettuce from '@/assets/lettuce.png';

import SinglePost from './SinglePost'
import PostsService from '@/services/PostsService'
export default {
  name: "ViewPost",
  components: {SinglePost},
  data() {
    return{
      panelImg: panelImg,
      lettuce: lettuce,
      post: null
  }},
  async mounted() {
    const postId = this.$store.state.route.params.postId;
    console.log(postId)
    this.post = 
    (await PostsService.getPostById(postId)).data;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Mulish&display=swap');

.outer-row{
  flex-wrap:nowrap;
}
.location .input-group > .form-control{
  width:100%;
  font-family: 'Mulish', sans-serif;
}
.input-group{
  flex-wrap:nowrap;
}

#sidebarMenu{
  /* margin:1rem 0 1rem 1rem; */
  background-color:#DFEFE1;
  border: 1px solid #DFEFE1;
  border-radius:5px;
  margin-bottom:2rem;
}

.panel-image, .panel-author{
  background-color:#DFEFE1;
  border:none;
}
.panel-image >>> img{
   width: 200px;
  height: 200px;
  object-fit: cover;
}

.panel-author h2{
  font-family: 'Montserrat', sans-serif;
  text-transform: capitalize;
 
}
.panel-city, .panel-contact{
  align-items:center;
  background-color:#DFEFE1;
  border:none;
}
.panel-city, .panel-contact .b-icon{
  margin-bottom:0;
  padding-bottom:0;
  vertical-align: 0%;

}
.panel-city h4{
  padding-left:.7rem;
  margin-bottom:0;
  text-transform: capitalize;
  font-family: 'Mulish', sans-serif;
}
.panel-contact h5{
  padding-left:.7rem;
  margin-bottom:0;
  font-family: 'Mulish', sans-serif;
}
.btn-block{
  text-align:left;
}

.bi-flower1 .bi-geo-alt .bi-cash {
  color:#495057;
}
.btn-filter {
  background-color:#AED1B1;
  color:#fff;
  text-align: center;
  border:none;
}
.btn-filter:hover {
  background-color:#AED1B1;
  color:#6d7275;
  border:none;
}
.sidebar >>> .panel-img{
  max-width: 50%;
  padding: 1rem 0;
}
/* posts */

</style>