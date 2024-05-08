<script lang="ts">
  import "flatpickr/dist/flatpickr.css";
  import { onDestroy } from "svelte";
  import Flatpickr from "svelte-flatpickr";
  import type { Options } from "flatpickr/dist/types/options";
  import RangePickerBadge from "./RangePickerBadge.svelte";
  import { calculateNights } from "@utils/formatter";
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let datePickerBadge: RangePickerBadge;
  let nights: number = 0;
  export let className: string = '';
  export let selectedDates: Date[] = [];

  const flatpickrOptions: Options = {
    enableTime: false,
    mode: "range",
    dateFormat: "Y-m-d",
    inline: true,
    defaultDate: selectedDates,
    monthSelectorType: "static",
    onReady: (selectedDates: Date[], dateStr: string, instance: any) => {
      const yearInput = instance?.yearElements[0];
      nights = calculateNights(selectedDates);
      if (yearInput) {
        yearInput.disabled = true;
      }
      const calendarContainer = instance?.calendarContainer;
      if (calendarContainer) {
        calendarContainer.classList.add(className);

        datePickerBadge = new RangePickerBadge({
          target: calendarContainer,
          props: { nights },
        });
      }
    },
    onChange(selectedDates: Date[], dateStr: string, instance: any) {
      nights = calculateNights(selectedDates);
      if (datePickerBadge) {
        datePickerBadge.$destroy();
      }

      const calendarContainer = instance?.calendarContainer;
      if (calendarContainer) {
        calendarContainer.classList.add(className);

        datePickerBadge = new RangePickerBadge({
          target: calendarContainer,
          props: { nights },
        });
      }

      dispatch('dates-change', { selectedDates });
    },
  };

  let dateInput: any;

  onDestroy(() => {
    if (dateInput && dateInput._flatpickr) {
      dateInput._flatpickr.destroy();
    }
  });
</script>

<div class="2xl:px-0">
  <Flatpickr
    options={flatpickrOptions}
    class="hidden"
    bind:value={selectedDates}
    name="date"
  />
</div>

<style lang="postcss">
</style>
