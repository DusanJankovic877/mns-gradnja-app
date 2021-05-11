<template>

    <div class="row services-row">
        <router-link class="malter col-lg-4" to="/plastering">
            <div class="glyphicon">
                <p>gluphicon</p>
            </div>
            <div class="title">
                <h3>Mašinski malter i gletovanje</h3>
            </div>
            <div class="description">
                <p>Malterisanje od A-Z Planiranje, savetovanje troškova i primena</p>
            </div>
        </router-link>

        <router-link class="malter col-lg-4" to="/liner">
            <div class="glyphicon">
                <p>gluphicon</p>
            </div>
            <div class="title">
                <h3>Izrada košuljice</h3>
            </div>
            <div class="description">
                <p>Košuljica planiranje od A-Z , savetovanje troškova i primena</p>
            </div>
        </router-link>
          
        <router-link class="malter col-lg-4" to="/painting">
            <div class="glyphicon">
                <p>gluphicon</p>
            </div>
            <div class="title">
                <h3>Molersko Farbarski radovi</h3>
            </div>
            <div class="description">
                <p>Molersko Farbarski radovi planiranje od A-Z, savetovanje troškova i primena</p>
            </div>
        </router-link>
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
    .malter{
        color: #2C3E50 !important;
        
    }
    .malter:hover{
       background: rgba(0, 0, 0, 0.1) !important;
       text-decoration: none !important;
    }

    .malter:first-child{
        border-right: 0 !important;
    }
    .service3{
         border-left: 0 !important;
    }

    .malter:last-child{
        border-left: 0 !important;
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