<script lang="ts">
  import IconArrowLeft from "@assets/svgs/icons/arrow-left.svg?component";
  import { slidy } from "@slidy/core";
  import { villas } from "@lib/top-locations/villas-slider";
  import Villa from "@components/all-villas/Villa.svelte";

  let gap = 50,
    index = 0,
    wrap,
    outerWidth: number;

  $: width = outerWidth >= 960 ? "35%" : "100%";

  //$: {console.log(index)}

  function onMove(e: any) {
    index = e.detail.index;
  }
</script>

<svelte:window bind:outerWidth />

<div class="flex flex-col pt-12 md:pt-20 pb-14 md:pb-24 relative">
  <h3
    class="font-athena text-[25px] md:text-[35px] text-gray-darker md:pb-16 pl-[50px]"
  >
    Similar properties
  </h3>
  <section
    style="--gap: {gap}px; --width: {width};"
    class="gap-0"
    bind:this={wrap}
  >
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="slider px-[50px] md:pl-[50px]"
      use:slidy={{
        index,
        loop: false,
        vertical: false,
        duration: 450,
        clamp: 0,
        snap: "center",
        indent: 1,
        gravity: 1.2,
      }}
      on:move={onMove}
      >
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      {#each villas as villa}
        <div class="block">
          <Villa light scrollable={false} {villa} />
        </div>
      {/each}
    </div>
  </section>
  <nav class="flex gap-4 justify-center pt-4 md:hidden">
    {#if villas.length > 0}
      {#each villas as dot, i}
        <button
          on:click={() => (index = i)}
          class="{i === index
            ? 'bg-purple-light'
            : 'bg-gray-disabled'} w-2.5 h-2.5 rounded-full cursor-pointer"
        ></button>
      {/each}
    {/if}
  </nav>

  <button
    on:click={() => index--}
    class=" {index>0?"block":"hidden"} bg-white/75 p-2 rounded-full left-4 absolute top-1/2 !-translate-y-1/2 z-10 hover:scale-110"
  >
    <IconArrowLeft
      width="32"
      class="stroke-purple-secondary cursor-pointer !w-auto !h-auto stroke-9 "
    />
  </button>
  <button
    on:click={() => index++}
    class=" {index!==villas.length-1?"block":"hidden"} bg-white/75 p-2 rounded-full right-4 absolute top-1/2 !-translate-y-1/2 z-10  hover:scale-110"
  >
    <IconArrowLeft
      width="32"
      class="stroke-purple-secondary cursor-pointer !w-auto !h-auto stroke-9 !-rotate-180"
    />
  </button>

</div>

<style>
  .slider {
    list-style: none;
    display: flex;
    gap: var(--gap);
    width: 100%;
    height: 100%;
    min-width: 0;
  }
  .slider .block {
    flex: 1 0 var(--width);
    width: var(--width);
    max-width: 100%;
    height: 100%;
    position: relative;
    background: whitesmoke;
    cursor: pointer;
  }
</style>
