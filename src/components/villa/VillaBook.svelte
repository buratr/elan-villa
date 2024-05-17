<script lang="ts">
  import VillaBookBG from "@assets/background/Vector17.svg";
  import BookModal from "./BookModal.svelte";
</script>

<div
  class="bg-villa-book flex relative bg-cover"
>
<img src="{VillaBookBG}" alt="" class="-z-10 absolute w-full h-full object-cover">
  <div class="villa-eclipse md:-left-[400px] -left-[800px]"></div>
  <div class="flex px-0 md:px-44 lg:pl-44 lg:pr-20 flex-wrap justify-center lg:justify-between mt-32">
    <div class="lg:max-w-[60%] max-w-full">
      <div class="px-12 flex flex-col">
        <h2 class="uppercase text-purple flex flex-col">
          <span>ultra luxury</span>
          <span>family and friends</span>
        </h2>
        <h2 class="font-athena text-white text-[35px] md:text-[60px] py-8">
          Luxury ocean front view with private infinity pool
        </h2>
        <p class="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p>
      </div>
      
      <div class="flex pt-20 pb-32 lg:pb-64 justify-between flex-wrap">
        <div class="flex flex-col gap-4 items-center w-1/2 md:w-auto order-1 md:order-1">
          <span class="font-athena text-purple-light text-[60px] md:text-[80px]">12</span>
          <span class="text-white font-medium text-center tracking-[4px]">GUESTS</span>
        </div>
        <div class="flex flex-col gap-4 items-center w-1/2 md:w-auto order-3 md:order-1">
          <span class=" font-athena text-purple-light text-[60px] md:text-[80px]">6</span>
          <span class="text-white font-medium text-center tracking-[4px]">BEDROOMS</span>
        </div>
        <div class="flex flex-col gap-4 items-center w-1/2 md:w-auto order-4 md:order-1">
          <span class=" font-athena text-purple-light text-[60px] md:text-[80px] ">7</span>
          <span class="text-white font-medium text-center tracking-[4px]">BATHROOMS</span>
        </div>
        <div class="flex flex-col gap-4 items-center w-1/2 md:w-auto order-2 md:order-1">
          <span class=" font-athena text-purple-light text-[60px] md:text-[80px]">2,429</span>
          <span class="text-white font-medium text-center tracking-[4px]">BEST RATE</span>
        </div>
      </div>
    </div>
    <div class="hidden pb-56 md:flex max-w-full lg:max-w-[40%] justify-end">
      <BookModal />
    </div>
  </div>
</div>

<style>
  .villa-eclipse {
    background: linear-gradient(180deg, #6d4f9c 0%, #b6a5ca 100%);
    height: 100px;
    position: absolute;
    width: 900px;
    top: -110px;
    border-radius: 50%;
    box-shadow: #6d4f9c 0 50px 200px 0;
  }

  .villa-eclipse:before {
    content: "";
    position: absolute;
    inset: 1px;
    background: linear-gradient(180deg, #6d4f9c 0%, #b6a5ca 100%);
    filter: blur(50px);
    opacity: 40%;
  }

  .bg-villa-book {
    /* background: linear-gradient(0deg, #141414, #141414),
      linear-gradient(
        87.96deg,
        rgba(98, 97, 97, 0.8) -14.58%,
        rgba(0, 0, 0, 0) 61.66%
      ); */
  }
</style>
