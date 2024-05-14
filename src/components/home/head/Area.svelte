<script lang="ts">
  import { debounce } from "lodash"; // Import debounce function from lodash
  import Input from "@components/atoms/Input.svelte";
  // @ts-ignore
  import Carousel from "svelte-carousel";
  import IconArrowLeft from "@assets/svgs/icons/arrow-left.svg?component";
  import { onMount } from "svelte";
  import LordIcon from "@components/atoms/LordIcon.svelte";
  import Select from "@components/atoms/Select.svelte";
  
  export let locations: any[] = [];
  export let isOpen: boolean;
  export let parentHeight = 0;
  export let selectedArea: string | undefined;
  export let selectedAreaArr: string[];
  export let book: boolean = false;
  export let staticArea: boolean = false;
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

    if (event?.inputType === "deleteSoftLineBackward") {
      filteredLocations = locations;
    } else {
      let searchTerm = event?.target?.value || event;

      if (searchTerm?.length > 0) {
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

  let popup: HTMLDivElement;

  function handleClickOutside(event: MouseEvent) {
    // Check if the clicked element is not inside the popup
    if (isOpen && popup && !popup.contains(event.target as Node)) {
      isOpen = false;
    }
  }

  const selectArea = (title: string) => {
    selectedArea = title;
    const index = selectedAreaArr.indexOf(title);
    if (index !== -1) {
        selectedAreaArr.splice(index, 1);
        selectedAreaArr = [...selectedAreaArr];
    } 
    else {
      selectedAreaArr = [...selectedAreaArr, title];
    }
    //console.log(filteredLocations)
  
    // isOpen = false;
  };

  // Add click event listener to the document
  onMount(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  $: ({ class: classList, ...rest } = $$props);
  
  function handleChange(event) {
    debouncedFilter(event.detail);
    console.log(event.detail)
  }
</script>

<div
  bind:this={popup}
  style="bottom: {parentHeight + 16}px;"
  class="{staticArea ? '' : 'absolute z-30'} {!isOpen && !staticArea ? 'hidden' : ''} {book ? 'lg:-left-full lg:translate-x-0 -translate-x-1/4' : ''}"
>
  <div
    class="bg-white rounded-[30px] px-12 py-11 w-[695px] h-[620px] flex flex-col gap-6 {classList}"
  >
    <div class="flex flex-col w-full gap-6">
      <span class="font-bold">Enter your destination</span>
      <!-- <Input right class="min-w-[350px]" on:input={(e) => debouncedFilter(e)}>
        <LordIcon name="search" size="24" class="text-purple" />
      </Input> -->
      <Select
        on:change={handleChange}
        class="w-full"
        selectedValue="list of the areas"
        disabled={false}
        options={locations.map(item => (item.title))}
      />
      
    </div>
    <div class="flex flex-col w-full gap-6">
      <span class="font-bold">Search by neighborhood</span>
      <div style="min-height: {height}px;" bind:clientHeight>
        {#if !change}
          <Carousel
            bind:this={carousel}
            infinite={false}
            dots={filteredLocations.length > 8}
          >
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
              slot="prev"
              class="relative {filteredLocations.length > 8 ? '' : 'hidden'}"
              on:click={() => carousel.goToPrev()}
            >
              <IconArrowLeft
                width="16"
                class="stroke-purple-secondary !w-auto !h-auto stroke-9 cursor-pointer top-1/2 !-translate-y-1/2 -left-6 transition-transform absolute"
              />
            </div>
            {#if filteredLocations.length > 0}
              {#each Array(Math.ceil(filteredLocations.length / 8)) as _, rowIndex (rowIndex)}
                <div class="grid grid-cols-4 gap-x-4 gap-y-12">
                  {#each filteredLocations.slice(rowIndex * 8, (rowIndex + 1) * 8) as item (item.title)}
                    <div class="w-full max-w-[124px]">
                      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                      <img
                        class="{item.select===true?'border-black opacity-30':''} rounded-[12px] cursor-pointer hover:border-black transition-all border mb-2"
                        src={item.imageSrc}
                        alt={item.title}
                        on:click={() => {
                          item.select = !item.select;
                          selectArea(item.title); 
                          }}
                        
                      />
                      <span class="font-semibold text-xs">{item.title}</span>
                    </div>
                  {/each}
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
              class="relative {filteredLocations.length > 8 ? '' : 'hidden'}"
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
</div>

<style lang="postcss">
  :global(.sc-carousel-dot__dot.sc-carousel-dot__dot_active) {
    @apply bg-purple;
  }

  :global(.sc-carousel-dot__dot) {
    @apply !bg-purple-light;
  }
</style>
