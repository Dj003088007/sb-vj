<template>
  <div id="app">
    
    <header>
      <nav class="text-center navbar navbar-expand navbar-dark bg-dark">
        <router-link to="/" class="navbar-brand">JDsPost</router-link>
        <div class="navbar-nav mr-auto">
          <!-- <li class="nav-item">
            <router-link to="/tutorials" class="nav-link">Tutorials</router-link>
          </li> -->
          <li class="nav-item">
            <router-link to="/add" class="nav-link">Add Tutorial</router-link>
          </li>
        </div>
      </nav>
    </header>

    <body>
      <div class="container mt-3">
        <router-view />
      </div>
    </body>
    
    <footer>
      <div class="footer">
        <ul>
          <li>&#10004; Created with Spring Boot + Vue.js</li>
          <li>
            &copy; 2021.
            <a href="">JDsPost</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navbar-brand {
  color: #2c3e50;
}

.navbar-brand:hover {
  color: red;
  background-color: black;
  text-decoration: none;
}

.footer {
  color: #2c3e50;
  margin: 0 auto;
  margin-top: 10px;
  padding: 0.5em 0;
  text-align: center;
  font-size: 0.9em;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0
}

li {
  display: block;
  padding: 0.5em;
}

a {
  color: #2c3e50;
  /* text-decoration: dotted underline; */
}

a:hover {
  color: red;
  background-color: black;
  text-decoration: none;
}
</style>
