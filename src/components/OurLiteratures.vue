<template>
    <div class="col-lg-4 work mt-4">
      <div class="image-work">
          <b-img class="img-work" src="bridge.png" alt=""></b-img>
      </div>
      <div class="work-description">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Labore laboriosam itaque assumenda, et mollitia hic, 
        </p>
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
.work{
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.work-description{
  background-color: #D5D5D5;
  text-align: center;
  padding: 15px 5px 5px 5px;
}
.img-work{
  width: 100%;
}
.img-work:hover{
    width:100%;
    height:100%;
    opacity:0.4;

}
</style>