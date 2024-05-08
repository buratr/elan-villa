<script lang="ts">
  // @ts-nocheck

  import Tabs from "@components/Tabs.svelte";
  import DateFilter from "./DateFilter.svelte";
  import SeasonsFilter from "./SeasonsFilter.svelte";
  import EventsFilter from "./EventsFilter.svelte";
  import { getFilterValueById } from "@lib/stores/filtersStore";

  let items = [
    { label: "By dates", value: 1, component: DateFilter },
    { label: "By season", value: 2, component: SeasonsFilter },
    { label: "By events", value: 3, component: EventsFilter },
  ];

  let activeTabValue: number = getFilterValueById('eventsFilter') ? 3 : getFilterValueById('seasonFilter') ? 2 : 1;
</script>

<Tabs class="xl:flex-row xl:gap-0 flex-col gap-4 !my-10" {activeTabValue} {items} />