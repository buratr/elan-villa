<script lang="ts">
  import "flatpickr/dist/flatpickr.css";
  import flatpickr from "flatpickr";
  import { onMount, onDestroy } from "svelte";
  import Label from "@components/atoms/Label.svelte";
  import IconArrowLeft from "@assets/svgs/icons/arrow-left.svg?component";
  import { calculateNights, formatDate } from "@utils/formatter";
  import RangePickerBadge from "./RangePickerBadge.svelte";

  export let labelIn: string = "Select date";
  export let labelOut: string = "Select date";
  let checkIn: string | undefined;
  let checkOut: string | undefined;
  let dateInput: any;
  let flatpickrInstance: any;
  let datePickerBadge: RangePickerBadge;
  let nights: number = 0;

  const flatpickrOptions: any = {
    enableTime: false,
    dateFormat: "Y-m-d",
    mode: "range",
    inline: false,
    showMonths: 1,
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

      const calendarContainer = instance?.calendarContainer;
      if (calendarContainer) {
        calendarContainer.classList.add("centered");

        datePickerBadge = new RangePickerBadge({
          target: calendarContainer,
          props: { nights },
        });
      }
    },
    onReady: (selectedDates: Date[], dateStr: string, instance: any) => {
      const yearInput = instance?.yearElements[0];
      if (yearInput) {
        yearInput.disabled = true;
      }
      const calendarContainer = instance?.calendarContainer;
      if (calendarContainer) {
        calendarContainer.classList.add("centered");
      }
    },
  };

  onMount(() => {
    flatpickrInstance = flatpickr(dateInput, {
      ...flatpickrOptions,
      disableMobile: true,
    });
  });

  onDestroy(() => {
    if (flatpickrInstance) {
      flatpickrInstance.destroy();
    }
  });
</script>

<div class="relative flex items-center gap-1 sm:gap-4">
  {#if nights > 0}
    <RangePickerBadge {nights} />
  {/if}
  <input bind:this={dateInput} class="h-0 w-0 absolute -top-24" type="text" />
  <button on:click={() => flatpickrInstance.open()}>
    <Label>{checkIn ? checkIn : labelIn}</Label>
  </button>
  <IconArrowLeft
    width="16"
    class="stroke-purple-secondary !w-auto !h-auto stroke-6 !rotate-180"
  />
  <button on:click={() => flatpickrInstance.open()}>
    <Label>{checkOut ? checkOut : labelOut}</Label>
  </button>
</div>

<style lang="postcss">
  :global(.centered.flatpickr-calendar) {
    @apply !top-full !left-1/2 !-translate-x-1/2 !-translate-y-full;
  }
</style>
