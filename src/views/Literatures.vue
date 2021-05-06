<template>
    <div class="space-above-view">
        <div class="col-lg-10 m-auto">
            <div class="row">
                <div class="liteartures-heading col-lg-12">
                    <h1>GRADITELJI</h1>
                    <h4>Možete se osloniti na nas</h4>
                </div>
                <OurLiteratures/>
            </div>
        </div>
    </div>
</template>
<script>
import OurLiteratures from '../components/OurLiteratures'
export default {
    components:{
        OurLiteratures
    }

}
</script>
<style>
.liteartures-heading{
    border: 1px solid #555555;
    padding: 50px;
    margin-bottom: 80px !important;
}
</style>