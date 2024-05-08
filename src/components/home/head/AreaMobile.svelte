<script lang="ts">
  import { debounce } from "lodash"; // Import debounce function from lodash
  import Input from "@components/atoms/Input.svelte";
  import LordIcon from "@components/atoms/LordIcon.svelte";
  // @ts-ignore
  import Carousel from "svelte-carousel";
  import IconArrowLeft from "@assets/svgs/icons/arrow-left.svg?component";

  export let locations: any[] = [];
  export let onSelectArea: (title: string) => void;
  let filteredLocations: any[] = locations;
  let carousel: any;

  let change: boolean = false;
  let clientHeight: number;
  let height: number = 0;

  // Debounce function to delay the execution of the filterLocations function
  const debouncedFilter = debounce(filterLocations, 300);

  function filterLocations(event: any) {
    height = clientHeight;
    change = true;

    if (event.inputType === "deleteSoftLineBackward") {
      filteredLocations = locations;
    } else {
      let searchTerm = event.target.value;

      if (searchTerm.length > 0) {
        filteredLocations = locations.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      } else {
        filteredLocations = [...locations];
      }
    }

    setTimeout(() => {
      change = false;
    }, 0);
  }

  $: ({ class: classList, ...rest } = $$props);
</script>

<div class="bg-white rounded-[30px] px-12 py-11 flex flex-col gap-6 {classList}">
  <div class="flex flex-col w-full gap-6">
    <span class="font-bold text-center">Enter your destination</span>
    <Input right full class="w-full" on:input={(e) => debouncedFilter(e)}>
      <!-- svelte-ignore missing-declaration -->
      <LordIcon name="search" size="24" class="text-purple" />
    </Input>
  </div>
  <div class="flex flex-col w-full gap-6">
    <span class="font-bold text-center">Search by neighborhood</span>
    <div style="min-height: {height}px;" bind:clientHeight>
      {#if !change}
        <Carousel bind:this={carousel} infinite={filteredLocations.length > 2} dots={false}>
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div
            slot="prev"
            class="relative {filteredLocations.length > 0 ? '' : 'hidden'}"
            on:click={() => carousel.goToPrev()}
          >
            <IconArrowLeft
              width="16"
              class="stroke-purple-secondary !w-auto !h-auto stroke-9 cursor-pointer top-1/2 !-translate-y-1/2 -left-6 transition-transform absolute"
            />
          </div>
          {#if filteredLocations.length > 0}
            {#each filteredLocations as item}
              <div
                class="flex w-full justify-center md:gap-[10%] min-w-full max-w-full"
              >
                <div
                  class="flex flex-col items-center gap-2 text-center px-6 md:px-0"
                >
                  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                  <img
                    class="rounded-[12px] w-[124px] cursor-pointer hover:border-black transition-all border mb-2"
                    src={item.imageSrc}
                    alt={item.title}
                    on:click={() => onSelectArea(item.title)}
                  />
                  <span class="font-semibold text-xs">{item.title}</span>
                </div>
              </div>
            {/each}
          {:else}
            <div class="grid h-full w-full uppercase font-bold text-center">
              No Areas
            </div>
          {/if}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div
            slot="next"
            class="relative {filteredLocations.length > 0 ? '' : 'hidden'}"
            on:click={() => carousel.goToNext()}
          >
            <IconArrowLeft
              width="16"
              class="stroke-purple-secondary !w-auto !h-auto !rotate-180 stroke-9 cursor-pointer top-1/2 !-translate-y-1/2 -right-6 transition-transform absolute"
            />
          </div>
        </Carousel>
      {/if}
    </div>
  </div>
</div>

<style lang="postcss">
  :global(.sc-carousel-dot__dot.sc-carousel-dot__dot_active) {
    @apply bg-purple;
  }

  :global(.sc-carousel-dot__dot) {
    @apply !bg-purple-light;
  }
</style>
