<script lang="ts">
  import MonthSelector, { type SelectedMonth } from "./MonthSelector.svelte";
  import Radio from "@components/atoms/Radio.svelte";
  import type { RadioOption } from "@components/atoms/Radio.svelte";
  import {
    filtersStore,
    getFilterValueById,
    setFilterValueById,
  } from "@lib/stores/filtersStore";

  let periodOptions: RadioOption[] = [
    { label: "A week-end", value: "week-end" },
    { label: "One week", value: "one-week" },
    { label: "One month", value: "one-month" },
  ];

  let selectedPeriod: RadioOption | undefined =
    getFilterValueById("seasonFilter")?.selectedPeriod || undefined;

  let selectedMonth: SelectedMonth | undefined =
    getFilterValueById("seasonFilter")?.selectedMonth || undefined;

  $: if (selectedPeriod && selectedMonth) {
    setFilterValueById("seasonFilter", {
      selectedMonth: selectedMonth,
      selectedPeriod: selectedPeriod,
    });
    setFilterValueById("datesFilter", undefined);
    setFilterValueById("eventsFilter", undefined);
  }
</script>

<div>
  <span class="py-6">When would you like to come ?</span>
  <div class="max-w-xs">
    <MonthSelector bind:selectedMonth />
  </div>
</div>
<div>
  <span>How long will you stay ?</span>
  <Radio
    outlined
    class="flex-col pt-6 gap-4"
    options={periodOptions}
    bind:userSelected={selectedPeriod}
  />
</div>
