<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to ="/quiz">Quiz</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&&display=swap'); 
*{
    padding:0px;
    border:0px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    
}
body{
    background-color: #252C4A;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  color: white;
}

#nav {
  padding: 30px;
  text-align: center;
  
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: inherit;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
