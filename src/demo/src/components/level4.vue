<template>
  <div class="level4">
    <router-link
      :to="{ name: breadcrumb.name, params: breadcrumb.params, query: breadcrumb.query }"
    >
      Dynamic level 4 breadcrumb with image
      <img alt="Vue logo" src="../assets/logo.png" />
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["breadcrumb"],
};
</script>

<style lang="css">
.level4 a {
  display: flex;
  align-items: center;
}

.level4 a img {
  width: 28px;
  height: 28px;
}
</style>