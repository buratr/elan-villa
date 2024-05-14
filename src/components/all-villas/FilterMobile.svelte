<script lang="ts">
  import SearchFilterModal from "@components/filters/SearchFilterModal.svelte";
  import { useModal } from "@components/Modal.svelte";
  import AllFilters from "@components/filters/AllFilters.svelte";
  import LordIcon from "@components/atoms/LordIcon.svelte";

  const openSearchMenu = () => {
    const modal = useModal({ backdropClose: true, size: "full" });

    modal.open(SearchFilterModal);
  };

  const openFiltersMenu = () => {
    const modal = useModal({ backdropClose: true, size: "full" });

    modal.open(AllFilters, {
      class: "flex flex-col bg-white pb-32 pt-8 px-8",
      showCTA: true,
    });
  };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="flex flex-nowrap gap-4 bg-white rounded-full shadow-main p-2 lg:p-0 lg:py-2 w-full justify-between items-center"
>
  <div
    class="p-1 bg-gradient-to-r from-purple-dark to-purple-darker rounded-full"
    on:click={openFiltersMenu}
    >
    <LordIcon
      name="settings"
      size="24"
      class="text-white"
    />
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="flex flex-col w-full" on:click={openFiltersMenu}>
    <span class="uppercase tracking-widest text-xs md:text-base"
      >FILTERS</span
      >
    <span class="text-[8px] w-full">3 areas, 8 nights, 4 guests, +3 others...</span>
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- openSearchMenu -->
  <div
    class="p-1 bg-gradient-to-r from-purple-dark to-purple-darker rounded-full"
    on:click={openFiltersMenu}
  >
    <LordIcon name="search" size="24" class="text-white" />
  </div>
</div>
