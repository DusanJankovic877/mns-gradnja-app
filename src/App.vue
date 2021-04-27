<template>
  <div id="app">
    <Navbar class=""/>
    <router-view class="view"/>
        <footer class="col-lg-12">
      <div class="row">
        <div class="col-lg-6 ">
          <div class="row ">
            <div class="m-auto">
              <div class="row">

              <a href="#">logo</a>
              <ul>
                <li>AR Akkord Bau GmbH </li>
                <li>Rainweg 5</li>
                <li>8852 Altendorf</li>
                <li>info@ar-akkord.ch</li>
                <li>+41 79 700 49 24</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 m-auto">
          <div class="m-auto">
            <font-awesome-icon class="fa-icon" :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
            <font-awesome-icon class="fa-icon" :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
            <font-awesome-icon class="fa-icon" :icon="{ prefix: 'fab', iconName: 'linkedin' }"/>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import Navbar from './components/layouts/Navbar'
export default {
  components:{
    Navbar
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
  margin-top:100px !important;
}
button{
  border-radius: 0 !important;
  border: none;
  font-family: "Barlow-Regular";
}
footer{
  margin-top: 100px;
  margin-bottom: 100px;
  border-top: 1px solid #555555;
  border-bottom: 1px solid #555555;
}

ul li{
  list-style: none;
}
.fa-icon{
  height: 50px; width: 50px !important;
  background-color:white !important; color: #212529 !important;
  margin: 15px;
}
</style>
