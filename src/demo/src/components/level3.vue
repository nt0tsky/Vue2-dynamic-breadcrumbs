<template>
  <div class="level3-template">
    <router-link
      :to="{ name: breadcrumb.name, params: breadcrumb.params, query: breadcrumb.query }"
    >
      <div>
        <strong>Dynamic level 3 breadcrumb content</strong>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["breadcrumb"],
};
</script>

<style lang="css">
.level3-template {
  display: flex;
}
</style>