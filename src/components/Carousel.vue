<template>
    <b-carousel
        class="row"
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        fade
        controls
        indicators
        style="margin-top: 20px; text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
        <!-- Text slides with image -->
        <b-carousel-slide
        content-visible-up="sm"
          img-src="malter.jpg"
        >
        <div class="carousel-text">
          <h1>MNS-Gradnja DOO</h1>
          <h4>Izgradnja kod nas znači porodična gradnja za budućnost. Oni koji grade budućnost grade pouzdano, visoko, kvalitetno i pametno.</h4>

        </div>
        </b-carousel-slide>

        <b-carousel-slide
          img-src="silouetes.jpg"
          content-visible-up="sm"
        >
        <div class="carousel-text">
          <h1>MNS-Gradnja DOO</h1>
          <h4>Sve iz jednog izvora! Zalažemo se za tačnost, kvalitet i pouzdanost.</h4>
        </div>
        </b-carousel-slide>

    </b-carousel>
</template>
<script>
export default {
    data() {
    return{
        slide: 0,
        sliding: null
    } 
    },
      methods:{

    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  }
}
</script>
<style>

.carousel-caption h4{
  font-size: 20px;
}
#carousel-1{
  margin-bottom: 25px !important;

}
.carousel-inner{
    background: rgba(0, 0, 0, 0.5) !important;

}
.carousel-inner{
    max-height: 800px !important;
}
.carousel-caption{
    top: 61% !important;
    transform: translateY(-50%) !important;
    margin-top: 0px;
}
.carousel-text{
  top:0;
  padding: 20px;
  margin-bottom: 3000px !important;
  background: rgba(0, 0, 0, 0.5) !important;

}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  height: 90px !important;
  width: 90px !important;
}
@media only screen and (max-width: 769px) {
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    height: 60px !important;
    width: 60px !important;
  }
}
@media only screen and (max-width: 769px) {
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    height: 40px !important;
    width: 40px !important;
  }
}

</style>