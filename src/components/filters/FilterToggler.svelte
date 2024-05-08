<script lang="ts">
  import { fade, slide } from "svelte/transition";
  import CloseIcon from "@assets/svgs/icons/cross-svgrepo-com.svg?component";
  import { setFilterValueById } from "@lib/stores/filtersStore";

  export let title: string = "Filter";
  export let open: boolean = true;
  export let selectedValue: number | undefined = undefined;
  export let filters: string[] = [];

  const clearFilter = () => {
    filters.forEach(function (filter) {
      setFilterValueById(filter, undefined);
    });
  };
</script>
<div class="flex flex-col justify-center md:justify-normal items-center md:items-start">
  <button class="text-left relative w-fit pb-8 self-start">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <span
      on:click={() => (open = !open)}
      class="{open
        ? 'text-black hover:text-black'
        : 'text-gray-disabled'} hover:text-gray transition-all tracking-widest font-bold text-2xl uppercase"
      >{title}</span
    >
    {#if selectedValue && open}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="group absolute transition-all rounded-full w-[27px] h-[27px] bg-purple-light text-white font-semibold flex justify-center items-center -top-2 -right-9"
        transition:fade={{ duration: 150 }}
        on:click={() => clearFilter()}
      >
        {selectedValue}
        <div
          class="absolute group-hover:opacity-100 opacity-0 rounded-full w-[27px] h-[27px] bg-purple-secondary transition-all flex justify-center items-center"
        >
          <CloseIcon
            width="16"
            height="16"
            class="stroke-9 stroke-white fill-white"
          />
        </div>
      </div>
    {/if}
  </button>
  {#if open}
    <div transition:slide class="pb-12 min-w-full">
      <slot />
    </div>
  {/if}
</div>
