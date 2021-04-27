<template>
<div class="home">
  <div class="col-lg-10 m-auto">
    <div class="row">
      <ImageWithContact/>
    </div>
    <div class="row">
        <div class="services col-lg-12">
          <h2>NAŠE USLUGE</h2>
        </div>
    </div>
    <ServicesComponent/> <!-- ROW INSIDE -->
  <div class="row">
    <button @click="handleServiceClick" class="more-about-services">
      <h2>
        Više o Uslugama
      </h2>
    </button>
  </div>
  <div class="row">
        <div class="works col-lg-12">
        <h2>NAŠE LITERATURE</h2>
    </div>
  </div> 
  <div class="row">
    <OurLiteratures/>
  </div>
  <div class="row">
    <button @click="handleLiteraturesClick" class="more-about-literatures"><h2>Više o Poslovima</h2></button>
  </div>



  </div><!--END OF FIRST COL-L-10 M-AUTO  -->
  <div class="col-lg-12">
    <Carousel/>
  </div>
  <div class="col-lg-10 m-auto">
    <div class="row">
      <ContactForm/>
    </div>


  </div><!-- END OF SECOND COL-LG-10 M-AUTO -->
</div>


</template>

<script>
// @ is an alias to /src
import ImageWithContact from '../components/ImageWithContact'
import ServicesComponent from '../components/ServicesComponent'
import OurLiteratures from '../components/OurLiteratures'
import Carousel from '../components/Carousel'
import ContactForm from '../components/ContactForm'
export default {
  name: 'Home',
  components: {
  ImageWithContact,
  ServicesComponent,
  OurLiteratures,
  Carousel,
  ContactForm
  },
  data(){
    return{

    }
  },
  methods:{
    handleServiceClick(){
      this.$router.push('/services');
    },
    handleLiteraturesClick(){
      this.$router.push('/literatures');
    }

  }
}
</script>

<style>
.services{
  margin-top: 20px !important;
  padding: 20px;
  text-align: left;
  border: 1px solid #555555 !important;
}

.more-about-services{
  width:100%;
  margin-top: 20px ;
  padding: 20px 0;
  color: #685555;
  background-color: #AAAAAA;
}
.works{
  margin-top: 20px !important;
  padding: 20px;
  text-align: left;
  border: 1px solid #555555 !important;
}

.more-about-literatures{
  width:100%;
  margin-top: 20px;
  padding: 20px;
  color: #685555;
  background-color: #AAAAAA;
}


</style>