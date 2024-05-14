<script lang="ts">
    import MonthSelector, { type SelectedMonth } from "./MonthSelector.svelte";
    import Radio from "@components/atoms/Radio.svelte";
    import type { RadioOption } from "@components/atoms/Radio.svelte";
    import {
      filtersStore,
      getFilterValueById,
      setFilterValueById,
    } from "@lib/stores/filtersStore";
  
    let eventOptions: RadioOption[] = [
      { label: "St Barth Music Festival", value: "st-barth-music-festival" },
      { label: "Carnival", value: "carnival" },
      { label: "Bucket Regatta", value: "bucket-regatta" },
      { label: "National Music Festival Day", value: "national-music-festival-day" },
      { label: "St Barth Tennis Open", value: "st-barth-tennis-open" },
      { label: "Gourmet Festival", value: "gourmet-festival" },
      { label: "Cata Cup", value: "cata-cup" },
      { label: "Thanksgiving", value: "thanksgiving" },
      { label: "Christmas", value: "christmas" },
      { label: "New Year’s Eve", value: "new-years-eve" },
    ];
  
    let selectedEvent: RadioOption | undefined =
      getFilterValueById("eventsFilter")?.selectedEvent || undefined;
  
  
    $: if (selectedEvent) {
      setFilterValueById("eventsFilter", {
        selectedEvent: selectedEvent
      });
      setFilterValueById("datesFilter", undefined);
      setFilterValueById("seasonFilter", undefined);
    }
  </script>
  

  <div>
    <!-- <span>How long will you stay ?</span> -->
    <!-- class="flex-col pt-6 gap-4" -->
    <Radio
      outlined
      
      options={eventOptions}
      bind:userSelected={selectedEvent}
    />
  </div>
  