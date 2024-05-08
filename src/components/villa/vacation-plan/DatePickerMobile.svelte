<script lang="ts">
  import "flatpickr/dist/flatpickr.css";
  import { onMount, onDestroy } from "svelte";
  import { calculateNights, formatDate } from "@utils/formatter";
  import DatePickerBadge from "../../home/head/DatePickerBadge.svelte";
  import { createEventDispatcher } from "svelte";
  import Flatpickr from "svelte-flatpickr";

  const dispatch = createEventDispatcher();

  export let selectedDates: Date[] = [];

  export let checkIn: string | undefined = undefined;
  export let checkOut: string | undefined = undefined;
  let dateInput: any;
  let flatpickrInstance: any;
  let datePickerBadge: DatePickerBadge;
  let nights: number = 0;

  const flatpickrOptions: any = {
    enableTime: false,
    dateFormat: "Y-m-d",
    mode: "range",
    inline: true,
    showMonths: 1,
    defaultDate: selectedDates,
    monthSelectorType: "static",
    altInputClass: "text",
    position: "auto",
    onChange(selectedDates: Date[], dateStr: string, instance: any) {
      checkIn = selectedDates[0] && formatDate(String(selectedDates[0]));
      checkOut = selectedDates[1] && formatDate(String(selectedDates[1]));

      nights = calculateNights(selectedDates);
      if (datePickerBadge) {
        datePickerBadge.$destroy();
      }

      dispatch("dates-change", { selectedDates });

      const calendarContainer = instance?.calendarContainer;
      if (calendarContainer) {
        calendarContainer.classList.add("lab");

        if (nights < 1) {
          datePickerBadge.$destroy();
        } else {
          datePickerBadge = new DatePickerBadge({
            target: calendarContainer,
            props: { nights },
          });
        }
      }
    },
    onReady: (selectedDates: Date[], dateStr: string, instance: any) => {
      const yearInput = instance?.yearElements[0];
      if (yearInput) {
        yearInput.disabled = true;
      }
      const calendarContainer = instance?.calendarContainer;
      if (calendarContainer) {
        calendarContainer.classList.add("lab");
      }
    },
  };

  onDestroy(() => {
    if (flatpickrInstance) {
      flatpickrInstance.destroy();
    }
  });
</script>

<div class="relative flex items-center gap-1 sm:gap-4">
  <Flatpickr
    options={flatpickrOptions}
    class="hidden"
    bind:value={selectedDates}
    name="date"
  />
</div>

<style lang="postcss">
  :global(.lab.flatpickr-calendar) {
    @apply bg-white/80 !w-auto;
  }

  :global(span.flatpickr-weekday) {
    @apply text-gray;
  }

  :global(.lab.flatpickr-calendar) {
    @apply px-6;
  }

  @media (min-width: 480px) {
    :global(.lab.flatpickr-calendar) {
      padding-left: 3rem /* 48px */;
      padding-right: 3rem /* 48px */;
    }
  }
</style>
