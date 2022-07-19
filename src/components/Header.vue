<template>
    <div class="container">
        <div class="header">
            <p class="rocket">🚀</p>
            <div class="title">
                Optimizing CSS for faster
 page loads 
            </div>
            <div class="img">
                <img
          alt="blob"
          class="image__blob"
          src="@/assets/blob.png"
        />
            </div>
        </div>
        <div class="desc">
            <p class="date">Front-end  &nbsp; <span style="color:#6E6E6E">1 Hour Ago</span> </p>
            <p class="title">Optimizing CSS for faster page loads  </p>
            <p class="content">
                Not long ago I decided to improve the loading times of my website. It already loads pretty fast, but I knew there was still room for improvement and one of them was CSS loading. I will walk you through the process and show you how you can improve your load times as well.
To see how CSS affects the load time of a webpage we first have to know how the browser converts an HTML document into a functional webpage...
            </p>
            <br/>
            <div class="time">
                <p>3 Min Read</p>
                <p class="blue"> Read full  <img
          alt="blob"
          class="image__blob"
          src="@/assets/arrow.png"
        /></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Source+Serif+Pro&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap');
.container{
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    height: 18.5rem;
    margin: auto;
    align-items: center;
    justify-content:space-between;
    margin-top:3rem;
    border: 1px solid #f5f5f5;
    padding:'25rem';
}
.header{
    background:#EF5623;
    width: 30%;
    height: 17.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: .75rem 2rem;
    position: relative;
}
.header >.img{
    position: absolute;
    bottom: 0;
    right:0;
    
}
.header>.img>image{
    width: 100%;
    height:100%;
}

.header>.rocket{
    font-size: 1.5rem;
}

.header>.title{
    z-index: 1;
    color: #fff;
    font-weight: 900;
    font-size: 2em;
    line-height: 1.5em;
    font-family: 'Playfair Display', serif;
    padding-bottom: 1em;

}

.desc{
    height: 17.5rem;
    width:65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Source Serif Pro', serif;

}
.desc>.date{
    font-weight: 700;
    font-size: .75em;
    color: #4b4b4b;
    font-family: 'Source Serif Pro', serif;
}
.desc>.title{
    font-weight: 900;
    font-size: 1.375em;
    color:#2c2c2c;
    font-family: 'Source Serif Pro', serif;
}

.desc>.content{
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5rem;
    font-family: 'Source Serif Pro', serif;
}

.desc>.time{
    color:#6e6e6e;
    font-size: 12px;
    font-weight: 500;
    font-family: 'Source Serif Pro', serif;
    width: 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
}

.desc>.time>.blue{
    color:#1473E6;
     display:flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
}

/* responsiveness  */
@media (max-width: 820px) {
.container{
    height: 100%;
}
.header{
    background:#EF5623;
    width: 100%;
    justify-content: center;
    align-items: center;
}

.header>.title{
    font-size: 1.2em;
    line-height: 1.5em;
    margin-top: 1rem;

}

.desc{
    width:100%;
    margin-top:1rem;
    height:20rem;
}

} 


/* mobile view */
@media (max-width: 420px){
.header>.img{
    display:none;
}
.desc{
    height: 25.5rem;
    width:100%;

}
}
</style>