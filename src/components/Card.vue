<template>
<div v-if="jobs === null" class="container container__desc__title ">Loading...</div>

<div v-for="job in jobs" :key="job.id">   
    <div class="container" @click="changeRoute()">
        <div class="container__image">
             <img
          alt="card"
          class="image__blob"
          src="@/assets/card1.png"
        />
        </div>
        <div class="container__desc">
            <p class="container__desc__date">
               <span class='container__desc__date__slug'> {{job.slug}}</span>  &nbsp; <span style="color:#6E6E6E">{{job.date}}</span> </p>
            <p class="container__desc__title">{{job.title.rendered.replace(/(\W+([0-9])*\W)/ig, "")}}</p>
            <p class="container__desc__content">
              {{job.content.rendered.replace(/(<([^>]+)>)/ig, "")}}
                </p>
            <br/>
            <div class="container__desc__time">
                <p>3 minutes</p>
                <router-link class="container__desc__time__blue" :to="{name:'post-details', params: {id: job.id}}">
                <p class="container__desc__time__blue"> 
                    Read full  <img
                alt="blob"
                class="image__blob"
                src="@/assets/arrow.png"
                /></p>
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "Card",
  
   data () {
    return {
      jobs: [],
    }
  },
  mounted () {

      fetch('https://techcrunch.com/wp-json/wp/v2/posts')
      .then(res => res.json())
      .then(data =>this.jobs = data )
      .catch(err=> console.log(err.message))

     
  },
};

</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Source+Serif+Pro&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap');

.container{
    width:22rem;
    height:30rem;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    border: 1px solid #f5f5f5;
    margin-top:.75rem;

    &__image{
    height:30%;
    width: 100%;
}
    &__desc{
    height:60%;
    width:100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Source Serif Pro', serif;

    &__date{
    font-weight: 700;
    font-size: .75em;
    color: #4b4b4b;
    font-family: 'Source Serif Pro', serif;
    &__slug{
        width: 13em;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
}
    &__title{
    font-weight: 900;
    font-size: 1.375em;
    color:#2c2c2c;
    font-family: 'Source Serif Pro', serif;
}
    &__content{
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5rem;
    font-family: 'Source Serif Pro', serif;
    display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
}
    &__time{
    color:#6e6e6e;
    font-size: 12px;
    font-weight: 500;
    font-family: 'Source Serif Pro', serif;
    width: 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;

    &__blue{
    color:#1473E6;
     display:flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
}
}
}
}

/* responsiveness  */
@media (max-width: 820px) {
.container{
    width: 50%;
    margin:auto;
    justify-items: center;

    &__desc{
        width:100%;
    margin-top:1rem;
    height:20rem;
    }
}
} 

/* mobile view */
@media (max-width: 420px){
    .container{
    width: 95%;
    margin:auto;

    &__image{
         height:30%;
        width: 100%;
        margin: auto;
        margin-bottom:1rem;
        &__img{
             width: 95%;
            margin:auto;
            object-fit: contain;
        }
    }
    &__desc{
         height: 25.5rem;
    width:100%;
    }
}
}
</style>