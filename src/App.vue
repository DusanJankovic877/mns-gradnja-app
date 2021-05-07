<template>
  <div id="app">
    <Navbar class=""/>
    <transition name="fade">
      <router-view class="view-1"/>
    </transition>
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
  }

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
.view-1{
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
/* TRANSITION */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter-active{
  transition-delay: .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade-enter-to, .fade-leave {
  opacity: 1;
}
</style>
