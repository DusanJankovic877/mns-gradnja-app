<template>
  <div id="app">
    <transition name="fade-in" appear>
    <div>
      <Navbar/>
      <transition name="fade">
        <router-view class="view-1"/>
      </transition>
      <Footer/>
    </div>
    </transition>

    <!-- 
      Mašinski malter, gletovanje,izrada košuljice, košuljica, molersko farbarski radovi, 
      moleraj,farbanje, krečenje,MNS-Gradnja,gradjevina,usluge, gradjevinske usluge, Novi Sad
     -->
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
  // data() {
  //   return {
  //     show: false
  //   }
  // },
  // mounted() {
  //   this.show = true; // might need this.$nextTick
  // }


}
</script>
<style>
@font-face {
  font-family: "Barlow-Regular";
  src: local("Barlow-Regular"),
   url(./fonts/Barlow-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Barlow-Medium";
  src: local("Barlow-Medium"),
   url(./fonts/Barlow-Medium.ttf) format("truetype");
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
h2, h3{
  font-family: 'Barlow-Medium', sans-serif !important;
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
  transition: opacity .6s ease-in-out, transform .6s ease;
}

.fade-enter-active{
  transition-delay: 1s;
  
}
.fade-enter{
  opacity: 0;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave{
  opacity: 1;
}

.fade-leave-to{
    opacity: 0;
}

/* APP FADE IT AT LOAD */

.fade-in-leave-active {
    transition: opacity 0.7s ease-in-out, transform 0.7s ease;
}

.fade-in-enter-active {
    transition: opacity .7s ease-in-out, transform .7s ease;
    transition-delay: 1s;
}

.fade-in-enter, .fade-in-leave-to {
    opacity: 0;
}

.fade-in-enter-to, .fade-in-leave {
    opacity: 1;
}
</style>
