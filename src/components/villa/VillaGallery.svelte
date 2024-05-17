<script lang="ts">
  import chambre3 from "@assets/images/chambre3.png";
  import arrowWhite from "@assets/images/arrow-white.png";
  import outdoor from "@assets/images/piscine.jpeg";
  import indoor from "@assets/images/sejour-cuisine.jpeg";
  import bedrooms from "@assets/images/chambre_3.jpeg";
  import extra from "@assets/images/equipements.jpeg";
  import { slidy } from "@slidy/core";
  import { useModal } from "@components/Modal.svelte";
  import GalleryModal from "./gallery/GalleryModal.svelte";

  export let villa: any;

  const galleryCategories = [
    {
      name: "outdoor",
      url: outdoor,
    },
    {
      name: "indoor",
      url: indoor,
    },
    {
      name: "bedrooms",
      url: bedrooms,
    },
    {
      name: "extra",
      url: extra,
    },
  ];

  const galleryData = [
    {
      name: "living room",
      photo: [{ url: chambre3, description: "" }, { url: outdoor, description: "" }, { url: bedrooms, description: "" }],
    },
    {
      name: "kitchen",
      photo: [{ url: extra, description: "" }, { url: bedrooms, description: "" }, { url: outdoor, description: "" }],
    },
    {
      name: "Bedroom 1",
      photo: [{ url: indoor, description: "" }, { url: outdoor, description: "" }, { url: bedrooms, description: "" }],
    },
    {
      name: "Bedroom 2",
      photo: [{ url: outdoor, description: "" }, { url: indoor, description: "" },],
    },
    {
      name: "Bedroom 3",
      photo: [{ url: chambre3, description: "" }],
    },
    {
      name: "bathroom 1",
      photo: [{ url: chambre3, description: "" }],
    },
    {
      name: "bathroom 2",
      photo: [{ url: chambre3, description: "" }],
    },
    {
      name: "bathroom 3",
      photo: [{ url: chambre3, description: "" }],
    },
    {
      name: "EXTERIOR",
      photo: [{ url: chambre3, description: "" }],
    },
    {
      name: "GYM",
      photo: [{ url: chambre3, description: "" }],
    },
  ];

  const openGallery = () => {
    const modal = useModal({ backdropClose: true, size: "screen" });

    modal.open(GalleryModal, { galleryData });
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
      openGallery()
    }
  }
</script>

<svelte:window bind:outerWidth />
<div class="flex py-20 justify-center flex-col relative z-10" id="gallery">
  <div class="flex flex-col text-center pb-10 md:pb-20">
    <h2 class="uppercase tracking-[4px] font-medium text-xs md:text-base">
      blanc bleu photos
    </h2>
    <h2 class="text-[45px] md:text-[60px] text-purple font-athena">Gallery</h2>
  </div>
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
        snap: "center",
        gravity: 1.2,
      }}
      on:move={onMove}
      on:mousedown={() => (prevPosition = position)}
    >
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      {#each galleryCategories as category}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="slide-hover block group overflow-hidden" on:click={onClick}>
          <img
            src={category.url}
            alt={villa.title}
            class="object-cover h-full w-full transition-all"
          />
          <div
            class="flex w-full justify-between absolute bottom-0 flex-wrap pl-4 md:pl-12 pb-2 md:pb-8 items-center"
          >
            <span
              class="font-bold text-[20px] lg:text-[45px] text-white uppercase"
              >{category.name}</span
            >
            <img
              src={arrowWhite}
              class="w-[66px] lg:w-[120px] xl:w-[160px]"
              alt="arrow white"
            />
          </div>
        </div>
      {/each}
    </div>
  </section>

  <nav class="flex gap-4 justify-center pt-4 md:hidden">
    {#if villa.imageSrc.length > 0}
      {#each villa.imageSrc as dot, i}
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
  .slide-hover:hover img{
    scale: 1.1;
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
    overflow-y: visible !important;
    overflow-x: hidden !important;
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
