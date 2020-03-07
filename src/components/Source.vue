<template>
  <div class="wrapper">
    <div v-if="source" class="page">
      <div class="meta">
        <b><code>source</code></b> <code>{{source.availableArtifact.groupId}}:{{source.availableArtifact.artifactId}}</code>
        <b><code>version</code></b> <code>{{source.version}}</code>
      </div>
      <howto-core v-for="howto in howtos" v-bind:data="howto" v-bind:key="howto.id" :howto="howto"></howto-core>
    </div>
  </div>
</template>

<script>
import HowtoCore from "./HowtoCore";
export default {
  name: 'Howto',
  data () {
    return {
      source:null,
      howtos:[]
    }
  },
  created () {
    var url = "/api/" + this.$route.params.group + "/" + this.$route.params.artifact;
    this.$http.get(url)
    .then(response => {
      this.source = response.data[0];
      var url2 = "/api/howtos/artifact/" + this.source.id;
      this.$http.get(url2)
      .then(response2 => {
        this.howtos = response2.data;
      })
      .then (x =>{
        this.$prism.highlightAll();
      });
    });
  },
  components: {
    HowtoCore
  }
}

</script>

<style scoped>

.page {
  border: 0 none;
  width: auto;
  max-width: unset;
  display: flex;
  flex-wrap: wrap;
}

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
  min-width: 90%;
  flex: 1;
}

.howto {
  margin: 20px;
  padding: 10px;
  max-width: 800px;
  box-shadow: 2px 2px 10px #ccc;
  flex: 1;
}

</style>
