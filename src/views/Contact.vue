<template>
    <div class="space-above-view">
        <div class="col-lg-10 m-auto">
            <div class="row">
                <div class="text-div col-lg-12">
                        <h1>KONTAKTIRAJTE NAS</h1>
                        <h4>
                            Za upite, koristite naš kontakt obrazac ili nas pozovite direktno na +41 79 700 49 24
                        </h4>
                </div>
            </div>
            <div class="row">
                <ContactForm/>
            </div>
            <div class="row">
                <GmapMap
                    class="col-lg-12"
                    :center='center'
                    :zoom='12'
                    style='margin-top: 20px !important; height: 600px;'
                />
            </div>
        </div>
    </div>
</template>
<script>
    import ContactForm from '../components/ContactForm'

    export default {
        components:{
            ContactForm
        },
        data() {
            return {
                center: { lat: 45.508, lng: -73.587 },
            }
        },
    }
</script>
<style>
.text-div{
    border: 1px solid #555555;
    padding: 50px;
    /* text-align: center; */
    margin-bottom: 80px !important;
}
@media only screen and (max-width: 769px) {
.right{
padding-bottom: 20px !important;
}
.left{
padding-bottom: 0 !important;
}
}
</style>