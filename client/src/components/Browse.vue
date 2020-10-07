<template>
 <div>
  <b-container fluid>
    <b-row>
      <b-col cols="12" lg="3" md="4" id="sidebarMenu" class=" ml-3 d-md-block sidebar" align-h="start">
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
              <h2>DISCOVER YOUR NEIGHBOR'S BAKCYARD BOUNTY </h2>
            </b-list-group-item>
            </b-list-group>
            <!-- end panel heading -->
            <!-- location search input -->
            <b-input-group class="mb-2">
              <b-input-group-prepend is-text>
                 <b-icon icon="geo-alt"></b-icon>
                </b-input-group-prepend>
                  <b-form-input type="search" placeholder="Location"></b-form-input>
               </b-input-group>
              <!-- end location search input-->
              <!-- category dropdown -->
               <b-dropdown block menu-class="w-100">
      <template v-slot:button-content>
        <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Settings
      </template>
      <b-dropdown-item-button>
         <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
         Locked <span class="sr-only">(Click to unlock)</span>
      </b-dropdown-item-button>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-group header="Choose options" class="small">
        <b-dropdown-item-button>
           <b-icon icon="blank" aria-hidden="true"></b-icon>
           Option A <span class="sr-only">(Not selected)</span>
        </b-dropdown-item-button>
        <b-dropdown-item-button>
           <b-icon icon="check" aria-hidden="true"></b-icon>
           Option B <span class="sr-only">(Selected)</span>
        </b-dropdown-item-button>
         <b-dropdown-item-button>
           <b-icon icon="blank" aria-hidden="true"></b-icon>
           Option C <span class="sr-only">(Not selected)</span>
        </b-dropdown-item-button>
      </b-dropdown-group>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item-button>Some action</b-dropdown-item-button>
      <b-dropdown-item-button>Some other action</b-dropdown-item-button>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item-button variant="danger">
        <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
        Delete
      </b-dropdown-item-button>
    </b-dropdown>
              <!-- end category dropdown -->
            </div>     
          </b-col>
    </b-row>
  </b-container>
</div>
 
</template>

<script>
// import Panel from '@/components/Panel.vue';
// import InstructionGuidesService from '@/services/InstructionGuidesService'
export default {
  name: "Browse",
  data() {
    return{
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

.input-group > .form-control{
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
}
.input-group-append .input-group-text{
  background-color:#fff;
}
.input-group-prepend .input-group-text{
  background-color:#fff;
}
.panel-heading h2{
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  color: #ED5E09;
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
/* .dropdown{
  background-color:#fff;
  color:#495057;
} */
</style>