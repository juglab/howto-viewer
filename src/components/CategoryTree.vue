<template>
  <li class="node-tree">
    <h3>{{ node.name }}</h3>
    <ul class="howto-list">
      <li v-for="howto in node.howtos" v-bind:data="howto" v-bind:key="howto.id">
        <router-link :to="'howto/' + howto.id">{{howto.title}}</router-link>
      </li>
    </ul>
    <ul class="category-child-list" v-if="node.childTags && node.childTags.length">
      <category v-for="child in node.childTags" v-bind:data="child" v-bind:key="child.id" :node="child"></category>
    </ul>
  </li>
</template>

<script>
export default {
  name: "category",
  props: {
    node: Object
  }
};
</script>

<style>

.category-child-list {
  list-style: none;
}

</style>
