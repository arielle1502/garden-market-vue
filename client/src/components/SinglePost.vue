<template>
  <b-container class="post-container">
         <b-row>
           <!-- post image col -->
           <b-col cols="12" lg="6" >
             <b-img class="post-image" :src="post.image" fluid-grow alt=""></b-img>
           </b-col>
           <!-- end post image col -->

           <!-- post text col -->
           <b-col cols="10" lg="5">
                  <h2 class="tbl-header">{{post.title}}</h2>
             <b-row class="post-table-row">
               
                    <b-col cols="1" class="tbl-icon">
                     <b-icon icon="calendar2-event"></b-icon>
                     </b-col>
                   <b-col cols="5" class="tbl-text d-flex">{{post.dateTime}}</b-col>
                   <b-col cols="1" class="tbl-icon">
                     <b-icon icon="clock"></b-icon>
                     </b-col>
                   <b-col cols="5" class="tbl-text">{{post.ready}}</b-col>
              </b-row> 

            <b-row  class="post-table-row">
                   <b-col cols="1" class="tbl-icon">
                     <b-icon icon="geo-alt"></b-icon>
                     </b-col>
                   <b-col cols="5" class="tbl-text">{{post.userCity}}</b-col>
                    <b-col cols="1" class="tbl-icon">
                     <b-icon icon="check"></b-icon>
                     </b-col>
                   <b-col cols="5" class="tbl-text">{{post.isOrganic}}</b-col>
               
              </b-row>
            </b-col>
            <!-- end post text col -->

            <!-- post icon col -->
            <b-col cols="2" lg="1" class="post-icon ">
              <img v-if="post.category === 'fruit'" :src="postFruit" class="img-fluid" alt="">
              <img v-else-if="post.category === 'vegetable'" :src="postVeg" class="img-fluid" alt="">
              <img v-else-if="post.category === 'herbs'" :src="postHerbs" class="img-fluid" alt="">
              <img v-else-if="post.category === 'animal'" :src="postAnimal" class="img-fluid" alt="">
            </b-col>
            <!-- end post icon col -->
            <!-- post bottom -->
            <b-row class="align-items-center post-bottom">
            <b-col v-if="post.price === 'free'" cols="4" class="price-bottom"><p>FREE</p></b-col>
            <b-col v-else cols="4" class="price-bottom"><p>${{post.price}}/{{post.unit}}</p></b-col>
           
            <b-col cols="8" class="post-descript text-center">
              <p>{{post.description}}</p>
              </b-col>
          </b-row>
            <!-- end post-bottom -->
             </b-row>
             </b-container>
</template>

<script>
import postVeg from '@/assets/vegpost.png';
import postAnimal from '@/assets/postanimal.png';
import postFruit from '@/assets/postfruit.png';
import postHerbs from '@/assets/herbspost.png';
import PostsService from '@/services/PostsService'
export default {
  name: "Post",

  data() {
    return{
      postAnimal: postAnimal,
      postVeg: postVeg,
      postFruit: postFruit,
      postHerbs: postHerbs,
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
.tbl-icon{
  text-align:right;
  padding-right:0;

}

.tbl-text{
  text-align:left;
  color: #73777c;
  font-family: 'Mulish', sans-serif;
  padding-right:0;
}

.post-table-row{
  margin-left:0;
  margin-top:1rem;
}
.tbl-header{
  margin-top:0;
  font-family: 'Montserrat', sans-serif;
}
.post-container{
  border: 1px solid #EDF5EE;
  background-color: #EDF5EE;
  margin-bottom:3vh;
  padding: 2rem;
}

.img-fluid{
  border-radius:5px;
}
.post-icon{
  padding:0;
  margin-top:0;
}
.post-bottom{
  background-color:#DFEFE1;
  margin:4vh 2vh 2vh 2vh;
  padding:1rem;
  border-radius: 5px;
  width:100%;
}
.price-bottom p {
  margin-bottom:0;
  text-align: left;
  font-weight: bolder;
  font-size:2vw;
  font-family: 'Mulish', sans-serif;

}
.post-descript p{
  font-family: 'Mulish', sans-serif;
  text-transform: capitalize;
  text-align: left;
   margin-bottom:0;
}

.btn-post{
  width:100%;
  font-family: 'Mulish', sans-serif;
  font-size:1.2rem;
  background-color: #AED1B1;
  color: #fff;
  border:none;
}
.btn-post:hover{
  background-color: #AED1B1;
  color: #4a4c4e;
}
.post-image{
      max-height: 60vh;
    object-fit: cover;
}
@media (max-width: 768px){
 .price-bottom p {
    font-size:4.5vw;
}
.post-bottom{
   margin: 4vh 0 2vh 0;
}
.post-icon{
    margin-top: 1rem;
}
.tbl-header{
  margin-top:1rem;
}
.post-descript p{
  font-size:3vw;
  text-align: center;
}
}
@media (min-width: 576px){
.post-container{
    max-width:100%;
    padding: 2rem 1rem;

}

}
</style>