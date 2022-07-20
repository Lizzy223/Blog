<script>
import Navbar from "../components/Navbar.vue";
import PostDetails from "../components/PostDetails.vue";
import Card from "../components/Card.vue";
import Footer from "../components/Footer.vue";
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
  <p class="text">More Articles</p>
  <div class="grid-container">
    <!-- <div v-for='index in 3' :key='index'>
      <Card/>
    </div> -->
    <Card />
    <!--<Card/>
    <Card/> -->
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap");

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3;
  width: 90%;
  margin: auto;
  margin-top: 2rem;
}
.text {
  font-weight: 900;
  font-size: 24px;
  font-family: "Source Serif Pro", serif;
  display:block;
  width: 90%;
  margin: auto;
  margin-top: 2rem;
}
/* responsive */
@media (max-width: 720px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
/* responsive */
@media (max-width: 480px) {
  /* "flutterwave-vue-v3": "^1.0.9", */
  .grid-container {
    grid-template-columns: repeat(1, 1fr);
    gap: 1;
  }
}
</style>
