<template>
 <div>
  <b-container fluid>
    <b-row class="outer-row">
      <b-col cols="12" md="4" lg="3" id="sidebarMenu" class=" d-md-block sidebar" align-h="start">
        <div class="sidebar-sticky pt-3">
          <!-- search input -->
              <b-input-group class="mb-2">
                  <b-form-input type="search" placeholder="Search"></b-form-input>
                  <b-input-group-append is-text>
                 <b-icon icon="search"></b-icon>
                </b-input-group-append>
               </b-input-group>
               <!-- end search input -->
               <!-- panel heading -->
                 <b-list-group >
            <b-list-group-item class="panel-heading">
              <h2>DISCOVER YOUR NEIGHBOUR'S BACKYARD BOUNTY </h2>
            </b-list-group-item>
            </b-list-group>
            <!-- end panel heading -->
            <!-- location search input -->
            <b-input-group class="mb-2 location">
              <b-input-group-prepend is-text>
                 <b-icon icon="map"></b-icon>
                </b-input-group-prepend>
                  <b-form-input type="search" placeholder="Location"></b-form-input>
               </b-input-group>
              <!-- end location search input-->
              <!-- category dropdown -->
               <b-dropdown block menu-class="w-100" class="mb-2">
      <template v-slot:button-content>
        <b-icon icon="flower1" aria-hidden="true"></b-icon> Food Type
      </template>
      <b-dropdown-item-button>Vegetables</b-dropdown-item-button>
      <b-dropdown-item-button>Fruit</b-dropdown-item-button>
      <b-dropdown-item-button>Herbs</b-dropdown-item-button>
      <b-dropdown-item-button>Animal Products</b-dropdown-item-button>
      <b-dropdown-divider></b-dropdown-divider>
      
    </b-dropdown>
              <!-- end category dropdown -->
                 <!-- km dropdown -->
               <b-dropdown block menu-class="w-100" class="mb-2">
      <template v-slot:button-content>
        <b-icon icon="geo-alt" aria-hidden="true"></b-icon> +km
      </template>
      
      <b-dropdown-item-button>Up to 5km</b-dropdown-item-button>
      <b-dropdown-item-button>Up to 10km</b-dropdown-item-button>
      <b-dropdown-item-button>Up to 15km</b-dropdown-item-button>
      <b-dropdown-item-button>Up to 20km</b-dropdown-item-button>
      <b-dropdown-divider></b-dropdown-divider>
     
    </b-dropdown>
              <!-- end km dropdown -->
                <!-- price dropdown -->
               <b-dropdown block menu-class="w-100" class="mb-2">
      <template v-slot:button-content>
        <b-icon icon="cash" aria-hidden="true"></b-icon> Price
      </template>
      
      <b-dropdown-item-button>Free</b-dropdown-item-button>
      <b-dropdown-item-button>Up to $5/Unit</b-dropdown-item-button>
      <b-dropdown-item-button>Up to $10/Unit</b-dropdown-item-button>
      <b-dropdown-divider></b-dropdown-divider>
     
    </b-dropdown>
              <!-- end price dropdown -->
        <div>
       <b-button block class="btn-filter">Filter</b-button>
       </div>
            </div>  
            <div>
              <b-img fluid :src="panelImg" alt=""  class="panel-img"></b-img>
                </div>   
          </b-col>
        <!-- main section -->
        <b-col cols="12" md="8" lg="9">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Latest</h1>
          </div>
        <Post/>
          
        </b-col>
    </b-row>
  </b-container>
</div>
 
</template>

<script>
import panelImg from '@/assets/77.png';

import Post from './Post'
// import InstructionGuidesService from '@/services/InstructionGuidesService'
export default {
  name: "Browse",
  components: {Post},
  data() {
    return{
      panelImg: panelImg,
      
    // instructionGuides: null
  }},
  // components: { Panel },
  // async mounted(){
  //   this.instructionGuides = (await InstructionGuidesService.getAllInstructionGuides()).data;
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Mulish&display=swap');

.outer-row{
  flex-wrap:wrap;
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
  border-radius:0 5px 5px 0;
  margin-bottom:2rem;
}
.input-group-append .input-group-text{
  background-color:#fff;
}
.input-group-prepend .input-group-text{
  background-color:#fff;
}
.location .form-control{
  border-left: none;
}
.panel-heading h2{
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  color: #ED5E09;
  font-size:2.8vw;
}
.panel-heading{
  background-color:#DFEFE1;
  border:none;
}
.btn-block{
  text-align:left;
}
.dropdown svg{
  margin-right:1.7vw;
}
.dropdown >>> .btn-secondary {
  background-color:#fff;
  color:#6d7275;
  text-align:left;
  border: 1px solid #ced4da;
  font-family: 'Mulish', sans-serif;

}
.dropdown >>> .btn-secondary:hover{
  background-color:#f7ae84;
  border:none;
}

.dropdown >>>.dropdown-toggle::after {
    position: absolute;
    top: 50%;
    right: 5%;
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
@media (min-width: 576px){
.post-container{
    max-width:100%;
}
}


</style>