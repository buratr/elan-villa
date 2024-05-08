<script context="module">
  import { onMount } from "svelte";
  import Hammer from "hammerjs";
</script>

<script lang="ts">
  import { onDestroy } from "svelte";
  import { writable } from "svelte/store";
  import { villas } from "@lib/slider/villas-slider";
  import LordIcon from "@components/atoms/LordIcon.svelte";

  let activeIndex = 2;
  const slides = villas;
  let sliderElement: HTMLDivElement;

  // Autoplay interval store
  const autoplayInterval = writable<NodeJS.Timer | null>(null);

  $: getClass = (index: number) => {
    const distance = index - activeIndex;
    const position =
      distance === 0
        ? "active"
        : distance === -1 || distance === slides.length - 1
          ? "prev-1"
          : distance === -2 || distance === slides.length - 2
            ? "prev-2"
            : distance === 1 || distance === -slides.length + 1
              ? "next-1"
              : distance === 2 || distance === -slides.length + 2
                ? "next-2"
                : "";
    return position;
  };

  const handleArrowClick = (direction: "prev" | "next") => {
    const dirFactor = direction === "prev" ? -1 : 1;
    activeIndex = (activeIndex + dirFactor + slides.length) % slides.length; // Loop back to the beginning or end
  };

  const startAutoplay = () => {
    autoplayInterval.set(setInterval(() => handleArrowClick("next"), 5000));
  };

  const stopAutoplay = () => {
    const interval = $autoplayInterval;
    if (interval) {
      clearInterval(interval);
      autoplayInterval.set(null);
    }
  };

  onMount(() => {
    startAutoplay();

    const dir = document.documentElement.dir;
    const swipeHandler = new Hammer(sliderElement);

    swipeHandler.on("swipeleft", () => {
      handleArrowClick(dir === "rtl" ? "prev" : "next");
    });

    swipeHandler.on("swiperight", () => {
      handleArrowClick(dir === "rtl" ? "next" : "prev");
    });
  });

  onDestroy(() => {
    stopAutoplay();
  });
</script>

<div class="overflow-hidden">
  <div class="slider-container !mt-32">
    <div class="slider" id="slider" bind:this={sliderElement}>
      {#each slides as slide, index (slide)}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class={`slide ${getClass(index)}`}
          on:click={() =>
            getClass(index) === "prev-1"
              ? handleArrowClick("prev")
              : getClass(index) === "next-1"
                ? handleArrowClick("next")
                : false}
          on:mouseenter={stopAutoplay}
          on:mouseleave={startAutoplay}
        >
          <div
            class="flex flex-col md:flex-row gap-4 absolute w-full -top-24 md:-top-16 justify-between items-center"
          >
            <div class="info transition-all">
              <span
                class="text-white font-bold text-3xl tracking-widest uppercase"
                >Villa</span
              >
              <span class="text-purple-light font-amsterdam text-2xl"
                >{slide.title}</span
              >
            </div>
            <span
              class="text-white text-right tracking-widest font-medium uppercase info transition-all"
              >{slide.location}</span
            >
          </div>
          <img
            src={slide.imageSrc}
            alt={slide.title}
            class="h-full w-full object-cover rounded-[40px]"
          />
          <div
            class="p-2 bottom-4 right-4 absolute bg-gradient-to-r from-purple-dark to-purple-darker rounded-full hover:from-purple-light hover:to-purple-light info"
          >
            <LordIcon name="search" size="32" class="text-white" />
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="postcss">
  .slider-container {
    @apply w-auto m-auto relative h-[610px];
  }

  .slider-container .slider {
    @apply md:w-[85%] w-full h-full m-auto relative;
  }

  .slider-container .slider .slide {
    @apply inline-block md:w-[80%] w-[90%] h-[610px] absolute left-1/2 top-1/2;
    transform: translate3d(-50%, -50%, 0) scale3d(0.4, 0.4, 1);
    transition:
      transform 0.3s ease-in-out 0s,
      z-index 0.2s ease-in-out 0.1s;
  }

  .slider-container .slider .slide.prev-2 {
    @media screen and (max-width: 960px) {
      transform: translate3d(-75%, -50%, 0) scale3d(0.4, 0.4, 1);
    }
    transform: translate3d(-95%, -50%, 0) scale3d(0.4, 0.4, 1);
    z-index: 1;
    opacity: 0.5;
  }

  .slider-container .slider .slide.prev-1 {
    @media screen and (max-width: 960px) {
      transform: translate3d(-105%, -50%, 0) scale3d(0.6, 0.6, 1);
      opacity: 0.8;
    }
    transform: translate3d(-80%, -50%, 0) scale3d(0.6, 0.6, 1);
    z-index: 2;
    cursor: pointer;
  }

  .slider-container .slider .slide.next-1 {
    @media screen and (max-width: 960px) {
      opacity: 0.8;
      transform: translate3d(0%, -50%, 0) scale3d(0.6, 0.6, 1);
    }
    z-index: 2;
    transform: translate3d(-20%, -50%, 0) scale3d(0.6, 0.6, 1);
    cursor: pointer;
  }

  .slider-container .slider .slide.next-2 {
    @media screen and (max-width: 960px) {
      transform: translate3d(-25%, -50%, 0) scale3d(0.4, 0.4, 1);
    }
    z-index: 1;
    transform: translate3d(-5%, -50%, 0) scale3d(0.4, 0.4, 1);
    opacity: 0.5;
  }

  .slider-container .slider .slide.active {
    z-index: 3;
    transform: translate3d(-50%, -50%, 0) scale3d(1, 1, 1);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .slider-container .slider .slide:not(.active) .info {
    opacity: 0;
  }
</style>
