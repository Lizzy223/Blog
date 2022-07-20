<template>
<div v-if="jobs">
    <div class="container">
        <div class="container__desc">
            <p class="container__desc__date">
               <span class='container__desc__date__slug'> {{jobs.parsely.meta.creator}}</span>  &nbsp; <span style="color:#6E6E6E">{{jobs.date}}</span> </p>
            <p class="container__desc__title">{{jobs.title.rendered.replace(/(\W+([0-9])*\W)/ig, "")}}</p>
            <p class="container__desc__content">
              {{jobs.content.rendered.replace(/(<([^>]+)>)/ig, "")}}
                </p>
           
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "PostDetails",  
   data () {
    return {
      jobs: null,
    }
  },
  mounted () {
      fetch('https://techcrunch.com/wp-json/wp/v2/posts/' + this.$route.params.id)
      .then(res => res.json())
      .then(data =>this.jobs = data )
      .catch(err=> console.log(err.message))     
  },
};

</script>

<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Source+Serif+Pro&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap');

.container{
    width:90%;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    border: 1px solid #f5f5f5;
    margin:auto;

    &__desc{
        width:100%;
        padding: 1rem;
        margin-top:1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-family: 'Source Serif Pro', serif;

        &__date{
            font-weight: 700;
            font-size: .75em;
            color: #4b4b4b;
            font-family: 'Source Serif Pro', serif;

        }
        &__title{
            font-weight: 900;
            font-size: 1.75em;
            color:#2c2c2c;
            margin-top:.75rem;
            margin-bottom:1rem;
            font-family: 'Source Serif Pro', serif;
        }
        &__content{
            font-weight: 400;
            font-size: 14px;
            line-height: 1.5rem;
            font-family: 'Source Serif Pro', serif;
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
    }
}
} 


/* mobile view */
@media (max-width: 420px){
    .container{
    width: 95%;
    margin:auto;

    &__desc{
        width:100%;

        &__slug{
            width: 13em;
            display: inline-block;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }
}

}
</style>