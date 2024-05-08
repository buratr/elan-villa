<script lang="ts">
  import Plane from "@assets/svgs/icons/plane-2.svg?component";
  import Transfer from "@assets/svgs/icons/car-site-2.svg?component";
  import Gift from "@assets/svgs/icons/gift.svg?component";
  import Concierge from "@assets/svgs/icons/waiter-restaurant.svg?component";
  import IconArrowLeft from "@assets/svgs/icons/arrow-left.svg?component";
  import Person1 from "@assets/reviews/person1.png";
  import Person2 from "@assets/reviews/person2.png";
  import Person3 from "@assets/reviews/person3.png";
  import Link from "@components/atoms/Link.svelte";
  import StarRating from "./StarRating.svelte";
  import Carousel from "@components/Carousel.svelte";

  let innerWidth = 0;

  const reviews = [
    {
      id: 1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      name: "Enzo Pieri",
      img: Person1,
      score: 5,
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      name: "Alicia Montagne",
      img: Person2,
      score: 4.6,
    },
    {
      id: 3,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      name: "Phedrik Benjabria",
      img: Person3,
      score: 3.9,
    },
    // Add more items as needed
  ];

  // Map icon names to their corresponding components
  const iconComponents: Record<string, any> = {
    Plane,
    Transfer,
    Gift,
    Concierge,
  };

  let itemsPerSlide: number = 3;
  $: itemsPerSlide =
    innerWidth >= 960 && innerWidth <= 1440 ? 2 : innerWidth >= 1440 ? 3 : 1;
</script>

<svelte:window bind:innerWidth />
<div class="slider-container">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <Carousel perPage={itemsPerSlide}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- <div slot="prev" class="relative">
      <IconArrowLeft
        width="32"
        class="stroke-purple-secondary !w-auto !h-auto stroke-9 cursor-pointer top-1/2 !-translate-y-1/2 -left-10 transition-transform absolute"
      />
    </div> -->
    {#each reviews as review (review.id)}
      <div class="flex flex-col items-center gap-4 text-center px-6">
        <div
          class="rounded-full w-40 h-40 bg-cover"
          style="background-image: url({review.img});"
        ></div>

        <span class=" font-athena text-3xl">{review.name}</span>
        <StarRating score={review.score} />
        <span class="text-justify text-[15px] leading-[175%] text-gray-mute"
          >{review.content}</span
        >
        <!-- <Link
          href="/"
          class="!text-purple-main hover:!text-purple-light uppercase pt-2 group"
        >
          <div class="relative">
            Read More
            <IconArrowLeft
              width="12"
              class="stroke-purple-secondary group-hover:stroke-purple-light !w-auto !h-auto !rotate-180 stroke-6 cursor-pointer top-1/2 !-translate-y-1/2 -right-5 transition-transform absolute"
            />
            <IconArrowLeft
              width="12"
              class="stroke-purple-secondary group-hover:stroke-purple-light !w-auto !h-auto !rotate-180 stroke-6 cursor-pointer top-1/2 !-translate-y-1/2 -right-6 transition-transform absolute"
            />
          </div>
        </Link> -->
      </div>
    {/each}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- <div slot="next" class="relative">
      <IconArrowLeft
        width="32"
        class="stroke-purple-secondary !w-auto !h-auto !rotate-180 stroke-9 cursor-pointer top-1/2 !-translate-y-1/2 -right-10 transition-transform absolute"
      />
    </div> -->
  
  </Carousel>
</div>

<style lang="postcss">
  .slider-container {
    @apply max-w-[75%] mx-auto;
  }
</style>
