<script lang="ts">
  import Plane from "@assets/svgs/icons/plane-2.svg?component";
  import Transfer from "@assets/svgs/icons/car-site-2.svg?component";
  import Gift from "@assets/svgs/icons/gift.svg?component";
  import Concierge from "@assets/svgs/icons/waiter-restaurant.svg?component";
  import Croissant from "@assets/svgs/icons/croissant.svg?component";
  import GiftCard from "@assets/svgs/icons/gift-card.svg?component";
  import Broom from "@assets/svgs/icons/broom.svg?component";
  import Service from "@assets/svgs/icons/male-customer-service.svg?component";
  import IconArrowLeft from "@assets/svgs/icons/arrow-left.svg?component";
  import Carousel from "@components/Carousel.svelte";
  import LordIcon from "@components/atoms/LordIcon.svelte";
  import IconBroom from "@assets/icons-json/1701-broom.rough.json?url";
  import IconGift from "@assets/icons-json/1369-gift-card.rough.json?url";

  let innerWidth = 0;

  const items = [
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
      src: IconBroom
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
      src: IconGift
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
    Croissant
  };

  // Define a function to get the icon component based on the icon name
  function getIconComponent(iconName: string) {
    return iconComponents[iconName] || null;
  }

  let itemsPerSlide = 4;

  $: itemsPerSlide = innerWidth >= 1440 ? 4 : 2;
</script>

<svelte:window bind:innerWidth />

<div class="slider-container">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <Carousel perPage={itemsPerSlide} dots={false} perPageSlide={2}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div slot="prev" class="relative hidden md:block">
      <IconArrowLeft
        width="32"
        class="stroke-purple-secondary !w-auto !h-auto stroke-9 cursor-pointer top-1/2 !-translate-y-1/2 -left-10 transition-transform absolute hover:scale-105 active:scale-110"
      />
    </div>
    {#each items as item (item.id)}
      <div class="flex flex-col items-center gap-4 text-center max-w-72 mx-auto lg:mx-3">
        <div
          class="bg-gradient-to-r from-purple-dark to-purple-darker  rounded-full p-4"
        >
          <LordIcon src={item.src ? item.src : undefined} name="{item.icon}" size="100" class="text-white" />
        </div>

        <span class=" font-athena text-2xl">{item.title}</span>
        <span class="uppercase text-xs tracking-[4px]">{item.content}</span>
      </div>
    {/each}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div slot="next" class="relative hidden md:block">
      <IconArrowLeft
        width="32"
        class="stroke-purple-secondary !w-auto !h-auto !rotate-180 stroke-9 cursor-pointer top-1/2 !-translate-y-1/2 -right-10 transition-transform absolute hover:scale-105 active:scale-110"
      />
    </div>
  </Carousel>
</div>

<style lang="postcss">
  .slider-container {
    @apply max-w-[75%] mx-auto;
  }
</style>
