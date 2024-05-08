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
  import IconBroom from "@assets/icons-json/1701-broom.rough.json?url";
  import IconGift from "@assets/icons-json/1369-gift-card.rough.json?url";

  let activeIndex = 3;
  let sliderElement: HTMLDivElement;

  const slides = [
    {
      id: 1,
      content: "UPON YOUR ARRIVAL ON THE ISLAND",
      title: "Personal welcoming",
      icon: "meet-greet",
    },
    {
      id: 2,
      content: "FOLLOW US HEADING TO YOUR VILLA",
      title: "Transfer",
      icon: "escort",
    },
    {
      id: 3,
      content: "the best things to do in the island",
      title: "Welcome gifts",
      icon: "welcome-gift",
    },
    {
      id: 4,
      content: "served right at your door",
      title: "Concierge services",
      icon: "service-24",
    },
    {
      id: 5,
      content: "UPON YOUR ARRIVAL ON THE ISLAND",
      title: "Breakfast delivery",
      icon: "breakfast",
    },
    {
      id: 6,
      content: "FOLLOW US HEADING TO YOUR VILLA",
      title: "Cleaning services",
      icon: "housekeeping",
      src: IconBroom,
    },
    {
      id: 7,
      content: "served right at your door",
      title: "Villa specialist assistance",
      icon: "villa-specialist",
    },
    {
      id: 8,
      content: "the best things to do in the island",
      title: "Special advantages",
      icon: "airplane-ticket",
      src: IconGift,
    },
    // Add more items as needed
  ];

  // Map icon names to their corresponding components
  const iconComponents: Record<string, any> = {
    Plane,
    Transfer,
    Gift,
    Concierge,
    GiftCard,
    Broom,
    Service,
    Croissant,
  };

  // Define a function to get the icon component based on the icon name
  function getIconComponent(iconName: string) {
    return iconComponents[iconName] || null;
  }

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

<div class="overflow-hidden">
  <div class="slider-container">
    <div class="slider" id="slider" bind:this={sliderElement}>
      {#each slides as slide, index (slide)}
        <div class={`slide ${getClass(index)}`}>
          <div class="flex flex-col items-center gap-4 text-center">
            <div
              class="bg-gradient-to-r from-purple-dark to-purple-darker text-white rounded-full p-4"
            >
              <LordIcon
                src={slide.src ? slide.src : undefined}
                name={slide.icon}
                size="100"
                class="text-white"
              />
            </div>

            <span class=" font-athena text-2xl">{slide.title}</span>
            <span class="uppercase text-xs tracking-[4px]">{slide.content}</span
            >
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
<div class="flex gap-4 justify-center pt-4">
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  {#each slides as _, i}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      on:click={() => (activeIndex = i)}
      class="{activeIndex === i
        ? 'bg-purple-light'
        : 'bg-gray-disabled'} w-2.5 h-2.5 rounded-full cursor-pointer"
    ></div>
  {/each}
</div>

<style lang="postcss">
  .slider-container {
    @apply w-auto m-auto relative h-[320px];
  }

  .slider-container .slider {
    @apply md:w-[85%] w-full h-full m-auto relative;
  }

  .slider-container .slider .slide {
    @apply inline-block md:w-[80%] w-[60%] h-[320px] absolute left-1/2 top-1/2;
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
</style>
