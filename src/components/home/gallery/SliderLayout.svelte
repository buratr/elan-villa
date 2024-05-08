<script lang="ts">
  import SliderInfo from "./SliderInfo.svelte";
  import VillasSlider from "./VillasSlider.svelte";
  import VillasCTA from "./VillasCTA.svelte";
  import BGurl from "@assets/images/VillasSliderBG.png";
  import VillIlustration from "@assets/images/villa-one-line-parme.png";
  import VillVector from "@assets/images/Vector63.png";
</script>

<div class="bg-cover bg-center pb-96 relative" style="background-image: url({BGurl});">
  <SliderInfo />
  <VillasSlider />
  <VillasCTA />
  <div class="absolute left-0 -bottom-12 flex overflow-hidden">
    <img src="{VillIlustration}" alt="villa one line">
    <img src="{VillVector}" class="pb-[111px] -ml-[3px] object-cover object-left" alt="villa one line">
  </div>
</div>