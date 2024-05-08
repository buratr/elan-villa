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
    import LordIcon from "@components/atoms/LordIcon.svelte";
    import IconBroom from "@assets/icons-json/1701-broom.rough.json?url";
    import IconGift from "@assets/icons-json/1369-gift-card.rough.json?url";
  
    let activeIndex = 0;
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
      Croissant,
    };
  
    // Define a function to get the icon component based on the icon name
    function getIconComponent(iconName: string) {
      return iconComponents[iconName] || null;
    }
  
  </script>

<div class="slider-container max-lg:flex max-lg:flex-row max-lg:items-stretch max-lg:flex-nowrap hide-scrollbar max-lg:justify-start max-lg:gap-8 max-lg:overflow-x-scroll max-lg:px-8">

    <div class="slider flex flex-1 gap-11 " id="slider" bind:this={sliderElement}>
        {#each slides as slide, index (slide)}
        <div class={`slide `}>
            <div class="flex flex-col items-center gap-4 text-center">
            <div
                class="bg-gradient-to-r from-purple-dark to-purple-darker text-white rounded-full p-4"
            >
                <LordIcon src={slide.src ? slide.src : undefined} name="{slide.icon}" size="100" class="text-white" />
            </div>

            <span class=" font-athena text-2xl">{slide.title}</span>
            <span class="uppercase text-xs tracking-[4px]">{slide.content}</span
            >
            </div>
        </div>
        {/each}
    </div>
</div>



  <style lang="postcss">
    .slide {
      @apply inline-block sm:w-[320px] w-[60vw]  bg-white;
     
    }
 </style>