<script lang="ts">
  import Counter from "@components/atoms/Counter.svelte";
  import Label from "@components/atoms/Label.svelte";
  import Button from "@components/atoms/Button.svelte";
  import { locations } from "@lib/locations/locations";
  import DatePicker from "@components/home/head/DatePicker.svelte";
  import Area from "@components/home/head/Area.svelte";
  import IconCalendar from "@assets/icons-json/28-calendar.rough.json?url";
  import LordIcon from "@components/atoms/LordIcon.svelte";

  let selectedArea: string | undefined = undefined;
  let selectedDates: Date[] = [];

  let labelIn: string = "Check in";
  let labelOut: string = "Check out";

  let checkIn: string | undefined = undefined;
  let checkOut: string | undefined = undefined;

  let isPopupOpen = false;
  let clientHeight: number;

  let showArea = false;
  let showCalendar = false;

  const showFilter = (filter: "area" | "calendar") => {
    if (filter === "area") {
      showArea = true;
      showCalendar = false;
    } else {
      showArea = false;
      showCalendar = true;
    }
  };
</script>

<div class="flex flex-col bg-white/90 shadow-anchor rounded-[30px] h-fit">
  <div class="border-b-gray-border border-b flex justify-center py-8">
    <div class="relative">
      <span class="font-athena text-[60px]">BOOK</span>
      <span
        class="font-amsterdam absolute text-[25px] text-purple whitespace-nowrap -bottom-3 -right-8 -rotate-12"
        >your stay</span
      >
    </div>
  </div>
  <div class="border-b-gray-border border-b flex flex-col">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="flex items-center gap-2 ms:gap-4 px-4 sm:px-11 py-6"
      bind:clientHeight
    >
      <!-- <IconLocation
        width="50"
        class="stroke-purple-secondary !w-auto !h-auto"
      />
      <Label>{selectedArea ? selectedArea : "Area"}</Label> -->
      <LordIcon name="location-pin" size="50" class="text-purple-secondary" />
      <button on:click|stopPropagation={() => (isPopupOpen = !isPopupOpen)}>
        <Label>{selectedArea ? selectedArea : "Area"}</Label>
      </button>
      <Area
        book
        {locations}
        bind:selectedArea
        bind:isOpen={isPopupOpen}
        parentHeight={clientHeight}
      />
    </div>
  </div>
  <div class="border-b-gray-border border-b flex flex-col">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="flex items-center gap-2 ms:gap-4 px-4 sm:px-11 py-6">
      <LordIcon src={IconCalendar} size="50" class="text-purple-secondary" />
      <div class="relative flex items-center gap-1 sm:gap-4">
        <DatePicker labelIn="Check in" labelOut="Check out" />
      </div>
    </div>
  </div>
  <div
    class="border-b-gray-border border-b flex items-center px-4 sm:px-11 !pr-11 py-6 justify-between gap-2 ms:gap-4"
  >
    <div class="flex items-center gap-4">
      <LordIcon name="bedroom" size="50" class="text-purple-secondary" />
      <Label>Bedrooms</Label>
    </div>
    <Counter gradient />
  </div>
  <div
    class="border-b-gray-border border-b flex items-center px-4 sm:px-11 !pr-11 py-6 justify-between gap-2 ms:gap-4"
  >
    <div class="flex items-center gap-4 justify-between">
      <span class="text-md text-gray-dark font-medium tracking-[4px]"
        >TOTAL :
      </span>
    </div>
    <span
      class="text-[20px] font-bold border-b border-gray-darker text-gray-darker tracking-wide"
      >80,000$</span
    >
  </div>
  <div
    class="border-b-gray-border border-b flex items-center justify-center px-11 py-8 uppercase"
  >
    <Button style="primary">
      book now
      <LordIcon name="search" size="32" class="text-white" />
    </Button>
  </div>
</div>
