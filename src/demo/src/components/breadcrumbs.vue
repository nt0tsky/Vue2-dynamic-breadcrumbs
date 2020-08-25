<template>
  <div class="breadcrumbs-demo" v-if="$breadcrumbs.length">
    <template v-for="(breadcrumb, idx) in $breadcrumbs">
      <component
        v-if="breadcrumb.template"
        :key="idx"
        :is="breadcrumb.template"
        :breadcrumb="breadcrumb"
        class="breadcrumbs-demo__item"
      />
      <div class="breadcrumbs-demo__item" v-else :key="idx">
        <router-link
          :to="{ name: breadcrumb.name, params: breadcrumb.params, query: breadcrumb.query }"
        >{{ breadcrumb.label }}</router-link>
      </div>
    </template>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css">
.breadcrumbs-demo {
	 display: flex;
	 align-items: center;
	 height: 100%;
	 flex-grow: 1;
}
 .breadcrumbs-demo .breadcrumbs-demo__item {
	 display: flex;
	 align-items: center;
}
 .breadcrumbs-demo .breadcrumbs-demo__item:not(:last-child):after {
	 content: "";
	 border: solid #98a9bc;
	 border-width: 0 1.2px 1.2px 0;
	 display: inline-block;
	 padding: 3px;
	 transform: rotate(-45deg);
	 -webkit-transform: rotate(-45deg);
	 margin: 0 12px;
}
 .breadcrumbs-demo .breadcrumbs-demo__item a {
	 font-size: 14px;
	 line-height: 17px;
	 color: #252631;
	 text-decoration: unset;
}
 .breadcrumbs-demo .breadcrumbs-demo__item a:hover {
	 color: #4d7cfe;
}
 .breadcrumbs-demo .breadcrumbs-demo__item:last-child a, .breadcrumbs-demo .breadcrumbs-demo__item:last-child svg {
	 color: #98a9bc;
	 cursor: not-allowed;
}
</style>