<script lang="ts">
  import villaBG from "@assets/images/blanc-bleu.jpeg";
  import AnchoLinks from "./AnchoLinks.svelte";

  let anchorWidth: number;
  let outerWidth: number;
</script>

<svelte:window bind:outerWidth />

<div class="image-container">
  <!-- Video Background -->
  <div class="absolute -z-10 w-full h-full object-cover">
    <img class="w-full h-full object-cover" src={villaBG} alt="villa main" />
    <div class="absolute inset-0 w-full h-full bg-black/50"></div>
  </div>

  <!-- Content Overlay -->
  <div class="flex flex-col justify-center items-center w-full">
    <div class="flex flex-col text-center">
      <span class="font-athena text-white text-[45px] md:text-[120px]"
        >Lorient</span
      >
      <span class="text-purple-light font-amsterdam text-[35px] md:text-[70px]"
        >Lorient</span
      >
    </div>
  </div>

  <div
    class="absolute -bottom-[50px] md:-bottom-[80px] flex w-full {anchorWidth >
    outerWidth
      ? 'justify-start'
      : 'justify-center'} overflow-scroll hide-scrollbar"
  >
    <AnchoLinks bind:anchorWidth />
  </div>
</div>

<style lang="postcss">
  .image-container {
    @apply flex w-full items-stretch relative max-h-screen z-10 min-h-[392px] md:min-h-[728px] lg:min-h-[980px];
  }
  .hide-scrollbar {
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
</style>
