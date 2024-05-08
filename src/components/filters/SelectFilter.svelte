<script lang="ts">
  import Checkbox from "@components/atoms/Checkbox.svelte";
  import type { FilterOption } from "@lib/filters/filterOptions";
  import { createEventDispatcher } from 'svelte';

  export let selectOptions: FilterOption[] = [];
  export let selectedOptions: FilterOption[] = [];

  const dispatch = createEventDispatcher();

  const getValuesArray = (options: FilterOption[]) => {
    let names = options.map(function (item) {
      return item["value"];
    });

    return names;
  };

  const toggleOption = (option: FilterOption) => {
    if (getValuesArray(selectedOptions).includes(option.value)) {
      selectedOptions = selectedOptions.filter(
        (item) => item.value !== option.value
      );
    } else {
      selectedOptions = [...selectedOptions, option];
    }

    dispatch('filter-change', { selectedOptions });
  };

</script>

<div class="flex flex-col gap-4">
  {#each selectOptions as option, index (option)}
    <Checkbox
      label={option.label}
      id={option.value + index}
      checked={getValuesArray(selectedOptions).includes(option.value)}
      on:change={() => toggleOption(option)}
    />
  {/each}
</div>
