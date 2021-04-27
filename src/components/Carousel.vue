<template>
    <b-carousel
        class="row"
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        :fade="fade"
        controls
        indicators
        background="#ababab"
        style="margin-top: 20px; text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
        <!-- Text slides with image -->
        <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
        </b-carousel-slide>
    </b-carousel>
</template>
<script>
export default {
    data() {
    return{
        slide: 0,
        sliding: null,
        fade: true
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
.carousel-inner{
    max-height: 800px !important;

}
.carousel-caption{
    top: 61% !important;
    transform: translateY(-50%) !important;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  height: 90px !important;
  width: 90px !important;
}
</style>