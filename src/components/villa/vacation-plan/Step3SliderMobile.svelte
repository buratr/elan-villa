<script context="module">
  import { onMount } from "svelte";
  import Hammer from "hammerjs";
</script>

<script lang="ts">
  import Plane from "@assets/svgs/icons/plane-2.svg?component";
  import Transfer from "@assets/svgs/icons/car-site-2.svg?component";
  import Gift from "@assets/svgs/icons/gift.svg?component";
  import Concierge from "@assets/svgs/icons/waiter-restaurant.svg?component";
  import Croissant from "@assets/svgs/icons/croissant.svg?component";
  import GiftCard from "@assets/svgs/icons/gift-card.svg?component";
  import Broom from "@assets/svgs/icons/broom.svg?component";
  import Service from "@assets/svgs/icons/male-customer-service.svg?component";
  import LordIcon from "@components/atoms/LordIcon.svelte";
  import Button from "@components/atoms/Button.svelte";
  import IconBag from "@assets/icons-json/725-suitcase-travel-baggage-luggage.rough.json?url";
  import IconPeace from "@assets/icons-json/1939-peace-sign.rough.json?url";
  import IconDiamond from "@assets/icons-json/724-diamond-luxury-precious.rough.json?url";

  let activeIndex = 1;
  let sliderElement: HTMLDivElement;
  let active: number | undefined = undefined;

  const slides = [
    {
      id: 1,
      content: "-50 % off services fees",
      title: "Casual trip",
      icon: IconBag,
    },
    {
      id: 2,
      content: "-25 % off services fees",
      title: "Travel peacefully",
      icon: IconPeace,
    },
    {
      id: 3,
      content: "",
      title: "Premium holiday",
      icon: IconDiamond,
    },
    // Add more items as needed
  ];
  $: getClass = (index: number) => {
    const distance = index - activeIndex;
    const position =
      distance === 0
        ? "active"
        : distance === -1
          ? "prev-1"
          : distance === 1
            ? "next-1"
            : "";
    return position;
  };

  const handleArrowClick = (direction: "prev" | "next") => {
    const dirFactor = direction === "prev" ? -1 : 1;
    const newIndex = activeIndex + dirFactor;

    if (newIndex >= 0 && newIndex < slides.length) {
      activeIndex = newIndex;
    }
  };

  onMount(() => {
    const dir = document.documentElement.dir;
    const swipeHandler = new Hammer(sliderElement);

    swipeHandler.on("swipeleft", () => {
      handleArrowClick(dir === "rtl" ? "prev" : "next");
    });

    swipeHandler.on("swiperight", () => {
      handleArrowClick(dir === "rtl" ? "next" : "prev");
    });
  });
</script>

<div class="overflow-hidden pt-10">
  <div class="slider-container">
    <div class="slider" id="slider" bind:this={sliderElement}>
      {#each slides as slide, index (slide)}
        <div class={`slide ${getClass(index)}`}>
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div
            class="{active === slide.id
              ? 'active-select'
              : ''} flex relative flex-col text-center justify-center rounded-[30px] max-w-[260px] pt-16 bg-white sm:bg-white/80 shadow-select px-10 pb-6 gap-4 items-center"
            on:click={() => (active = index + 1)}
          >
            <div
              class="p-4 absolute bg-gradient-to-r from-purple-dark to-purple-darker rounded-full -top-[55px]"
            >
              <LordIcon
                src={slide.icon}
                size="91"
                class="text-white"
              />
            </div>
            <span
              class="text-[30px] font-athena {active === slide.id
                ? 'text-white'
                : ''}">{slide.title}</span
            >
            <span
              class="text-purple text-sm {active === slide.id
                ? 'text-purple-light'
                : ''}">{slide.content}</span
            >
            <Button style={active === slide.id ? "primary" : "outlined"}
              >Select</Button
            >
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="postcss">
  .slider-container {
    @apply w-auto m-auto relative h-[440px];
  }

  .slider-container .slider {
    @apply md:w-[85%] w-full h-full m-auto relative;
  }

  .slider-container .slider .slide {
    @apply flex justify-center items-baseline;
    @apply md:w-[80%] w-[60%] h-[320px] absolute left-1/2 top-1/2;
    transform: translate3d(5000%, 0%, 0) scale3d(0.4, 0.4, 1);
    opacity: 0;
    transition:
      transform 0.2s ease-in-out 0s,
      z-index 0s ease-in-out 0.1s;
  }

  .slider-container .slider .slide.prev-1 {
    transform: translate3d(-140%, -55%, 0) scale(0.8);
    z-index: 2;
    opacity: 0.5;
  }

  .slider-container .slider .slide.next-1 {
    z-index: 2;
    transform: translate3d(40%, -55%, 0) scale(0.8);
    opacity: 0.5;
  }

  .slider-container .slider .slide.active {
    z-index: 3;
    opacity: 1;
    transform: translate3d(-50%, -50%, 0) scale3d(1, 1, 1);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .active-select {
    background: radial-gradient(
        49.31% 85.29% at 9.85% 4.97%,
        rgba(134, 134, 218, 0.6) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(0deg, #000023, #000023);
  }
</style>
