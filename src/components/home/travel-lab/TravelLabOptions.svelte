<script lang="ts">
  import Button from "@components/atoms/Button.svelte";
  import IconBag from "@assets/icons-json/725-suitcase-travel-baggage-luggage.rough.json?url";
  import IconPeace from "@assets/icons-json/1939-peace-sign.rough.json?url";
  import IconDiamond from "@assets/icons-json/724-diamond-luxury-precious.rough.json?url";
  import IconLab from "@assets/icons-json/1243-chemistry.rough.json?url";
  import IconArrowLeft from "@assets/svgs/icons/arrow-left.svg?component";
  import LordIcon from "@components/atoms/LordIcon.svelte";

  let carousel: HTMLDivElement;

  const scrollTo = (direction: 'next' | 'prev') => {
    const itemWidth = carousel.children[0].offsetWidth + 32; // Assuming all items have the same width plus gap 32px

    if (direction === 'next') {
      carousel.scrollLeft += itemWidth;
    } else {
      carousel.scrollLeft -= itemWidth;
    }
  };
</script>

<div
  class="flex flex-nowrap hide-scrollbar justify-start lg:justify-center lg:items-stretch items-start gap-8 pt-44 overflow-x-scroll px-8"
  bind:this={carousel}
>
  <div class="flex flex-col relative justify-between p-11 px-14 border-[3px] rounded-[40px] border-purple bg-white w-[320px] min-w-[320px]">
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3/4 bg-gradient-to-r from-purple-dark to-purple-darker text-white rounded-full p-4"
    >
      <LordIcon src="{IconBag}" size="100" class="text-white" />
    </div>
    <div class="flex flex-col">
      <span
        class="text-center font-athena text-3xl text-purple pt-12 capitalize"
        >Casual trip</span
      >
      <ul class="list-disc pt-11 tracking-wide">
        <li>Villa</li>
        <li>Meet & Gre et</li>
        <li>Escort to / from the villa</li>
        <li>Welcome amenities</li>
        <li>Daily maid service</li>
        <li>Personalized assistance</li>
      </ul>
    </div>
    <div class="flex flex-col">
      <span class="text-purple font-semibold text-center py-7"
        >-50 % off services fees</span
      >
      <div class="flex justify-center">
        <Button style="primary">Try it</Button>
      </div>
    </div>
  </div>

  <div
    class="flex flex-col relative justify-between p-11 px-14 rounded-[40px] peace-option w-[320px] min-w-[320px]"
  >
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3/4 bg-gradient-to-r from-purple-dark to-purple-darker text-white rounded-full p-4"
    >
      <LordIcon src="{IconPeace}" size="100" class="text-white" />
    </div>
    <div class="flex flex-col">
      <span class="text-center font-athena text-3xl text-white pt-12 capitalize"
        >Travel peacefully</span
      >
      <ul class="list-disc pt-11 tracking-wide text-white">
        <li>Villa</li>
        <li>Airplane tickets</li>
        <li>Car rental</li>
        <li>Meet & Greet</li>
        <li>Escort to / from the villa</li>
        <li>Continental breakfast</li>
        <li>Welcome amenities</li>
        <li>Daily maid service</li>
        <li>Personalized assistance</li>
      </ul>
    </div>
    <div class="flex flex-col">
      <span class="text-purple-light font-semibold text-center py-7"
        >-25 % off services fees</span
      >
      <div class="flex justify-center">
        <Button style="primary">Try it</Button>
      </div>
    </div>
  </div>

  <div
    class="flex flex-col relative justify-between p-11 px-14 rounded-[40px] premium-option w-[320px] min-w-[320px]"
  >
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3/4 bg-gradient-to-r from-purple-dark to-purple-darker text-white rounded-full p-4"
    >
      <LordIcon src="{IconDiamond}" size="100" class="text-white" />
    </div>
    <div class="flex flex-col">
      <span class="text-center font-athena text-3xl text-white pt-12 capitalize"
        >Premium Holiday</span
      >
      <ul class="list-disc pt-11 tracking-wide text-white">
        <li>Villa</li>
        <li>Airplane tickets</li>
        <li>Car rental</li>
        <li>Meet & Greet</li>
        <li>Escort to / from the villa</li>
        <li>Continental breakfast</li>
        <li>Welcome amenities</li>
        <li>Daily maid service</li>
        <li>Concierge service 24/7</li>
        <li>Pre booking restaurants</li>
        <li>Activities reservations</li>
      </ul>
    </div>
    <div class="flex flex-col">
      <div class="flex justify-center">
        <Button style="primary">Try it</Button>
      </div>
    </div>
  </div>

  <div
    class="flex flex-col relative justify-between p-11 rounded-[40px] tailor-option w-[320px] min-w-[320px]"
  >
    <div class="flex w-full justify-center">
      <div class="lab-badge text-white rounded-full p-4">
        <LordIcon src="{IconLab}" size="100" class="text-white" />
      </div>
    </div>
    <div class="flex flex-col">
      <span class="text-center font-athena text-3xl text-white pt-8 capitalize"
        >Tailor-made Experience</span
      >
      <span class="text-white pt-11">
        Take control of the Lab and choose the ingredients that will make your
        stay a heaven. In just a few clicks, discover and choose all the
        services that matter to you.
      </span>
    </div>
    <div class="flex flex-col">
      <div class="flex justify-center">
        <Button style="light">Start</Button>
      </div>
    </div>
  </div>
</div>
<!-- <div class="absolute z-10 flex justify-between w-full px-8 lg:hidden">
  <button on:click={() => scrollTo('prev')} class="group">
    <IconArrowLeft
      width="32"
      class="stroke-purple-secondary !w-auto !h-auto stroke-9 cursor-pointer transition-transform group-hover:scale-105 group-avtive:scale-110"
    />
  </button>
  <button on:click={() => scrollTo('next')} class="group">
    <IconArrowLeft
      width="32"
      class="stroke-purple-secondary !w-auto !h-auto !rotate-180 stroke-9 cursor-pointer transition-transform group-hover:scale-105 group-avtive:scale-110"
    />
  </button>
</div> -->

<style>
  .peace-option {
    border-radius: 40px;
    background: radial-gradient(
        139.99% 148.9% at 4.98% 103.04%,
        rgba(30, 30, 30, 0.5) 3.35%,
        rgba(164, 164, 164, 0.08) 30.04%,
        rgba(255, 255, 255, 0) 66.38%
      ),
      #1e1e1e;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  }

  .premium-option {
    border-radius: 40px;
    background: radial-gradient(
        61.96% 108.19% at 46.69% -18.87%,
        rgba(134, 134, 218, 0.6) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      #000023;
  }

  .lab-badge {
    background: radial-gradient(
        108.04% 131.82% at 100% 3.15%,
        rgba(30, 30, 30, 0.5) 3.35%,
        rgba(164, 164, 164, 0.08) 30.04%,
        rgba(255, 255, 255, 0) 66.38%
      ),
      #1e1e1e;
  }

  .tailor-option {
    background: linear-gradient(277.58deg, #50156b 35.24%, #3e127f 88.52%);
  }
</style>
