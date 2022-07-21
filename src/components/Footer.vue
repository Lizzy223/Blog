<template>
  <!-- Had difficulties installing flutterwave-vue and using it,
   implemented it in react and linked it to this button. The github
    page to its implementation in react is:
     https://github.com/Lizzy223/Button -->
  <div class="container">
    <div class="cta">
      <p class="cta__title">Join our Team of Writers</p>
      <p class="cta__desc">
        On dasdas, writers earn a living doing what they love. <br />
        Getting started is easy. Just pay a one time
        <span style="font-weight: 700">$25 fee</span> and everything is ready to
        go.
      </p>
      <a href="https://blog-details-payment.netlify.app/" target="_blank" >
        <button class="cta__button">join us</button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap");
.container {
  width: 100%;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Source Serif Pro", serif;
}
.cta {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cta__title {
  font-weight: 500;
  font-size: 2.15em;
  color: #2c2c2c;
}

.cta__desc {
  font-weight: 400;
  font-size: 1.35em;
  line-height: 1.5em;
  color: #6e6e6e;
  text-align: center;
  margin-top: 1rem;
}
.cta__button {
  color: #fff;
  background: #000;
  padding: 1rem 4rem;
  margin-top: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  border: none;
}

/* mobile view */
@media (max-width: 420px) {
  .cta__title {
    font-weight: 500;
    font-size: 1.5em;
    color: #2c2c2c;
  }

  .cta__desc {
    font-size: 0.85em;
    line-height: 1.75em;
  }
  .cta__button {
    color: #fff;
    background: #000;
    padding: 0.65rem 3rem;
    font-size: 0.85em;
    font-weight: 500;
  }
  .container {
    width: 95%;
    margin: auto;
  }
}
</style>
