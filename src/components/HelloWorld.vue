<template>
  <div class="hello">
    <div class="search">
      <input v-model.lazy="searchterm" @input="doSearch" @change="doSearch" placeholder="Ask me anything"/>
      <ul class="searchresult">
      <li v-for="item in searchresults">
        <router-link :to="'howto/' + item.id">{{ item.title }}</router-link>
      </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      searchterm: '',
      searchresults: []
    }
  },
  methods: {
  	doSearch ({ type, target }) {
      if(target.value ==='') {
        this.searchresults = [];
        this.searchterm = '';
        return;
      }
      var url = "/api/howtos/search/" + target.value;
      this.$http.get(url)
      .then(response => {
        this.searchresults = response.data;
        this.searchterm = target.value;
      })
      .catch(e => { console.log(e); });
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img, input {
  margin: 20px;
}

input {
  border: 2px solid #2d2d2f;
  padding: 10px;
  border-radius: 10px;
  margin: 0;
}

.hello {
  background: white;
  padding: 20px;
  border-radius: 13px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
}

.search {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 50px;
  z-index: 10;
  width: 600px;
  flex: 1;
}

.searchresult {
}

.searchresult li {
  display: block;
  text-align: left;
  padding: 5px;
  margin-bottom: 5px;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: black;
}
</style>
