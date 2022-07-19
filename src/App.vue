<script>
import HomeView from "./views/HomeView.vue"
import PostView from "./views/PostView.vue"
export default {
  components: {    
    PostView,
    HomeView
},
};
</script>

<template>
  <div>
        <RouterLink to="/"> </RouterLink>
        <RouterLink to="/post-details/:id"> </RouterLink>
     
  </div>
  <router-view/>

</template>

<style scoped>
</style>
