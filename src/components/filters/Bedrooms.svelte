<script lang="ts">
  import Button from "@components/atoms/Button.svelte";
  import { createEventDispatcher } from 'svelte';
  export let selectedValue: number = 1;
  let values: number[] = Array.from({ length: 10 }, (_, i) => i + 1);

  const dispatch = createEventDispatcher();
</script>

<div class="grid grid-cols-5 grid-rows-2 w-fit gap-2">
  {#each values as value}
    <div class="flex justify-center">
      <Button
        on:click={() => {
          selectedValue = value;
          dispatch('filter-change', { selectedValue });
        }}
        style="outlined"
        class="!p-2 w-[30px] h-[30px] !text-base {selectedValue === value
          ? 'active'
          : ''}"
      >
        {value}
      </Button>
    </div>
  {/each}
</div>
