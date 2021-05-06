<template>
  <div id="app">
    <Navbar class=""/>
    <router-view class="view"/>
    <Footer/>
  </div>
</template>
<script>
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
export default {
  components:{
    Navbar,
    Footer
  },
  data() {
    return{}
  },
}
</script>
<style>
@font-face {
  font-family: "Barlow-Regular";
  src: local("Barlow-Regular"),
   url(./fonts/Barlow-Regular.ttf) format("truetype");
}
#app {
  font-family: 'Barlow-Regular', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.view{
  margin-top:115px !important;
}
button{
  border-radius: 0 !important;
  border: none;
  font-family: "Barlow-Regular";
}
.space-above-view{
  margin-top: 190px !important;

}
</style>
