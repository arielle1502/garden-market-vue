<template>
  <div>
      <panel title="Create Instruction Guide">
          <b-form>
            <div class="row">
              <!--Left Col-->
              <!--
                title: {type: DataTypes.STRING},
                author: {type:DataTypes.STRING},
                category: {type:DataTypes.STRING},
                image: {type:DataTypes.STRING},
                youtubeId: {type:DataTypes.STRING},
                equipment: {type:DataTypes.TEXT},
                instructions: {type:DataTypes.TEXT}
              -->
              <b-col cols="12" md="6">
                <b-form-group id="title-group" label="Title:" label-for="title" description="Please enter a appropriate title for your instruction guide">
                  <!--v-model - Binds the data to the validator -->
                  <!--:state - Stores the logic that checks if the field data is valid -->
                  <!--aria-describedby="title-feedback" - Refers to the feedback that should display if the datat is invalid-->
                  <b-form-input id="title" type="text" required placeholder="Enter Title" v-model="post.title" ></b-form-input>

                    <!-- v-model="$v.instructionGuide.title.$model" :state="$v.instructionGuide.title.$dirty ? !$v.instructionGuide.title.$error : null" aria-describedby="title-feedback"></b-form-input>
                  <b-form-invalid-feedback id="title-feedback">
                    This is a required field and must be at least 3 characters.
                  </b-form-invalid-feedback> -->
                </b-form-group>
                <b-form-group id="category-group" label="Category:" label-for="category" description="Please enter a appropriate category">
                  <b-form-select id="category"  v-model="post.category" :options="catOptions"></b-form-select>
                    <!-- v-model="$v.instructionGuide.category.$model" :state="$v.instructionGuide.category.$dirty ? !$v.instructionGuide.category.$error : null" aria-describedby="category-feedback"></b-form-input>
                  <b-form-invalid-feedback id="category-feedback">
                    This is a required field and must be at least 3 characters.
                  </b-form-invalid-feedback> -->
                </b-form-group>
             <b-form-group id="image-group" label="Image:" label-for="image" description="Please enter a valid image URL">
                  <b-form-input id="image" type="text"  v-model="post.image" required placeholder="Enter Image URL" ></b-form-input>
                    <!-- v-model="$v.instructionGuide.image.$model" :state="$v.instructionGuide.image.$dirty ? !$v.instructionGuide.image.$error : null" aria-describedby="image-feedback"></b-form-input>
                  <b-form-invalid-feedback id="image-feedback">
                    This is a required field and must be at least 3 characters.
                  </b-form-invalid-feedback> -->
                </b-form-group>
                <b-form-group label="Individual radios">
                     <b-form-radio v-model="post.isOrganic" name="organic" value="organic">Organic</b-form-radio>
                     <b-form-radio v-model="post.isOrganic" name="non organic" value="non organic">Non Organic</b-form-radio>
                       </b-form-group>
              </b-col>
              <!--Right Col-->
              <b-col cols="12" md="6">
                  <b-form-group id="price-group" label="Price:" label-for= "price" description="Please enter an appropriate price for unit">
                <b-form-input id="price" type="text"  v-model="post.price" required placeholder="Enter Price"> </b-form-input>
                    <!-- v-model="$v.instructionGuide.category.$model" :state="$v.instructionGuide.category.$dirty ? !$v.instructionGuide.category.$error : null" aria-describedby="category-feedback"></b-form-input>
                  <b-form-invalid-feedback id="category-feedback">
                    This is a required field and must be at least 3 characters.
                  </b-form-invalid-feedback> -->
                </b-form-group>
                <b-form-group id="unit-group" label="Unit:" label-for="unit" description="Please enter an appropriate unit for price">
                  <b-form-select id="unit" v-model="post.unit" :options="unitOptions"></b-form-select>
                    <!-- v-model="$v.instructionGuide.category.$model" :state="$v.instructionGuide.category.$dirty ? !$v.instructionGuide.category.$error : null" aria-describedby="category-feedback"></b-form-input>
                  <b-form-invalid-feedback id="category-feedback">
                    This is a required field and must be at least 3 characters.
                  </b-form-invalid-feedback> -->
                </b-form-group>
                  <b-form-group id="description" label="Item Description:" label-for="description" description="Please enter general description">
                    <b-form-textarea id="description" v-model="post.description" placeholder="List Description" 
                    rows="3" max-rows="6"></b-form-textarea>
                     <!-- v-model="$v.instructionGuide.equipment.$model" :state="$v.instructionGuide.equipment.$dirty ? !$v.instructionGuide.equipment.$error : null" aria-describedby="equipment-feedback"></b-form-textarea>
                    <b-form-invalid-feedback id="equipment-feedback">
                      This is a required field and must be at least 3 characters.
                    </b-form-invalid-feedback> -->
                  </b-form-group>
                 
              </b-col>
              <div class="col-12">
                <b-button @click="create" class="w-100" variant="primary">Submit</b-button>
              </div>
            </div>
          </b-form>
      </panel>
  </div>
</template>

<script>

import PostsService from '../services/PostsService';
// import { validationMixin } from 'vuelidate';
// import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: "CreatePostForm",
  components: { },
  data(){
    return{
      post: {
        title: null,
        image: null,
        price: null,
        isOrganic: null,
        description: null,
        UserId: this.$store.state.user.id,
        author: this.$store.state.user.username,
        userImg: this.$store.state.user.profileimg,
        userCity: this.$store.state.user.city,
        userEmail: this.$store.state.user.email
      },
      category: null,
        catOptions: [
          { value: 'fruit', text: 'Fruit' },
          { value: 'vegetable', text: 'Vegetable' },
          { value: 'herbs', text: 'Herbs' },
          { value: 'animal', text: 'Animal Product' }
        ],
        unit: null,
        unitOptions: [
          { value: 'dozen', text: 'dozen' },
          { value: '1kg', text: '1kg' },
          { value: 'bunch', text: 'bunch' },
          { value: '1L', text: '1L' }
        ]
    }
  },
  // mixins: [validationMixin],
  // validations: {
  //   instructionGuide: {
  //       title: {required, minLength: minLength(3)},
  //       author: {required, minLength: minLength(3)},
  //       category: {required, minLength: minLength(3)},
  //       image: {required, minLength: minLength(3)},
  //       youtubeId: {required, minLength: minLength(3)},
  //       equipment: {required, minLength: minLength(3)},
  //       instructions: {required, minLength: minLength(25)}
  //     }
  // },
  methods: {
    async create(){
      //validation check
      // this.$v.instructionGuide.$touch();
      // if(this.$v.instructionGuide.$anyError){
      //   return;
      // }

      // posts data
      try{
        console.log(this.post)
      await PostsService.postPosts(this.post);
      this.$router.push({name: 'browse '});
      }catch(error){
        console.log(error)
      }
    },
  },
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer-row{
  flex-wrap:wrap;
}

</style>