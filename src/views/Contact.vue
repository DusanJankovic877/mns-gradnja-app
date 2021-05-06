<template>
    <div class="space-above-view">
        <div class="col-lg-10 m-auto">
            <div class="row">
                <div class="text-div col-lg-12">
                    <div class="col-lg-6">
                        <h2>KONTAKTIRAJTE NAS</h2>
                        <h4>
                            Für Anfragen nutzen Sie bitte unser Kontaktformular oder rufen Sie uns direkt an unter +41 79 700 49 24
                        </h4>
                    </div>
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
    text-align: left;
}
</style>