<!-- MonthSelector.svelte -->
<script lang="ts" context="module">
  export type SelectedMonth = {
    month: string;
    year: number;
  };
</script>

<script lang="ts">
  import { writable } from "svelte/store";
  import IconArrowLeft from "@assets/svgs/icons/arrow-left.svg?component";

  export let selectedMonth: SelectedMonth | undefined;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const selectedPeriod = writable({
    startMonth: selectedMonth ? months.indexOf(selectedMonth.month) : 0,
    year: selectedMonth ? selectedMonth.year : new Date().getFullYear(),
  });

  const selectMonth = (date: SelectedMonth) => {
    if (selectedMonth?.month === date.month && selectedMonth?.year === date.year) {
      selectedMonth = undefined;
    } else {
      selectedMonth = date;
    }
  };

  function nextMonths() {
    selectedPeriod.update((value) => {
      const nextStartMonth = value.startMonth + 4;
      if (nextStartMonth < months.length) {
        return { ...value, startMonth: nextStartMonth };
      } else {
        return { startMonth: 0, year: value.year + 1 };
      }
    });
  }

  function prevMonths() {
    selectedPeriod.update((value) => {
      const prevStartMonth = value.startMonth - 4;
      if (prevStartMonth >= 0) {
        return { ...value, startMonth: prevStartMonth };
      } else {
        return { startMonth: months.length - 4, year: value.year - 1 };
      }
    });
  }
</script>

<div class="relative px-4">
  <button on:click={prevMonths}>
    <IconArrowLeft
      width="16"
      class="stroke-purple-secondary !w-auto !h-auto stroke-9 cursor-pointer top-1/2 !-translate-y-1/2 -left-6 transition-transform absolute"
    />
  </button>
  <div class="grid grid-cols-2 grid-rows-2 gap-2">
    {#each Array(4) as _, i}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        on:click={() =>
          selectMonth({
            month: months[$selectedPeriod.startMonth + i],
            year: $selectedPeriod.year,
          })}
        class="{months[$selectedPeriod.startMonth + i] ===
          selectedMonth?.month && $selectedPeriod.year === selectedMonth.year
          ? 'bg-gradient-to-r from-purple-dark to-purple-darker text-white'
          : 'bg-white/50 hover:scale-105'} flex flex-col shadow-select rounded-[20px] justify-center items-center p-5 cursor-pointer transition-all"
      >
        <span>{months[$selectedPeriod.startMonth + i]}</span>
        <span>{$selectedPeriod.year}</span>
      </div>
    {/each}
  </div>
  <button on:click={nextMonths}>
    <IconArrowLeft
      width="16"
      class="stroke-purple-secondary !w-auto !h-auto !rotate-180 stroke-9 cursor-pointer top-1/2 !-translate-y-1/2 -right-6 transition-transform absolute"
    />
  </button>
</div>
