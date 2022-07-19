<script>

import Navbar from "./Navbar.vue";
import Header from "./Header.vue"
import Card from "./Card.vue"
import Footer from "./Footer.vue"
export default {
  components: {
    Navbar,
    Header,
    Card,
    Footer,
  },
  data () {
    return {
      jobs: [],
    }
  },
  mounted () {

      fetch('https://techcrunch.com/wp-json/wp/v2/posts')
      .then(res => res.json())
      .then(data =>this.jobs = data)
      .catch(err=> console.log(err.message))
  },
};
</script>

<template>

  <Navbar />
  <Header />
  
  <div class="grid-container">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  </div>
  <Footer />
  {{job.id}}

</template>

<style scoped>

.grid-container{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3;
  width: 90%;
  margin: auto;
  margin-top:2rem;
}
/* responsive */
@media (max-width:720px){
  .grid-container{
    grid-template-columns: repeat(2, 1fr);
  }
}
/* responsive */
@media (max-width:480px){
  .grid-container{
    grid-template-columns: repeat(1, 1fr);
    gap:1;
  }
}
</style>
