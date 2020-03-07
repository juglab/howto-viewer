<template>
  <div class="howto">
    <h2>{{howto.title}}</h2>
    <div v-html="howto.content"></div>
  </div>
</template>

<script>
export default {
  name: "howto-core",
  props: {
    howto: Object
  }
};
</script>

<style>

.category-child-list {
  list-style: none;
}

</style>
