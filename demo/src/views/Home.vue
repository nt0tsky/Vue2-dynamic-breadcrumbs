<template>
  <div class="home">
    <h1>Home</h1>
    <router-link :to="{name: 'subhome'}">Go to level 1</router-link>
    <div>
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
