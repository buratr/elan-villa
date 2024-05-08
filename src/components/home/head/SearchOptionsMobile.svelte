<script lang="ts">
  import Counter from "@components/atoms/Counter.svelte";
  import Label from "@components/atoms/Label.svelte";
  import Button from "@components/atoms/Button.svelte";
  import AreaMobile from "@components/home/head/AreaMobile.svelte";
  import { locations } from "@lib/locations/locations";
  import DatePickerMobile from "./DatePickerMobile.svelte";
  import IconArrowLeft from "@assets/svgs/icons/arrow-left.svg?component";
  import { formatDate } from "@utils/formatter";
  import LordIcon from "@components/atoms/LordIcon.svelte";
  import IconGuests from "@assets/icons-json/313-two-avatar-icon-calm.rough.json?url";
  import IconCalendar from "@assets/icons-json/28-calendar.rough.json?url";

  let selectedArea: string | undefined = undefined;
  let selectedDates: Date[] = [];

  let labelIn: string = "Check in";
  let labelOut: string = "Check out";

  let checkIn: string | undefined = undefined;
  let checkOut: string | undefined = undefined;

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

<div class="flex flex-col bg-white">
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="border-b-purple-secondary border-b flex flex-col">
    <div
      class="flex items-center gap-2 ms:gap-4 px-4 sm:px-11 py-6"
      on:click={() => showFilter("area")}
    >
      <LordIcon name="location-pin" size="50" class="text-purple-secondary" />
      <Label>{selectedArea ? selectedArea : "Area"}</Label>
    </div>
    {#if showArea}
      <AreaMobile
        {locations}
        onSelectArea={(title) => (selectedArea = title)}
      />
    {/if}
  </div>
  <div class="border-b-purple-secondary border-b flex flex-col">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="flex items-center gap-2 ms:gap-4 px-4 sm:px-11 py-6"
      on:click={() => showFilter("calendar")}
    >
      <LordIcon src={IconCalendar} size="50" class="text-purple-secondary" />
      <div class="relative flex items-center gap-1 sm:gap-4">
        <Label>{checkIn ? checkIn : labelIn}</Label>
        <IconArrowLeft
          width="16"
          class="stroke-purple-secondary !w-auto !h-auto stroke-6 !rotate-180"
        />
        <Label>{checkOut ? checkOut : labelOut}</Label>
      </div>
    </div>
    {#if showCalendar}
      <div class="flex items-center justify-center pb-8">
        <DatePickerMobile
          on:dates-change={(e) => {
            selectedDates = e.detail.selectedDates;
            checkIn = selectedDates[0] && formatDate(String(selectedDates[0]));
            checkOut = selectedDates[1] && formatDate(String(selectedDates[1]));
          }}
          {selectedDates}
        />
      </div>
    {/if}
  </div>
  <div
    class="border-b-purple-secondary border-b flex items-center px-4 sm:px-11 !pr-11 py-6 justify-between gap-2 ms:gap-4"
  >
    <div class="flex items-center gap-4">
      <LordIcon src={IconGuests} size="50" class="text-purple-secondary" />
      <Label>Guests</Label>
    </div>
    <Counter gradient />
  </div>
  <div
    class="border-b-purple-secondary border-b flex items-center justify-center px-11 py-4"
  >
    <Button style="primary">
      SEARCH
      <LordIcon name="search" size="32" class="text-purple" />
    </Button>
  </div>
</div>
