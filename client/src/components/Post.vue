<template>
  <b-container class="post-container">
         <b-row>
           <!-- post image col -->
           <b-col cols="12" lg="6" >
             <b-img :src="postImg" fluid-grow alt=""></b-img>
           </b-col>
           <!-- end post image col -->

           <!-- post text col -->
           <b-col cols="10" lg="5">
                  <h2 class="tbl-header">Granny Smith Apples</h2>
             <b-row class="post-table-row">
               
                    <b-col cols="1" class="tbl-icon">
                     <b-icon icon="calendar2-event"></b-icon>
                     </b-col>
                   <b-col cols="5" class="tbl-text d-flex">Today 3:40pm</b-col>
                   <b-col cols="1" class="tbl-icon">
                     <b-icon icon="clock"></b-icon>
                     </b-col>
                   <b-col cols="5" class="tbl-text">Ready Now</b-col>
              </b-row> 

            <b-row  class="post-table-row">
                   <b-col cols="1" class="tbl-icon">
                     <b-icon icon="geo-alt"></b-icon>
                     </b-col>
                   <b-col cols="5" class="tbl-text">2km</b-col>
                    <b-col cols="1" class="tbl-icon">
                     <b-icon icon="check"></b-icon>
                     </b-col>
                   <b-col cols="5" class="tbl-text">Organic</b-col>
               
              </b-row>
            </b-col>
            <!-- end post text col -->

            <!-- post icon col -->
            <b-col cols="2" lg="1" class="post-icon ">
              <img :src="postIcon" class="img-fluid" alt="">
            </b-col>
            <!-- end post icon col -->
            <!-- post bottom -->
            <b-row class="align-items-center post-bottom">
            <b-col cols="4" class="price-bottom"><p>$5.00/dozen</p></b-col>
            <b-col cols="4" class="img-bottom justify-content-center">
              
              <img :src="userImg" class="rounded-circle img-responsive" alt="">
              <p>Jayde Gray</p>
             
             </b-col>
            <b-col cols="4" class="text-center">
              <b-button type="button" class="btn btn-lg btn-post">More</b-button>
              </b-col>
          </b-row>
            <!-- end post-bottom -->
             </b-row>
             </b-container>
</template>

<script>
import postImg from '@/assets/dill.png';
import postIcon from '@/assets/post-icon.png';
import userImg from '@/assets/user.png';
export default {
  name: "Post",

  data() {
    return{
      postImg: postImg,
      postIcon: postIcon,
      userImg: userImg
    }
  },
 
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
  margin-top:1rem;
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
  margin-top:1rem;
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
  text-align: center;
  font-weight: bolder;
  font-size:2vw;
  font-family: 'Mulish', sans-serif;

}
.img-bottom img{
  width: 4vw;
  height: 4vw;
  object-fit: cover;
  
}
.img-bottom{
  margin:auto;
  display:flex;
  align-items: center;
  
}
.img-bottom p {
  margin-bottom:0;
  padding-left:10px;
  font-family: 'Mulish', sans-serif;
  font-weight: bolder;
  font-size:2vw;

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

</style>