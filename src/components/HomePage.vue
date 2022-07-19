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
 
};
</script>

<template>

  <Navbar />
  <Header />
  
  <div class="grid-container">
    <Card/>
  </div>
  <Footer />
  
    
  

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
