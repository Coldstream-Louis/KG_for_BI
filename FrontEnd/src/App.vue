<template>
  <div id="app">
    <headerBar/>
    <Home id="home"/>
    <data-v id="DV"/>
    <description id="doc"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import headerBar from './components/headerBar'
import dataV from './components/dataV'
import description from './components/description'
import './assets/css/custom-css-bootstrap-magic-2018-06-16.css'

export default {
  name: 'App',
  components: {
    HelloWorld,
    headerBar,
    Home,
    dataV,
    description
  },
  methods: {
    load () {
      console.log('ok')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#DV,#doc{
  display: none;
}
</style>
