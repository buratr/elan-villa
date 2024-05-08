<script lang="ts">
  import Carousel from "@components/Carousel.svelte";
  import IconCircle from "@components/atoms/IconCircle.svelte";
  import PopularBadge from "@components/all-villas/PopularBadge.svelte";
  import { goto } from "$app/navigation";
  import LordIcon from "@components/atoms/LordIcon.svelte";

  export let villa: any = {};
  export let scrollable = true;
  export let light = false;
  let index = 0,
    position = 0,
    prevPosition = 0,
    wrap;

  function onMove(e: any) {
    index = e.detail.index;
    position = e.detail.position;
  }

  function onClick(e: any) {
    if (prevPosition === position) {
      goto("/villa/blanc-bleu");
    }
  }

  let liked = false;
  let flash = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="relative cursor-pointer">
  <div
    class="pt-4 md:hidden flex {light ? 'text-black' : 'text-purple-light'} "
  >
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={() => goto("/villa/blanc-bleu")}>
      <span class="text-base">Villa</span>
      <span class="text-base font-semibold tracking-wide">{villa.title}</span>
    </div>
  </div>
  <div class="py-2 md:hidden {light ? 'text-black' : 'text-white'}">
    <span>{villa.location}</span>
  </div>
  <div class="relative">
    <Carousel
      perPage={1}
      dotsClassList="absolute bottom-16 left-1/2 -translate-x-1/2"
    >
      {#each villa.imageSrc as src}
        <img
          {src}
          alt={villa.title}
          class="w-full object-cover shadow-image md:h-[498px] h-[293px]"
        />
      {/each}
    </Carousel>
    <!-- svelte-ignore missing-declaration -->
    <!-- <section style="--width: 100%;" bind:this={wrap}>
      <div
        class="slider"
        use:slidy={{
          index,
          loop: false,
          vertical: false,
          duration: 300,
          clamp: 0,
          indent: 0,
          snap: "start",
          sensity: scrollable ? 0 : 1000,
          scrollable: scrollable,
          gravity: scrollable ? 1.2 : 2,
        }}
        on:move={onMove}
        on:mousedown={() => (prevPosition = position)}
      >
        {#each villa.imageSrc as src}
          <div class="block" on:click={onClick}>
            <img
              {src}
              alt={villa.title}
              class="w-full object-cover shadow-image md:h-[498px] h-[293px]"
            />
          </div>
        {/each}
      </div>
    </section>
    <nav class="flex gap-4 justify-center pt-4 absolute left-1/2 -translate-x-1/2 bottom-[10%]">
      {#if villa.imageSrc.length > 0}
        {#each villa.imageSrc as dot, i}
          <button
            on:click={() => (index = i)}
            class="{i === index ? 'bg-purple-light' : 'bg-gray-disabled'} w-2.5 h-2.5 rounded-full cursor-pointer"
          ></button>
        {/each}
      {/if}
    </nav> -->
    {#if villa.mostPopular}
      <PopularBadge />
    {/if}
    <div class="absolute top-6 right-8 flex-col gap-4 hidden md:flex">
      <IconCircle active={liked} on:click={() => (liked = !liked)}>
        <LordIcon
          name="like"
          size="32"
          class={liked
            ? "text-white group-hover:text-purple"
            : "text-purple group-hover:text-white"}
        />
      </IconCircle>
      <IconCircle active={flash} on:click={() => (flash = !flash)}>
        <LordIcon
          name="book-now"
          size="32"
          class={flash
            ? "text-white group-hover:text-purple"
            : "text-purple group-hover:text-white"}
        />
      </IconCircle>
    </div>
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="pt-4 justify-between hidden md:flex"
    on:click={() => goto("/villa/blanc-bleu")}
  >
    <div>
      <span class="text-2xl">Villa</span>
      <span class="text-xl font-semibold tracking-wide">{villa.title}</span>
    </div>
    <div>
      <span class="text-md pr-2">TOTAL</span>
      <span class="text-2xl font-bold border-b border-black tracking-wide"
        >{villa.price}</span
      >
    </div>
  </div>
  <div
    class="flex md:hidden justify-between {light
      ? 'text-black'
      : 'text-white'} py-2"
  >
    <div>
      <button on:click={() => (liked = !liked)}>
        <LordIcon
          name="like"
          size="32"
          class="{light ? 'text-purple-light' : 'text-white'} 
          {liked ? '!text-purple' : ''}"
        />
      </button>
      <button on:click={() => (flash = !flash)}>
        <LordIcon
          name="book-now"
          size="32"
          class="{light ? 'text-purple-light' : 'text-white'} 
          {flash ? '!text-purple' : ''}"
        />
      </button>
      <button>
        <LordIcon
          name="share"
          size="32"
          class={light ? "text-purple-light" : "text-white"}
        />
      </button>
    </div>
    <div>
      <span class="text-xs pr-2">TOTAL</span>
      <span
        class="text-base font-bold border-b {light
          ? 'border-black'
          : 'border-white'}  tracking-wide">{villa.price}</span
      >
    </div>
  </div>
  <div class="pt-2 hidden md:block">
    <span>{villa.location}</span>
  </div>
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
