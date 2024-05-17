<script lang="ts">
  import PlansBG from "@assets/background/amenitiesbg.svg";
  import colorblobs from "@assets/background/colorblobs.png";
  import PlanSelector from "./PlanSelector.svelte";
  import PlanDetails from "./PlanDetails.svelte";

  console.log(PlansBG);

let currentAmenities:string
</script>

<div
  class="bg-villa-plans flex relative bg-cover"
  id="plans"
>
<img src="{PlansBG}" alt="" class="-z-10 absolute w-full h-full object-cover">
  <div
    style="background-image: url({colorblobs}); background-size: 35%; background-position-y: 25%;"
    class="color-blobs -left-1/3 md:left-0"
  ></div>
  <div class="flex flex-col relative z-10 items-center w-full mt-[30rem] md:mt-[35rem]">
    <div class="flex flex-col text-center pb-10 md:pb-20 px-16 md:px-0">
      <h2
        class="uppercase tracking-[4px] font-medium text-purple-light text-xs md:text-base"
      >
        inside close-up
      </h2>
      <h2 class="text-[45px] md:text-[60px] text-white font-athena">
        Plans & amenities
      </h2>
    </div>
    <PlanSelector 
    bind:currentAmenities={currentAmenities}
    />

    <PlanDetails currentAmenities={currentAmenities}/>
  </div>
</div>

<style>
  .color-blobs {
    @apply absolute w-full h-full bg-contain -top-1/4 bg-no-repeat;
  }
</style>
