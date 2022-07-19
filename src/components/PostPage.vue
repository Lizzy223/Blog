<script>

import Navbar from "./Navbar.vue";
import PostDetails from "./PostDetails.vue"
import Card from "./Card.vue"
import Footer from "./Footer.vue"
export default {
  components: {
    Navbar,
    PostDetails,
    Card,
    Footer,
  },
};
</script>

<template>

  <Navbar />
  <PostDetails />
  
  <!-- <div class="grid-container">
    <Card/>
    <Card/>
    <Card/>
  </div> -->
  <Footer />

</template>

<style scoped>

</style>
