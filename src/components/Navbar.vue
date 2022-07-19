<template>
  <nav>
    <img
      alt="Blog logo"
      class="logo"
      src="@/assets/logo.png"
      width="125"
      height="125"
    />
    <ul>
      <li>
        <img
          alt="twitwer"
          class="logo"
          src="@/assets/twitter.png"
          width="125"
          height="125"
        />
      </li>
      <li>
        <img
          alt="Vue l"
          class="logo"
          src="@/assets/twitter.png"
          width="125"
          height="125"
        />
      </li>
      <li>
        <img
          alt="figma"
          class="logo"
          src="@/assets/figma.png"
          width="125"
          height="125"
        />
      </li>
      <li>
        <img
          alt="github"
          class="logo"
          src="@/assets/github.png"
          width="125"
          height="125"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
nav {
  width: 90%;
  padding: .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:auto;
}
ul {
  display: flex;
  justify-content: flex-end;
}
li {
  text-decoration: none;
  padding: 0 0.5rem;
  list-style: none;
}
li>img{
    width:70%;
    height: 70%;
}
img{
    width:5em;
    height: 5em;
}
</style>
