<template>
    <div class="space-above-view">
        <div class="col-lg-10 m-auto">
            <div class="row">
                <div class="text-div col-lg-12">
                        <h1>KONTAKTIRAJTE NAS</h1>
                        <h4>
                            Za upite, koristite naš kontakt obrazac ili nas pozovite direktno na +381 63 321 125
                        </h4>
                </div>
            </div>
            <div class="row">
                <ContactForm/>
            </div>

        </div>
    </div>
</template>
<script>
    import ContactForm from '../components/ContactForm'

    export default {
        components:{
            ContactForm
        }
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