<script lang="ts">
  import Carousel from "@components/Carousel.svelte";
  import IconArrowLeft from "@assets/svgs/icons/arrow-left.svg?component";
  import LordIcon from "@components/atoms/LordIcon.svelte";

  export let villa: any = {};
  let currentIndex = 0;

  $: ({ class: classList, ...rest } = $$props);
</script>

<div class={classList}>
  <Carousel perPage={1} dots={false} bind:currentIndex>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div slot="prev" class="">
      <div
        class="p-1 group bg-white rounded-full top-1/2 !-translate-y-1/2 left-10 transition-transform absolute hover:scale-105 active:scale-110"
      >
        <IconArrowLeft
          width="32"
          class="stroke-purple-secondary !w-auto !h-auto stroke-9 cursor-pointer"
        />
      </div>
    </div>
    {#each villa.villas as item}
      <img src={item.imageSrc} alt="Villa" class="" />
    {/each}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div slot="next" class="">
      <div
        class="p-1 group bg-white rounded-full top-1/2 !-translate-y-1/2 right-10 transition-transform absolute hover:scale-105 active:scale-110"
      >
        <IconArrowLeft
          width="32"
          class="stroke-purple-secondary !w-auto !h-auto !rotate-180 stroke-9 cursor-pointer transition-transform"
        />
      </div>
    </div>
  </Carousel>
  <div
    class="flex bg-light justify-between absolute top-0 w-full p-4 items-center"
  >
    <div class="flex">
      <span class="uppercase font-athena tracking-widest font-bold"
        >{villa.district}</span
      >
      <span class="tracking-wide font-light">
        - {villa.villas[currentIndex].title}</span
      >
    </div>
    <div
      class="p-1 bg-gradient-to-r from-purple-dark to-purple-darker rounded-full"
    >
      <LordIcon name="search" size="32" class="text-white" />
    </div>
  </div>
</div>
