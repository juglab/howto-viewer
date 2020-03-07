<template>
  <div id="app">
    <div id="footer">
      <h1><router-link to="/">Fiji & Java</router-link></h1>
      <router-link to="/categories">Browse HowTo's</router-link>
      <router-link to="/sources">Sources</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Ubuntu");
@import url("https://fonts.googleapis.com/css?family=Mansalva&display=swap");

html, body {
  background: white;
  padding: 0;
  margin: 0;
  display: flex;
  align-content: stretch;
  align-items: stretch;
  justify-content: center;
  flex: 1;
  min-height: 100%;
}

.page {
  border: 1px solid black;
  text-align: left;
  width: 920px;
  max-width: 95%;
  padding: 20px;
}

#footer h1 a, #footer h1 {
  color: #a1a1a3;
  margin: 0;
  text-decoration: none;
  color: black;
  border: 0 none;
  display: inline-block;
  margin-right: 20px;
}

#app {
  font-family: 'Ubuntu', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: white;
  display: flex;
  align-items: center;
  height: 100%;
  flex-direction: column;
}

#footer {
  flex: 0;
  margin-bottom: 5px;
}

#footer a {
  display: inline-block;
  margin: 5px 10px 0 10px;
  border-bottom: 2px dashed black;
  padding-top: 13px;
  font-weight: bold;
  color: black;
  text-decoration: none;
}

</style>
