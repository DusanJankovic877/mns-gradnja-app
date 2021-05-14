<template>

    <b-navbar :class="{ 'navbar--hidden': !showNavbar }" class="col-lg-10 m-auto" toggleable="lg" type="light" fixed="top">
    <b-navbar-brand class="nav-brand" href="#">
      <router-link class="navbar-brand" to="/">
      <img src="../../assets/MNS_logo.png" alt="" style="height:50px; width: 75px;">
      </router-link> 
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <router-link class="nav-link" to="/" @click.native="scrollToTop">Početna</router-link>
        <router-link class="nav-link" to="/about" @click.native="scrollToTop">O nama</router-link>
        <router-link class="nav-link" to="/services">Usluge</router-link>
        <router-link class="nav-link" to="/contact">Kontakt</router-link>
      </b-navbar-nav>

 
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  data () {
    return {
      showNavbar: true,
      lastScrollPosition: 0
    }
  },
  methods:{
    scrollToTop() {
      // window.scrollTo(0,0);
    },
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 300) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>
<style>
.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
  top:0px !important;
}
  nav{
    border: 1px solid #555555;
    padding: 0 20px!important;
    top: 25px !important;
    background-color: #FFFFFF;
    transition: 0.1s all ease-out;
  }
  .nav-brand{
    border-right: 1px solid #555555;
    padding: 15px 10px 20px 10px !important;
  }
  .nav-link{
    padding: 0 15px !important;
    font-size: 17px;
    margin-bottom: 12px;
  }
@media only screen and (max-width: 769px) {
  .nav-brand{
    border-right: none;
  }
  nav{
    top: 0 !important;
  }
}
</style>