<script lang="ts">
  import Siema from "siema";
  import { onMount, createEventDispatcher } from "svelte";
  
  export let sliderFull = false;

  export let perPage = 3;
  export let perPageSlide = 1
  export let loop = true;
  export let autoplay = 0;
  export let duration = 200;
  export let easing = "ease-out";
  export let startIndex = 0;
  export let draggable = true;
  export let multipleDrag = true;
  export let dots = true;
  export let controls = true;
  export let threshold = 20;
  export let rtl = false;
  export let dotsClassList = "";
  export let currentIndex = startIndex;

  let siema: HTMLElement;
  let controller: any = null;
  let timer: NodeJS.Timer;
  let totalDots: number = 0;
  const dispatch = createEventDispatcher();

  $: draggable = totalDots > 1;
  
  $: pips = controller ? controller.innerElements : [];
  $: if (controller && controller.innerElements.length) {
    totalDots = controller
      ? Math.ceil(controller.innerElements.length / perPage)
      : 0;
  }

  export const InitSlider = () => {
    controller = new Siema({
      selector: siema,
      perPage: typeof perPage === "object" ? perPage : Number(perPage),
      loop,
      duration,
      easing,
      startIndex,
      draggable,
      multipleDrag,
      threshold,
      rtl,
      onChange: handleChange,
    });

    if (autoplay) {
      timer = setInterval(right, autoplay);
    }

    return () => {
      autoplay && clearInterval(timer);
      controller.destroy();
    };
  };

  export const isDotActive = (
    currentIndex: number,
    dotIndex: number
  ): boolean => {
    if (currentIndex < 0) currentIndex = pips.length + currentIndex;
    return (
      currentIndex >= dotIndex * perPage &&
      currentIndex < dotIndex * perPage + perPage
    );
  };

  export const left = (): void => {
    controller.prev(perPageSlide);
  };

  export const right = (): void => {
    controller.next(perPageSlide);
  };

  export const go = (index: number): void => {
    controller.goTo(index);
  };

  export const pause = (): void => {
    clearInterval(timer);
  };

  export const resume = (): void => {
    if (autoplay) {
      timer = setInterval(right, autoplay);
    }
  };

  const handleChange = (): void => {
    currentIndex = controller.currentSlide;
    dispatch("change", {
      currentSlide: controller.currentSlide,
      slideCount: controller.innerElements.length,
    });
  };

  const resetInterval = (
    node: HTMLElement,
    condition: number | boolean
  ): { destroy(): void } => {
    const handleReset = (event: Event): void => {
      pause();
      resume();
    };

    if (condition) {
      node.addEventListener("click", handleReset);
    }

    return {
      destroy() {
        node.removeEventListener("click", handleReset);
      },
    };
  };

  onMount(() => {
    InitSlider();
  });

  $: if (perPage) {
    if (controller) {
      controller.destroy({ restoreMarkup: true }, InitSlider);
    }
  }
  //$: ({ class: classList, ...rest } = $$props);
</script>

<div class="relative w-full justify-center items-center {sliderFull?'h-full':''}">
  <div class="slides {sliderFull?'h-full':''}" bind:this={siema}>
    <slot />
  </div>
  {#if controls && totalDots > 1}
    <button
      class="left-0 absolute top-1/2 w-full -translate-y-1/2"
      on:click={left}
      use:resetInterval={autoplay}
      aria-label="left"
    >
      <slot name="prev" />
    </button>
    <button
      class="right-0 absolute top-1/2 w-full -translate-y-1/2"
      on:click={right}
      use:resetInterval={autoplay}
      aria-label="right"
    >
      <slot name="next" />
    </button>
  {/if}
  {#if dots && totalDots > 1}
    <div class="flex gap-4 justify-center pt-4 {dotsClassList}">
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      {#each Array(totalDots) as _, i}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
          on:click={() => go(i * perPage)}
          class="{isDotActive(currentIndex, i)
            ? 'bg-purple-light'
            : 'bg-gray-disabled'} w-2.5 h-2.5 rounded-full cursor-pointer"
        ></div>
      {/each}
    </div>
  {/if}
</div>

<style lang="postcss">
  .slider-fuul {
    @apply  h-full;
  }

</style>
