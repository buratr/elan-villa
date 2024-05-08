<script lang="ts">
  import Button from "@components/atoms/Button.svelte";
  import { goto } from "$app/navigation";
  import SummaryLayout from "./SummaryLayout.svelte";
  import contemporary from "@assets/images/you1.png";
</script>

<div class="flex w-full gap-8 pt-20 flex-col justify-center">
  <SummaryLayout>
    <div slot="title" class="md:max-w-xs flex w-full gap-4 justify-center md:justify-start pb-10 md:pb-0">
      <span class="text-[35px] text-white">1</span>
      <span class="md:text-[35px] text-[30px] text-purple-light font-amsterdam"
        >The package</span
      >
    </div>

    <div slot="info" class="flex w-full flex-col justify-start items-center border-b border-gray md:border-0 px-8 md:px-0 pb-10 md:pb-0">
      <div class="flex w-full text-white md:border-b border-gray pb-4">
        <div class="flex flex-1 w-1/2">
          <span class="text-sm md:text-[20px] text-whtie font-semibold"
            >Choice of package</span
          >
        </div>
        <div class="flex flex-1 w-1/2 flex-col">
          <span class="text-xs md:text-base text-whtie">Travel peacefully</span>
        </div>
      </div>
      <div class="flex w-full text-white md:border-b border-gray pb-4 pt-8">
        <div class="flex flex-1 w-1/2">
          <span class="text-sm md:text-[20px] text-whtie font-semibold"
            >Tailor-made experience</span
          >
        </div>
        <div class="flex flex-1 w-1/2 flex-col gap-1">
          <span class="text-xs md:text-base text-whtie">Meet & great</span>
          <span class="text-xs md:text-base text-whtie"
            >Escort to / from the villa</span
          >
          <span class="text-xs md:text-base text-whtie">Welcome gifts</span>
          <span class="text-xs md:text-base text-whtie">Daily maid service</span
          >
          <span class="text-xs md:text-base text-whtie">Villa specialist</span>
        </div>
      </div>
      <div class="flex w-full text-white pb-4 pt-8">
        <div class="flex flex-1 w-1/2">
          <span class="text-sm md:text-[20px] text-whtie font-semibold"
            >Extra cost</span
          >
        </div>
        <div class="flex flex-1 w-1/2 flex-col gap-1">
          <span class="text-xs md:text-base text-whtie">Housekeeping 7/7</span>
        </div>
      </div>
    </div>
  </SummaryLayout>

  <SummaryLayout>
    <div slot="title" class="md:max-w-xs flex w-full gap-4 justify-center md:justify-start pb-10 pt-10 md:pt-0 md:pb-0">
      <span class="text-[35px] text-white">2</span>
      <span class="md:text-[35px] text-[30px] text-purple-light font-amsterdam"
        >The collection</span
      >
    </div>

    <div slot="info" class="flex w-full flex-col justify-start items-center border-b border-gray md:border-0 px-8 md:px-0 pb-10 md:pb-0">
      <div class="flex w-full flex-col max-w-[250px] md:max-full">
        <img
          src={contemporary}
          class="w-full h-full object-contain max-w-[250px]"
          alt=""
        />
        <div class="flex w-full gap-4">
          <div class="flex w-full flex-col gap-1">
            <p class="text-white text-base md:text-[20px]">Ultra luxe</p>
            <span class="text-white text-xs md:text-base">
              The excellence of the villas on the island are here
            </span>
          </div>
        </div>
      </div>
    </div>
  </SummaryLayout>

  <SummaryLayout>
    <div slot="title" class="md:max-w-xs flex w-full gap-4 justify-center md:justify-start pb-10 pt-10 md:pt-0 md:pb-0">
      <span class="text-[35px] text-white">3</span>
      <span class="md:text-[35px] text-[30px] text-purple-light font-amsterdam"
        >The Filters</span
      >
    </div>

    <div slot="info" class="flex w-full flex-col justify-start items-center border-b border-gray md:border-0 px-8 md:px-0 pb-10 md:pb-0">
      <div class="flex w-full text-white md:border-b border-gray pb-4">
        <div class="flex flex-1 w-1/2">
          <span class="text-sm md:text-[20px] text-whtie font-semibold"
            >Period of your stay :</span
          >
        </div>
        <div class="flex flex-1 w-1/2 flex-col">
          <span class="text-xs md:text-base text-whtie">Summer season</span>
        </div>
      </div>
      <div class="flex w-full text-white md:border-b border-gray pb-4 pt-8">
        <div class="flex flex-1 w-1/2">
          <span class="text-sm md:text-[20px] text-whtie font-semibold"
            >Number of people :</span
          >
        </div>
        <div class="flex flex-1 w-1/2 flex-col gap-1">
          <span class="text-xs md:text-base text-whtie"
            >6 adults and 2 children</span
          >
        </div>
      </div>
      <div class="flex w-full text-white pb-4 pt-8">
        <div class="flex flex-1 w-1/2">
          <span class="text-sm md:text-[20px] text-whtie font-semibold"
            >The area :</span
          >
        </div>
        <div class="flex flex-1 w-1/2 flex-col gap-1">
          <span class="text-xs md:text-base text-whtie">Saint Jean</span>
        </div>
      </div>
    </div>
  </SummaryLayout>

  <SummaryLayout>
    <div slot="title" class="md:max-w-xs flex w-full gap-4 justify-center md:justify-start pb-10 pt-10 md:pt-0 md:pb-0">
      <span class="text-[35px] text-white">4</span>
      <span class="md:text-[35px] text-[30px] text-purple-light font-amsterdam"
        >The journey</span
      >
    </div>

    <div slot="info" class="flex w-full flex-col justify-start items-center border-b border-gray md:border-0 px-8 md:px-0 pb-10 md:pb-0">
      <div class="flex w-full flex-col gap-2 md:border-b border-gray pb-8">
        <div class="flex w-full text-white pb-4">
          <span class="text-sm md:text-[20px] text-white font-semibold"
            >In the air
          </span>
        </div>
        <div class="grid grid-cols-2 w-full text-xs md:text-base text-white gap-4 md:gap-1">
          <span>City’s departure :</span>
          <span>Paris Charles de Gaulle Airport</span>

          <span>Number of PAX :</span>
          <span>6 adults and 2 children</span>

          <span>Special needs</span>
          <span>First class</span>
        </div>
      </div>

      <div class="flex w-full flex-col gap-2 pt-4">
        <div class="flex w-full text-white pb-4">
          <span class="text-sm md:text-[20px] text-white font-semibold"
            >On the road
          </span>
        </div>
        <div class="grid grid-cols-2 w-full text-xs md:text-base text-white gap-4 md:gap-1">
          <span>Your broker :</span>
          <span>Name of the broker</span>

          <span>Your vehicule :</span>
          <div class="flex w-full flex-col">
            <span>4x4</span>
            <span>Normal</span>
            <span>Electric</span>
          </div>
        </div>
      </div>
    </div>
  </SummaryLayout>
  <div
    class="flex flex-col w-full text-center pb-10 md:pb-24 px-8 md:px-0 pt-20"
  >
    <div class="flex w-full flex-wrap justify-center items-center gap-6">
      <div class="flex">
        <Button style="outlined" on:click={() => goto("/travel_lab")}
          >GO BACK</Button
        >
      </div>
      <div class="flex">
        <Button style="primary">DISCOVER THE VILLAS</Button>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .active-select {
    background: radial-gradient(
        49.31% 85.29% at 9.85% 4.97%,
        rgba(134, 134, 218, 0.6) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(0deg, #000023, #000023);
  }

  .icon-bg {
    background: radial-gradient(
        102.69% 101.16% at 100% 3.15%,
        rgba(30, 30, 30, 0.5) 3.35%,
        rgba(164, 164, 164, 0.075) 30.04%,
        rgba(255, 255, 255, 0) 66.38%
      ),
      linear-gradient(0deg, #1e1e1e, #1e1e1e);
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
  }
</style>
