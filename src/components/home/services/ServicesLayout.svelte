<script lang="ts">
  import ServicesInfo from "./ServicesInfo.svelte";
  import ServicesSlider from "./ServicesSlider.svelte";
  import ServicesSliderMobile from "./ServicesSliderMobile.svelte";
  import ServicesSScrollMob from "./ServicesScrollMob.svelte"
</script>

<div class="md:pb-40 -mb-24">
  <ServicesInfo />
  <div class="md:block hidden">
    <ServicesSlider />
  </div>
  <div class="md:hidden">
    <!-- <ServicesSliderMobile /> -->
    <ServicesSScrollMob />
  </div>
</div>
