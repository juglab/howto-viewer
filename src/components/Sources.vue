<template>
  <div class="wrapper">
    <div class="page">
      <h2>Sources</h2>
      <ul v-if="sources && sources.length">
      <li v-for="source in sources" v-bind:data="source" v-bind:key="source.id">
      <span v-if="source.artifacts">{{source.artifacts.length}}</span>
        <router-link v-if="source.hasHowtos" :to="'source/' + source.groupId + '/' + source.artifactId"><code>{{source.groupId}}:{{source.artifactId}}</code></router-link>
        <span v-else><code>{{source.groupId}}:{{source.artifactId}}</code></span>
      </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sources',
  data () {
    return {
      sources: []
    }
  },
  created () {
    var url = "/api/sources/";
    this.$http.get(url)
    .then(response => {
      this.sources = response.data;
    });
  }
}

</script>

<style scoped>

.wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  margin: 0;
  padding: 10px;
}

.meta {
  border: 2px dotted #f1f1f6;
  padding: 7px;
}

</style>
