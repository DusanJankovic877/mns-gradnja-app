<template>
  <div class="image-container">
    <b-img src="construction-site.jpg" fluid alt="Responsive image"></b-img> 
    <div class="image-card col-sm-4">
      <div class="row">
        <div class="text">
        <h2>Da li želite da preuredite svoju imovinu ili planirate novu zgradu?</h2>
        </div>
      </div>

      <div class="row">
        <b-button @click="handleContactUs" class="image-contact-button col-lg-12" variant="secondary">
            Kontaktirajte nas >
        </b-button>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
    methods:{
        handleContactUs(){
            this.$router.push('/contact');
        }     
    }
}
</script>
<style>

.image-container{
  position: relative;
  display: inline-block;
  margin-top: 20px;
}
.image-card{
  top:15%;
  left:9%;
  position: absolute !important;
  display:block;
  background-color: white;
  border: 1px solid #555555;
  text-align: left !important;
    
}


.text{
  padding: 39px;
  background-color: white;
}
.image-contact-button{
    padding: 15px 0 !important;
    background-color: #C9C9C9 !important;
    border: none !important;
    color:#565656 !important;
    text-align: left !important;
    padding-left: 39px !important;
    font-size: 20px !important;
}

.image-contact-button:hover{
  color:white !important;
  background-color: rgb(86, 93, 100) !important;
}
@media screen and (max-width: 1025) {
    .image-card {
      width: 400px !important;
        top:0%;
    left:0%;
    position: static !important;
  }

  .text{
    padding: 0 !important;
  }



}
@media only screen and (max-width: 769px) {
  .image-contact-button{

    padding-left: 10px !important;

  }
}
@media only screen and (max-width: 600px) {
  .image-card {
        top:0%;
    left:0%;
    position: static !important;
  }
  .text{
    padding:10px;
  }
}
</style>