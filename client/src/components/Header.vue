<template>
  <div>
    <!--Navbar-->
    <b-navbar
      toggleable="md"
      fixed="top"
      class="border-bottom"
    >
      <b-navbar-brand to="/"><img :src="logo" width="350" height="78" class="d-inline-block align-top" alt="" ></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto">
          <b-nav-item>
          <router-link to="/browse">Browse</router-link>
          </b-nav-item>

           <b-nav-item>
        <router-link to="/Register">Sell</router-link>
      </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <!-- the if statement below checks to see if we are logged in, if we are then the register and login button will not show -->
            <router-link v-if="!$store.state.isUserLoggedIn" to="/login" class="btn login mr-2">Login</router-link>
            <router-link v-if="!$store.state.isUserLoggedIn" to="/register" class="btn signup">Register</router-link>
             <b-button v-if="$store.state.isUserLoggedIn" @click="logout" class="btn">Log Out</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!--/Navbar-->
    <div>
  <b-jumbotron :style="{ backgroundImage: 'url(\'' + jumboImg + '\')' }">
    <template v-slot:header>Browse Your Local <br/> Organic Homegrown Extras </template>

    <template v-slot:lead>
      Where a community can sell or give away all the surplus produce they grow in the their home gardens
    </template>

    <router-link v-if="!$store.state.isUserLoggedIn" to="/register" class="btn signup">Become a Seller</router-link>
    <router-link v-if="$store.state.isUserLoggedIn" to="/" class="btn signup">Make a Post</router-link>
  </b-jumbotron>
</div>

  </div>
</template>

<script>
import logo from '@/assets/333.png';
import jumboImg from '@/assets/jumbotron.png';
export default {
  name: 'AppHeader',
  data (){
    return{
      logo:logo,
      jumboImg: jumboImg

    }
  },
  props: {
    msg: String
  },
  methods: {
    logout(){
      // were going to vuex and emptying values adn setting the to null
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      // when someone clicks on the logout button we clear our vuex state adn send them to the homepage
      this.$router.push({name: 'root'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Mulish&display=swap');

.navbar{
  background-color:#DFEFE1;
  font-family: 'Mulish', sans-serif;
}


a{
  color: #87A38A;
}

 a:hover{
    color:#495057;
    text-decoration: none;
  }

.signup{
  border: 1px solid#AED1B1;
  border-radius: 5px;
  background-color:#AED1B1;
   color: white;
  
}
.jumbotron{
  padding-top:7rem;
  background-size: cover;
}
.jumbotron h1{
  font-size:2.5rem;
  font-family: 'Montserrat', sans-serif;
  color:white;
}
.jumbotron p{
  font-family: 'Mulish', sans-serif;
  color:#EDF5EE;
}
</style>
