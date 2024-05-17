<script lang="ts">
  import team from "@assets/images/Team.png";
</script>

<div class="flex flex-col -mt-[150px]">
  <div class="flex flex-col md:flex-row overflow-hidden md:pt-32">
    <div class="flex md:w-1/2 w-full order-2 top-12 relative items-end">
      <img src={team} class="w-fit h-fit" alt="team" />
    </div>
    <div
      class="flex flex-col md:w-1/2 w-full pl-16 pr-8 md:pr-[15%] order-1 md:order-2 pt-20 md:pt-10 md:pb-10"
    >
      <h2 class="uppercase tracking-[4px] font-medium text-xs md:text-base">
        MEET THE TEAM
      </h2>
      <h2 class="text-[45px] md:text-[60px] text-purple font-athena">
        Elan villa rentals
      </h2>
      <span class="text-xs md:text-base py-10 md:pt-16 md:pb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna..
      </span>
      <span class="text-[25px] md:text-[35px] font-amsterdam text-purple">
        Enzo P.
      </span>
    </div>
  </div>

  <div class="
  max-md:grid max-md:grid-cols-2 
  dark-bg flex flex-col md:flex-row pt-14 pb-16 justify-center gap-16 items-center flex-wrap px-4">

    <div class="flex flex-col gap-4 items-center w-1/2 md:w-auto order-1 max-md:mx-auto">
      <span class="font-athena text-purple-light text-[60px] md:text-[80px]">3</span>
      <span class="text-white font-medium text-center tracking-[4px]">team members</span>
    </div>

    <div class="flex flex-col gap-4 items-center w-1/2 md:w-auto order-1 max-md:mx-auto">
      <span class=" font-athena text-purple-light text-[60px] md:text-[80px]">10+</span>
      <span class="text-white font-medium text-center tracking-[4px]">years of experience</span>
    </div>

    <div class="flex flex-col gap-4 items-center w-1/2 md:w-auto order-1 max-md:mx-auto">
      <span class=" font-athena text-purple-light text-[60px] md:text-[80px]">1500+</span>
      <span class="text-white font-medium text-center tracking-[4px]">HAPPY TRAVELERS</span>
    </div>

    <div class="flex flex-col gap-4 items-center w-1/2 md:w-auto order-1 max-md:mx-auto">
      <span class=" font-athena text-purple-light text-[60px] md:text-[80px]">450+</span>
      <span class="text-white font-medium text-center tracking-[4px]">VILLAS</span>
    </div>

  </div>
</div>

<style>
  .dark-bg {
    background: linear-gradient(0deg, #141414, #141414),
      linear-gradient(
        291.67deg,
        rgba(98, 97, 97, 0.8) -33.08%,
        rgba(0, 0, 0, 0) 91.58%
      );
  }
</style>
