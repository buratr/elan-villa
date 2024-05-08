<script lang="ts">
  import "flatpickr/dist/flatpickr.css";
  import flatpickr from "flatpickr";
  import { onMount, onDestroy } from "svelte";
  import Label from "@components/atoms/Label.svelte";
  import IconArrowLeft from "@assets/svgs/icons/arrow-left.svg?component";
  import { calculateNights, formatDate } from "@utils/formatter";
  import DatePickerBadge from "./DatePickerBadge.svelte";

  export let labelIn: string = "Select date";
  export let labelOut: string = "Select date";
  let checkIn: string | undefined;
  let checkOut: string | undefined;
  let dateInput: any;
  let flatpickrInstance: any;
  let datePickerBadge: DatePickerBadge;
  let nights: number = 0;

  const flatpickrOptions: any = {
    enableTime: false,
    dateFormat: "Y-m-d",
    mode: "range",
    inline: false,
    showMonths: 2,
    monthSelectorType: "static",
    altInputClass: "text",
    position: "above center",
    onChange(selectedDates: Date[], dateStr: string, instance: any) {
      checkIn = selectedDates[0] && formatDate(String(selectedDates[0]));
      checkOut = selectedDates[1] && formatDate(String(selectedDates[1]));
      nights = calculateNights(selectedDates);
      if (datePickerBadge) {
        datePickerBadge.$destroy();
      }

      const calendarContainer = instance?.calendarContainer;
      if (calendarContainer) {
        calendarContainer.classList.add("separate");

        // datePickerBadge = new DatePickerBadge({
        //   target: calendarContainer,
        //   props: { nights },
        // });
      }
    },
    onReady: (selectedDates: Date[], dateStr: string, instance: any) => {
      const yearInput = instance?.yearElements[0];
      if (yearInput) {
        yearInput.disabled = true;
      }
      const calendarContainer = instance?.calendarContainer;
      if (calendarContainer) {
        calendarContainer.classList.add("separate");
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
    <DatePickerBadge {nights} />
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
  :global(
      .separate.flatpickr-calendar.open,
      .separate.flatpickr-calendar.inline
    ) {
    @apply !w-auto;
  }

  :global(.separate.flatpickr-calendar .flatpickr-months) {
    @apply !whitespace-nowrap;
  }
  :global(.flatpickr-calendar) {
    @apply px-12 py-11 w-auto rounded-[30px];
  }

  :global(.flatpickr-current-month input.cur-year) {
    @apply font-semibold !text-black;
  }

  :global(.flatpickr-current-month) {
    @apply !p-0;
  }

  :global(.numInputWrapper) {
    @apply text-2xl font-semibold !w-20;
  }

  :global(.numInputWrapper:hover) {
    @apply !bg-transparent;
  }

  :global(.numInputWrapper span.arrowUp, .numInputWrapper span.arrowDown) {
    @apply !hidden;
  }

  :global(.flatpickr-prev-month, .flatpickr-next-month) {
    @apply stroke-black stroke-2;
  }

  :global(.flatpickr-prev-month:hover, .flatpickr-next-month:hover) {
    @apply scale-125 transition-all;
  }

  :global(.flatpickr-prev-month) {
    @apply whitespace-nowrap;
  }

  :global(.cur-month) {
    @apply text-2xl !m-0;
  }

  :global(.flatpickr-weekdays) {
    @apply mb-3 mt-4;
  }

  :global(.cur-month:hover) {
    @apply !bg-transparent;
  }

  :global(.flatpickr-months) {
    @apply relative;
  }

  :global(.flatpickr-weekdaycontainer) {
    @apply text-xs;
  }

  :global(span.flatpickr-weekday) {
    @apply text-purple-light;
  }

  :global(.flatpickr-day) {
    @apply text-base font-semibold flex items-center !rounded-none !border-none max-w-none !mt-0 transition-all;
  }

  :global(.flatpickr-day:hover) {
    @apply bg-purple-light;
  }

  :global(.flatpickr-day.inRange) {
    @apply bg-black !shadow-none;
    @apply text-white;
  }

  :global(.flatpickr-days .dayContainer) {
    @apply gap-y-1;
    @apply !justify-start;
  }

  :global(.flatpickr-day.today.inRange) {
    @apply bg-black;
  }

  :global(
      .flatpickr-day.selected,
      .flatpickr-day.endRange,
      .flatpickr-day.startRange
    ) {
    @apply !bg-purple-light !border-none !bg-gradient-to-r from-purple-dark to-purple-darker;
  }

  :global(
      .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n + 1)),
      .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n + 1)),
      .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n + 1))
    ) {
    @apply !bg-purple-light !border-none;
    box-shadow: -10px 0 0 #c09ff9;
  }
  :global(.flatpickr-calendar .flatpickr-innerContainer) {
    @apply !justify-center;
  }

  :global(.flatpickr-calendar.villas) {
    @apply px-8;
  }

  :global(.flatpickr-calendar.villas-mobile) {
    @apply px-0 border-0 shadow-none;
  }

  :global(.flatpickr-calendar:before, .flatpickr-calendar:after) {
    content: none !important;
  }
</style>
