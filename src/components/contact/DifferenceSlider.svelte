<script lang="ts">
  import welcoming from "@assets/images/femme-independante-financiere-achetant-nouvelle-maison.png";
  import transfer from "@assets/images/trois-amis-voyageant-ensemble-voiture.png";
  import services from "@assets/images/belle-serveuse-tenant-bouteille-champagne.png";
  import extra from "@assets/images/equipements.jpeg";
  import { slidy } from "@slidy/core";
  import { useModal } from "@components/Modal.svelte";

  const galleryCategories = [
    {
      name: "PERSONAL WELCOMING",
      url: welcoming,
      desc: "we welcome you UPON YOUR ARRIVAL ON THE ISLAND",
    },
    {
      name: "TRANSFER",
      url: transfer,
    },
    {
      name: "CONCIERGE SERVICES",
      url: services,
    },
    {
      name: "WELCOME GIFTS",
      url: extra,
    },
  ];

  const openGallery = () => {
    const modal = useModal({ backdropClose: true, size: "screen" });
  };

  let gap = 50,
    index = 0,
    position = 0,
    prevPosition = 0,
    wrap,
    outerWidth: number;

  $: width = outerWidth >= 1600 ? "28%" : outerWidth > 960 ? "40%" : "55%";

  function onMove(e: any) {
    index = e.detail.index;
    position = e.detail.position;
  }

  function onClick(e: any) {
    if (prevPosition === position) {
      openGallery();
    }
  }
</script>

<svelte:window bind:outerWidth />
<div class="flex py-20 justify-center flex-col relative z-10">
  <section
    class="h-[300px] md:h-[700px]"
    style="--gap: {gap}px; --width: {width};"
    bind:this={wrap}
  >
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
        snap: "center",
        gravity: 1.2,
      }}
      on:move={onMove}
      on:mousedown={() => (prevPosition = position)}
    >
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      {#each galleryCategories as category}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="block group" on:click={onClick}>
          <img src={category.url} alt="" class="object-cover h-full w-full" />
          <div
            class="flex flex-col w-full justify-between absolute bottom-0 flex-wrap pl-4 md:pl-12 pb-8"
          >
            <span
              class="font-bold text-[20px] lg:text-[45px] text-white uppercase"
              >{category.name}</span
            >
            <span
              class="text-[8px] tracking-[2.5px] lg:text-[18px] text-white uppercase md:w-1/2"
              >{category.desc ?? '' }</span
            >
          </div>
        </div>
      {/each}
    </div>
  </section>

  <nav class="flex gap-4 justify-center pt-4 md:hidden">
    {#if galleryCategories.length > 0}
      {#each galleryCategories as dot, i}
        <button
          on:click={() => (index = i)}
          class="{i === index
            ? 'bg-purple-light'
            : 'bg-gray-disabled'} w-2.5 h-2.5 rounded-full cursor-pointer"
        ></button>
      {/each}
    {/if}
  </nav>
</div>

<style>
  .slider {
    list-style: none;
    overflow-y: visible !important;
    overflow-x: hidden !important;
    margin: 0;
    padding: 0;
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
    box-shadow: 0px 4px 14px 0px #00000080;
    cursor: pointer;
  }
</style>
