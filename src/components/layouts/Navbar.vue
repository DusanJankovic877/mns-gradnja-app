<template>
    <b-navbar class="col-lg-10 m-auto" toggleable="lg" type="light" fixed="top">
    <b-navbar-brand class="nav-brand" href="#">
      <router-link class="navbar-brand" to="/">
      <img src="../../assets/MNS_logo.png" alt="" style="height:50px; width: 75px;">
      </router-link> 
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <router-link class="nav-link" to="/">Početna</router-link>
        <router-link class="nav-link" to="/about">O nama</router-link>
        <router-link class="nav-link" to="/services">Usluge</router-link>
        <router-link class="nav-link" to="/literatures">Poslovi</router-link>
        <router-link class="nav-link" to="/contact">Kontakt</router-link>
      </b-navbar-nav>

 
    </b-collapse>
  </b-navbar>
</template>
<style>
  nav{
    border: 1px solid #555555;
    padding: 0 20px!important;
    top: 25px !important;
    background-color: #FFFFFF;
  }
  .nav-brand{
    border-right: 1px solid #555555;
    padding: 15px 10px 20px 10px !important;
  }
  .nav-link{
    padding: 0 15px !important;
    font-size: 16px;
    margin-bottom: 12px;
  }
@media only screen and (max-width: 769px) {
  .nav-brand{
    border-right: none;
  }
}
</style>