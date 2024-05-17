<script lang="ts">
  import IconArrowLeft from "@assets/svgs/icons/arrow-left.svg?component";
  import { slidy } from "@slidy/core";
  import LordIcon from "@components/atoms/LordIcon.svelte";

  const items = [
    {
      name: "Living room",
    },
    {
      name: "Kitchen",
    },
    {
      name: "Bedroom 1",
    },
    {
      name: "Bedroom 2",
    },
    {
      name: "Bedroom 3",
    },
    {
      name: "Bathroom 1",
    },
    {
      name: "Outdoor",
    },
    {
      name: "Bathroom 3",
    },
    {
      name: "Exterior",
    },
    {
      name: "Gym",
    },
  ];

 export let currentAmenities:string = "";
 let active = 1;
$:{
  items.forEach((item, id)=>{
    if(id === active){
      currentAmenities=item.name
    }
  })
}
  const getIconName = (name: string) => {
    const lowerCaseName = name.toLowerCase();
    
    switch (true) {
        case lowerCaseName.includes('bedroom'):
            return 'bedroom';
        case lowerCaseName.includes('kitchen'):
            return 'kitchen';
        case lowerCaseName.includes('outdoor'):
            return 'outdoors';
        case lowerCaseName.includes('living'):
            return 'livingroom';
        default:
            return 'extra-rooms';
    }
};

  function onMove(e: any) {
    index = e.detail.index;
  }

  let gap = 0,
    index = 0,
    wrap,
    outerWidth: number;

  $: width = outerWidth >= 960 ? "94px" : outerWidth >= 460 ? "25%" : "50%";
  $: gap = outerWidth >= 960 ? 40 : 0;
</script>

<svelte:window bind:outerWidth />

<div
  class="md:!max-w-[760px] lg:!max-w-[920px] plan-selector w-screen md:w-full md:p-0 relative"
>
  <section style="--gap: {gap}px; --width: {width};" bind:this={wrap}>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="slider"
      use:slidy={{
        index,
        loop: false,
        vertical: false,
        duration: 450,
        clamp: 0,
        indent: 0,
        snap: "start",
        gravity: 1.2,
      }}
      on:move={onMove}
      >
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      {#each items as item, i}
        <div class="block flex flex-col items-center gap-4 text-center">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            class="{i === active
              ? 'bg-gradient-to-r from-purple-dark to-purple-darker'
              : 'bg-white/20'} text-white rounded-full p-4"
            on:click={() => (active = i)}
            >
            <!-- <svelte:component
              this={getIconComponent(item.icon)}
              class="stroke-white stroke-7 md:!w-[52px] md:!h-[52px] !w-[32px] !h-[32px]"
            /> -->
            <LordIcon name="{getIconName(item.name)}" size="52" class="{i === active ? 'text-white' : 'text-purple-light'} md:flex hidden" />
            <LordIcon name="{getIconName(item.name)}" size="32" class="{i === active ? 'text-white' : 'text-purple-light'} md:hidden" />
          </div>

          <span class="text-white text-sm font-semibold">{item.name}</span>
        </div>
      {/each}
    </div>
  </section>

  <button
    on:click={() => index--}
    class="-left-10 absolute top-1/2 !-translate-y-1/2 z-10 hover:scale-110"
  >
    <IconArrowLeft
      width="32"
      class="stroke-purple-secondary cursor-pointer !w-auto !h-auto stroke-9 "
    />
  </button>
  <button
    on:click={() => index++}
    class="-right-10 absolute top-1/2 !-translate-y-1/2 z-10  hover:scale-110"
  >
    <IconArrowLeft
      width="32"
      class="stroke-purple-secondary cursor-pointer !w-auto !h-auto stroke-9 !-rotate-180"
    />
  </button>
</div>

<style>
  .plan-selector {
    max-width: calc(100vw - 140px);
  }
  .slider {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: var(--gap);
    width: 100%;
    height: 100%;
    min-width: 0;
    position: relative;
  }
  .slider .block {
    flex: 1 0 var(--width);
    width: var(--width);
    max-width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
  }
</style>
