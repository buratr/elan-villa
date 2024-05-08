<script lang="ts">
  import { modal } from "@components/Modal.svelte";
  import LordIcon from "@components/atoms/LordIcon.svelte";
  import SearchOptionsMobile from "@components/home/head/SearchOptionsMobile.svelte";

  const openSearchMenu = () => {
    // const modal = useModal({ closeOnBackdrop: true });
    modal.open(SearchOptionsMobile);
  };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="flex flex-wrap lg:flex-nowrap bg-white/50 rounded-full shadow-main p-2 lg:p-0 lg:py-2 w-full justify-between items-center"
>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="p-1 bg-gradient-to-r from-purple-dark to-purple-darker rounded-full"
    on:click={openSearchMenu}
  >
    <LordIcon
      name="settings"
      size="24"
      class="text-white"
    />
  </div>
  <span class=" uppercase tracking-widest text-xs md:text-base"
    >look for a villa</span
  >
  <div
    class="p-1 bg-gradient-to-r from-purple-dark to-purple-darker rounded-full"
  >
    <LordIcon name="search" size="24" class="text-white" />
  </div>
</div>
