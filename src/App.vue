<template>
  <div id="main-container">
    <div id="nav">
      <NavBar></NavBar>
    </div>
    <router-view/>
    <div id="copyright" class="text-center">
      <p>Copyright &copy; {{fullYear}} - All Rights Reserved - <a href="#">PRS</a></p>
    </div>
  </div>
</template>

<script>
import NavBar from './components/Header/NavBar'
export default {
  data () {
    return {
      fullYear: (new Date()).getFullYear()
    }
  },
  components: {
    NavBar
  }
}
</script>

<style lang="less">
#main-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#copyright {
  position: absolute;
  bottom: 0px;
  background-color: #42b983;
  height: 30px;
  width: 100%;
  p {
    padding-top: 3px;
    margin: 0px;
  }
}
</style>
