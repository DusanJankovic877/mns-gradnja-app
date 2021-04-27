<template>
    <div class="form col-lg-12">
      <div class="row">
        <div class="left col-lg-4" >
        <div class="contact-text col-lg-9">
          <h2>KONTAKTIRAJTE NAS</h2>
          <p>
            Za upite ili pitanja, koristite obrazac za kontakt ili nas pozovite na +41 79 700 49 24
          </p>
        </div>
        </div>
        <div class="right col-lg-8" >
        <b-form @submit="onSubmit" v-if="show" class="contact-form col-lg-8">
          <!-- NAME -->
            <b-form-group id="input-name" label="Vaše Ime:" label-for="input-name">
              <b-form-input id="input-name" v-model="form.name" placeholder="Petar" required></b-form-input>
            </b-form-group>
          <div class="row">
            <div class="col-lg-6">
              <!-- EMAIL -->
              <b-form-group id="input-email" label="Email adresa:" label-for="input-email">
                <b-form-input id="input-email" v-model="form.email" type="email" placeholder="petar@gmail.com"  required></b-form-input>
              </b-form-group>
            </div>
            <!-- TELEPHONE -->
            <div class="col-lg-6">
              <b-form-group id="input-telephone"  label="Telefon:" label-for="input-telephone">
                <b-form-input id="input-telephone" v-model="form.telephone" type="telephone" placeholder="+38163123456" required></b-form-input>
              </b-form-group>
            </div>
          </div>
          <b-form-group id="input-message" label="Poruka:" label-for="input-message">
            <b-form-textarea id="input-message" v-model="form.message" rows="3"  placeholder="Unesite poruku" required></b-form-textarea>
          </b-form-group>
          <div class="col-lg-12 ">
            <div class="row">
              <b-button class="contact-form-button ml-auto" type="submit">Pošaljite</b-button>
            </div>
          </div>
        </b-form>
        </div>
        </div>
    </div>  
</template>
<script>
export default {
    data() {
       return{
        form: {
            email: '',
            name: '',
            telephone: '',
            message: ''
        },
        show: true
       } 
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        }
    }
}
</script>
<style>
.form{
  margin-top: 20px !important;
  border: 1px solid #555555;
}
.left{
    border-right: 1px solid #555555;
    padding-top: 50px;
    padding-left: 100px !important;
    text-align: left;
}
.right{
    padding: 50px 0px 0px 300px;
  
}
.contact-form input, textarea{
  border-radius: 0 !important;
  border: none !important;
  border-bottom: 1px solid #555555 !important;
}
form{
  margin-left: 150px;
}


.contact-form-button{
  background-color: #C9C9C9;
  border: none !important;
  color:#5E5E5E;
}
.contact-form-button:hover {
  background-color: black;
  border: none !important;
}
@media only screen and (max-width: 1024px) {
  form{
  margin-left:60px;
}
.left{
   
    padding-top: 50px;
    padding-left: 0px !important;
 
}
}
@media only screen and (max-width: 600px) {
form{
  margin-left:00px;
}
.left{
  
    padding-top: 50px;
    padding-left: 0px !important;

}
}
</style>