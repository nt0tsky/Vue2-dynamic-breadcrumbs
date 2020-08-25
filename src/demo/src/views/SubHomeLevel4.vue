<template>
  <div>
    <h1>Level 4</h1>
    <div :style="{'margin-bottom': '30px'}">
      <input v-model="contextValue" @input="changed=false" />
      <button @click="onChange">Set breadcrumbs context</button>
      <div v-if="changed">Success!</div>
    </div>
    <router-link :to="{name: 'subhome-level5'}">Go to level 5 with custom breadcrumb context</router-link>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      contextValue: "",
      changed: false,
    };
  },

  methods: {
    onChange() {
      const { contextValue, $breadcrumbsManager } = this;

      $breadcrumbsManager.bindContext("level5InputValue", contextValue);

      this.changed = true;
    },
  },
};
</script>