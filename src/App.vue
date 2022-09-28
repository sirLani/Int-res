<template>
  <Navbar />
  <router-view />
  <Footer />
  <!--You do not need to worry about the footer for this technical test. You can remove it if you'd like-->
</template>

<script>
import Footer from "@/components/general/layout/Footer.vue";
import Navbar from "@/components/general/layout/Navbar.vue";

export default {
  name: "App",
  components: {
    Footer,
    Navbar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Montserrat, Arial, Helvetica, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

p {
  font-size: 14px;
}
</style>
