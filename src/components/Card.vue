<template>
    <div class="container">
        <div class="image">
             <img
          alt="card"
          class="image__blob"
          src="@/assets/card1.png"
        />
        </div>
        <div class="desc">
            <p class="date">Front-end  &nbsp; <span style="color:#6E6E6E">1 Hour Ago</span> </p>
            <p class="title">CSS Grid</p>
            <p class="content">
               The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, 
               making it easier to design web pages without having to use floats and positioning. </p>
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
  name: "Card",
};
</script>


<style scoped>
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
}
.container>.image{
    height:30%;
    width: 100%;
}

.container>.image>img{
   
    object-fit: contain;
}

.desc{
    height:60%;
    width:100%;
    padding: 1rem;
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
}
/* responsiveness  */
@media (max-width: 820px) {
.container{
    width: 50%;
    margin:auto;
    justify-items: center;
}


.desc{
    width:100%;
    margin-top:1rem;
    height:20rem;
}

} 


/* mobile view */
@media (max-width: 420px){
    .container{
    width: 90%;
    margin:auto;
}
.container>.image{
    height:30%;
    width: 100%;
    margin: auto;
    margin-bottom:1rem;
}
.container>.image>img{
   width: 95%;
   margin:auto;
    object-fit: contain;
}
.desc{
    height: 25.5rem;
    width:100%;

}
}
</style>