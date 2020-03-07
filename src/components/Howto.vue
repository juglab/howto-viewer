<template>
  <div class="wrapper">
    <div v-if="howto" class="howto">
      <div class="meta">
        <b><code>author</code></b> <code>{{howto.author}}</code>
        <b><code>source</code></b> <code>{{howto.artifact.availableArtifact.groupId}}:{{howto.artifact.availableArtifact.artifactId}}</code>
        <b><code>version</code></b> <code>{{howto.artifact.version}}</code>
      </div>
      <howto-core :howto="howto"></howto-core>
    </div>
  </div>
</template>

<script>
import HowtoCore from "./HowtoCore";
export default {
  name: 'Howto',
  data () {
    return {
      howto: null
    }
  },
  created () {
    var url = "/api/howtos/" + this.$route.params.id;
    this.$http.get(url)
    .then(response => {
      this.howto = response.data;
    }).then (x =>{
      this.$prism.highlightAll();
    });
  },
  components: {
    HowtoCore
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
