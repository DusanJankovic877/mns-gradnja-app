<template>

    <div class="row services-row">
        <div class="malter col-lg-4">
            <div class="glyphicon">
            <p>gluphicon</p>
            </div>
            <div class="title">
            <h3>Mašinski Malter</h3>
            </div>
            <div class="description">
            <p>Malterisanje od A-Z Planiranje, savetovanje troškova i primena</p>
            </div>
        </div>
        <div class="malter col-lg-4">
            <div class="glyphicon">
            <p>gluphicon</p>
            </div>
            <div class="title">
            <h3>Košuljica</h3>
            </div>
            <div class="description">
            <p>Košuljica planiranje od A-Z , savetovanje troškova i primena</p>
            </div>
        </div>
        <div class="malter service3 col-lg-4">
            <div class="glyphicon">
            <p>gluphicon</p>
            </div>
            <div class="title">
            <h3>Mašinsko gletovanje</h3>
            </div>
            <div class="description">
            <p>Gletovanje planiranje od A-Z, savetovanje troškova i primena</p>
            </div>
  
        </div>       
        <div class="malter col-lg-4">
            <div class="glyphicon">
            <p>gluphicon</p>
            </div>
            <div class="title">
            <h3>Krečenje</h3>
            </div>
            <div class="description">
            <p>Krečenje planiranje od A-Z, savetovanje troškova i primena</p>
            </div>
  
        </div>     
        
        
   
    
    </div>
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
    .malter{
      
    border: 1px solid #555555 !important;
    /* margin: 25px 50px; */
    padding:70px 70px !important;
    }
    .malter:first-child{
        border-right: 0 !important;
    }
    .service3{
         border-left: 0 !important;
    }

    .malter:last-child{
        border-top: 0 !important;
    }
@media only screen and (max-width: 769px) {
    .malter:last-child{
        border-top: 0 !important;
    }
    .service3{
         border-top: 0 !important;
    }
    .malter:first-child{
        border-bottom: 0 !important;
    }
}
</style>