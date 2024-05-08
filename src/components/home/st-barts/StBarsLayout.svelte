<script lang="ts">
  import StBarsCategories from "./StBarsCategories.svelte";
  import StBarsInfo from "./StBarsInfo.svelte";
  import IconPlane from "@assets/svgs/illustrations/14illustration.svg?component"
</script>

<div class="pb-60 lg:pb-96 md:pt-20 relative">
  <StBarsInfo />
  <StBarsCategories />
  <IconPlane class="stroke-purple-light absolute z-10 lg:left-[5%] -left-20 -bottom-16 lg:bottom-8 lg:w-[782px] w-[414px]" />
</div>
