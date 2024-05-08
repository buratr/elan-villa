<script lang="ts">
  import IconArrowUp from "@assets/svgs/icons/arrow-go-top.svg?component";
  import IconArrowLeft from "@assets/svgs/icons/arrow-left.svg?component";
  import IconButton from "./atoms/IconButton.svelte";
  import IconWhatsApp from "@assets/svgs/icons/icons8-whatsapp.svg?component";

  let y: number;

  $: visibleScroll = y > 300;

  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
</script>

<svelte:window bind:scrollY={y} />

<div
  class="flex-col items-center fixed bottom-24 right-[50px] z-50 hidden md:flex"
>
  <button
    on:click={scrollToTop}
    class="group transition-all {!visibleScroll && 'opacity-0'}"
  >
    <IconArrowUp
      width="64"
      class="stroke-purple-secondary group-hover:stroke-purple-light active:scale-105 transition-all !w-auto !h-auto stroke-2"
    />
  </button>
  <IconButton>
    <IconWhatsApp
      width="30"
      height="30"
      class="stroke-2"
      stroke="white"
      fill="red"
    />
  </IconButton>
</div>

<div
  class="flex md:hidden flex-col items-center fixed bottom-24 right-4 z-50 transition-all {!visibleScroll &&
    'opacity-0'}"
>
  <IconButton gap='2' on:click={scrollToTop}>
    <IconArrowLeft
      width="21"
      class="stroke-white !w-auto !h-auto stroke-9 !rotate-90"
    />
  </IconButton>
</div>
