<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-8 py-5">
        <!--Login Bootstrap Card-->
        <b-card class="text-center shadow-lg  mt-5">
          <h4 slot="header" class="header m-0">Login</h4>
          <b-form-input type="email" name="email" placeholder="email" v-model="email" class="mb-3"></b-form-input>
          <b-form-input type="password" name="password" placeholder="password" v-model="password"></b-form-input>
          <!-- Errors display div-->
          <b-card-text
            v-html="error"
            class="error mt-3"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          <b-button class="btn w-100" @click="login">Login</b-button>
        </b-card>
        <!-- /Login Bootstrap Card-->
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        // were saving to our centralized state
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
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
  background-color:#ED5E09;;
  color:#fff;
  text-align: center;
  border:none;
  font-family: 'Mulish', sans-serif;
}
.btn:hover{
   background-color:#f7ae84;
  border:none;
}




</style>
