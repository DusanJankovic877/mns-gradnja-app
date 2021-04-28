<template>
    <footer class="col-lg-12">
      <div class="row">
        <div class="col-lg-6 ">
          <div class="row ">
            <div class="m-auto">
              <div class="row">
              <img class="logo-footer" src="../../assets/MNS_logo.png" alt="" style="height:50px; width: 75px;">
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
</template>
<script>
export default {
    data() {
       return{

       } 
    },
}
</script>
<style>
footer{
  margin-top: 100px;
  margin-bottom: 100px;
  border-top: 1px solid #555555;
  border-bottom: 1px solid #555555;
}
.logo-footer{
    margin: auto;
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