<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-8 py-5">
        <!--Login Bootstrap Card-->
        <b-card class="text-center shadow-lg mt-5">
          <h4 slot="header" class="header m-0">Register</h4>
           
            <b-form-input type="text" name="username" placeholder="Username" v-model="username"></b-form-input>
          <b-form-input type="email" name="email" placeholder="email" v-model="email" class="mb-3"></b-form-input>
          <b-form-input type="password" name="password" placeholder="password" v-model="password"></b-form-input>
           <b-form-input type="text" name="street" placeholder="Street Address" v-model="street"></b-form-input>
           <b-form-input type="text" name="city" placeholder="City" v-model="city"></b-form-input>
           <b-form-select id="state" type="text" name="state" v-model="state" :options="stateOptions"></b-form-select>
           <b-form-input type="number" name="postal" placeholder="Postal Code" v-model="postal"></b-form-input>
           <b-form-input type="text" name="profileimg" placeholder="Profile Image" v-model="profileimg"></b-form-input>
          <!-- Errors display div-->
          <b-card-text
            v-html="error"
            class="error mt-3"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          <b-button class="btn w-100" @click="register">Register</b-button>
        </b-card>
        <!-- /Login Bootstrap Card-->
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "Register",
  data() {
    return {
      username: null,
      email: null,
      password: null,
      street: null,
      city: null,
      state: null, stateOptions: [
          { value: null, text: 'State' },
          { value: 'vic', text: 'VIC' },
          { value: 'nsw', text: 'NSW' },
          { value: 'wa', text: 'WA' },
          { value: 'qld', text: 'QLD' },
          { value: 'act', text: 'ACT' },
          { value: 'nt', text: 'NT' }
        ],
      postal:null,
      profileimg: null,
      error: null,
    }
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          username: this.username,
          email: this.email,
          password: this.password,
          street: this.street,
          city: this.city,
          state: this.state,
          postal: this.postal,
          profileimg: this.profileimg
        });
        this.$router.push({name: 'browse'})
      } catch (error) {
        console.log(error);
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
.header{
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  color: #ED5E09;
}
.btn{
  background-color:#ED5E09;
  color:#fff;
  text-align: center;
  border:none;
  font-family: 'Mulish', sans-serif;
}
.btn:hover{
   background-color:#f7ae84;
  border:none;
}
.form-control, .custom-select{
  margin-bottom: 1rem;
}
</style>
