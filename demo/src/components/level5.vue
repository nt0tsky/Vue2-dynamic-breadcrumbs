<template>
  <div class="level5">
    <router-link
      :to="{ name: breadcrumb.name, params: breadcrumb.params, query: breadcrumb.query }"
    >
      <strong>Context value is {{ breadcrumb.context.level5InputValue }}</strong>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["breadcrumb"],
};
</script>

<style lang="css">
</style>