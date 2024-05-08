<script lang="ts">
  import plan from "@assets/images/plan-villa.png";
  import bedrooms from "@assets/images/chambre_3.jpeg";
  import Carousel from "@components/Carousel.svelte";
  import IconArrowLeft from "@assets/svgs/icons/arrow-left.svg?component";
  export let detailsImages: any = [plan, bedrooms];
</script>

<div class="flex w-full">
  <Carousel perPage={1} dots={false}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div slot="prev" class="relative">
      <IconArrowLeft
        width="32"
        class="stroke-purple-secondary !w-auto !h-auto stroke-9 cursor-pointer top-1/2 !-translate-y-1/2 -left-10 transition-transform absolute"
      />
    </div>
    {#each detailsImages as image}
      <img src={image} alt="" />
    {/each}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div slot="next" class="relative">
      <IconArrowLeft
        width="32"
        class="stroke-purple-secondary !w-auto !h-auto !rotate-180 stroke-9 cursor-pointer top-1/2 !-translate-y-1/2 -right-10 transition-transform absolute"
      />
    </div>
  </Carousel>
</div>
