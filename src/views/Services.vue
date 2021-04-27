<template>
    <div>
         <div class="col-lg-10 m-auto">
             <div class="row">
                <div class="services-heading col-lg-12">
                    <h1>NAŠE USLUGE</h1>
                    <p>Mns Gradnja Bau GmbH nudi širok spektar usluga</p>
                </div>

             </div>
            <ServiceComponent/>
        </div>
    </div>
</template>
<script>
import ServiceComponent from '../components/ServiceComponent'
export default {
    components:{
        ServiceComponent
    },
    data() {
        return{}   
    },
}
</script>
<style>
.our-services{
    width:100%;
    
}
.services-heading{
    border: 1px solid #555555;
    padding: 50px;
    margin-bottom: 20px !important;
}

</style>