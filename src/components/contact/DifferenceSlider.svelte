<script lang="ts">
  import welcoming from "@assets/images/femme-independante-financiere-achetant-nouvelle-maison.png";
  import transfer from "@assets/images/trois-amis-voyageant-ensemble-voiture.png";
  import services from "@assets/images/belle-serveuse-tenant-bouteille-champagne.png";
  import extra from "@assets/images/equipements.jpeg";
  import { slidy } from "@slidy/core";
  import { useModal } from "@components/Modal.svelte";
  import IconArrowLeft from "@assets/svgs/icons/arrow-left.svg?component";

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
    {
      name: "PERSONAL WELCOMING 1",
      url: welcoming,
      desc: "we welcome you UPON YOUR ARRIVAL ON THE ISLAND",
    },
    {
      name: "TRANSFER 1",
      url: transfer,
    },
    {
      name: "CONCIERGE SERVICES 1",
      url: services,
    },
    {
      name: "WELCOME GIFTS 1",
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

  //$: width = outerWidth >= 1600 ? "28%" : outerWidth > 960 ? "40%" : "55%";
  $: width = outerWidth >= 1600 ? "28%" : outerWidth > 960 ? "40%" : "55%";
  //$: width = outerWidth >= 960 ? "35%" : "100%";

  $: {console.log(index)}

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
    class="h-[300px] md:h-[700px] gap-0"
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
        indent: 1,
        snap: "center",
        gravity: 1.2,
      }}
      on:move={onMove}
      on:mousedown={() => (prevPosition = position)}
    >
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      {#each galleryCategories as category}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="block group relative" on:click={onClick}>
          <img src={category.url} alt="" class="object-cover h-full w-full" />
          <div class="absolute w-full h-1/2 left-0 bottom-0  bg-gradient-to-b from-[#00000000] to-[#000000]"></div>
          
          <div
            class="slide-info flex flex-col w-full justify-between absolute bottom-0 flex-wrap pl-4 md:pl-12 pb-8"
            >
            <span
              class="font-bold text-[20px] lg:text-[45px] text-white uppercase"
              >{category.name}</span
            >
            <span
              
              class="slide-descript text-[8px] overflow-hidden tracking-[2.5px] lg:text-[18px] text-white uppercase md:w-1/2"
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
    class=" {index!==galleryCategories.length-1?"block":"hidden"} bg-white/75 p-2 rounded-full right-4 absolute top-1/2 !-translate-y-1/2 z-10  hover:scale-110"
  >
    <IconArrowLeft
      width="32"
      class="stroke-purple-secondary cursor-pointer !w-auto !h-auto stroke-9 !-rotate-180"
    />
  </button>

</div>

<style>
  .slide-info:hover .slide-descript {
    max-height: 200px;
  }
  .slide-descript {
    max-height: 0;
      overflow: hidden;
      transition: max-height 1s ease;
  }
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
