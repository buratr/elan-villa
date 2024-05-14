<script lang="ts">
  import labBG from "@assets/background/st-barths-02-hotel-christopher-cr-courtesy.png";
  import doubleTrait from "@assets/images/double-trait-purple.png";
  import Vector661 from "@assets/background/Vector661.svg?dataurl";
  let anchorWidth: number;
  let outerWidth: number;
</script>

<svelte:window bind:outerWidth />

<div class="image-container">
  <!-- Video Background -->
  <div class="absolute -z-10 w-full h-full object-cover">
    <img class="w-full h-full object-cover" src={labBG} alt="villa main" />
    <div class="absolute inset-0 w-full h-full bg-black/50"></div>
  </div>

  <img src="{Vector661}" class="absolute -bottom-9  object-contain w-full" alt="">

  <!-- Content Overlay -->
  <div class="flex flex-col justify-center items-center w-full text-center pb-10 md:pb-20 px-16 md:px-0">
    <h2
      class="uppercase tracking-[4px] font-medium text-purple-light text-xs md:text-base"
    >
      the perfect formula for you
    </h2>
    <h2 class="text-[45px] md:text-[60px] text-white font-athena">
      Travel lab experience
    </h2>
    <div
      class="text-white text-xs md:text-base tracking-wide max-w-3xl text-center py-16 px-8 md:px-0"
    >
      Make it easy ! ELAN offer you a possibility to create a full vacation plan
      in only few click. Complete the 3 steps to make it done, then we will take
      care of
      <div class="relative inline-block">
        <img
          src={doubleTrait}
          class="absolute top-8 w-24 right-0"
          alt="Double Trait"
        />
        <span class="text-purple">everything</span>
      </div>
      for you.
    </div>
  </div>
</div>

<style lang="postcss">
  .image-container {
    @apply flex w-full items-stretch relative max-h-screen z-10 min-h-[728px] lg:min-h-[980px];
  }
</style>
