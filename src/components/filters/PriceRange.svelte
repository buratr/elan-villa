<script lang="ts">
// @ts-nocheck

  import Tabs from "@components/Tabs.svelte";
  import NightRangeFilter from "./NightRangeFilter.svelte";
  import WeekRangeFilter from "./WeekRangeFilter.svelte";
  import { getFilterValueById } from "@lib/stores/filtersStore";

  let items = [
    { label: "By Night", value: 1, component: NightRangeFilter },
    { label: "By Week", value: 2, component: WeekRangeFilter },
  ];

  let activeTabValue: number = getFilterValueById('weekRange') ? 2 : 1;
</script>

<div class="max-w-64">
  <Tabs {items} {activeTabValue}/>
</div>
