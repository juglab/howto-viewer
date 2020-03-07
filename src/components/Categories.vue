<template>
  <div class="wrapper">
    <div class="categories page">
      <h2>All HowTo's</h2>
      <ul class="category-list">
        <category-tree v-for="item in categories" v-bind:data="item" v-bind:key="item.id" :node="item"></category-tree>
      </ul>
    </div>
  </div>
</template>

<script>
import CategoryTree from "./CategoryTree";
export default {
  name: 'Categories',
  data () {
    return {
      categories: []
    }
  },
  created () {
    var url = "/api/tags/";
    this.$http.get(url)
    .then(response => {
      this.categories = response.data;
    });
  },
  components: {
    CategoryTree
  }
}

</script>

<style scoped>

.wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}

.categories {

}

.category-list {
  list-style: none;
  padding: 0;
}

.category-list {
  list-style: none;
}

.howto-list {
  list-style: bullet;
}

</style>
