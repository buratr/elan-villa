<script lang="ts">
  import Bedrooms from "@components/filters/Bedrooms.svelte";
  import Guests from "@components/filters/Guests.svelte";
  import FilterToggler from "@components/filters/FilterToggler.svelte";
  import SelectFilter from "./SelectFilter.svelte";
  import Radio from "@components/atoms/Radio.svelte";
  import type { RadioOption } from "@components/atoms/Radio.svelte";
  import PriceRange from "./PriceRange.svelte";
  import DatesFilter from "@components/filters/date/DatesFilter.svelte";
  import {
    filtersStore,
    getFilterValueById,
    setFilterValueById,
  } from "@lib/stores/filtersStore";
  import { filterOptions, type FilterOption } from "@lib/filters/filterOptions";

  const getFilterOptionsById = (id: string): FilterOption[] => {
    return filterOptions.find((x) => x.id === id)?.options || [];
  };

  let bedrooms: number = getFilterValueById("bedrooms") || 1;

  let guests = getFilterValueById("guests") || {
    adults: 0,
    children: 0,
    babies: 0,
    pets: 0,
  };

  let areaSelected: FilterOption[] = getFilterValueById("area") || [];

  let collectionSelected: FilterOption[] =
    getFilterValueById("collection") || [];

  let specificSelected: FilterOption[] = getFilterValueById("specific") || [];

  let selectedOrientation: RadioOption | undefined =
    getFilterValueById("orientation") || undefined;

  const getFilterValues = () => {
    bedrooms = getFilterValueById("bedrooms") || undefined;
    guests = getFilterValueById("guests") || {
      adults: 0,
      children: 0,
      babies: 0,
      pets: 0,
    };
    areaSelected = getFilterValueById("area") || [];
    collectionSelected = getFilterValueById("collection") || [];
    specificSelected = getFilterValueById("specific") || [];
    selectedOrientation = getFilterValueById("orientation") || undefined;
  };

  $: guestsSum =
    guests?.adults + guests?.children + guests?.babies + guests?.pets;

  $: if (selectedOrientation) {
    setFilterValueById("orientation", selectedOrientation);
  }

  $: if (guests) {
    setFilterValueById("guests", guests);
  }

  let dateFilter: number | undefined = undefined;
  let priceFilter: number | undefined = undefined;

  $: if ($filtersStore) {
    getFilterValues();
    guestsSum = guests?.adults + guests?.children + guests?.babies + guests?.pets;
    if (
      getFilterValueById("eventsFilter") ||
      getFilterValueById("seasonFilter") ||
      getFilterValueById("datesFilter")?.length > 0
    ) {
      dateFilter = 1;
    } else {
      dateFilter = undefined;
    }

    if (getFilterValueById("weekRange") || getFilterValueById("nightRange")) {
      priceFilter = 1;
    } else {
      priceFilter = undefined;
    }
  }
</script>

<div class="flex flex-col bg-white py-32 px-28">
<FilterToggler
  title="dates"
  bind:selectedValue={dateFilter}
  filters={["eventsFilter", "seasonFilter", "datesFilter"]}
>
  <DatesFilter />
</FilterToggler>

<FilterToggler
  selectedValue={areaSelected.length}
  title="area"
  filters={["area"]}
>
  <SelectFilter
    bind:selectedOptions={areaSelected}
    selectOptions={getFilterOptionsById("area")}
    on:filter-change={(e) => {
      setFilterValueById("area", e.detail.selectedOptions);
    }}
  />
</FilterToggler>

<FilterToggler
  selectedValue={selectedOrientation ? 1 : undefined}
  title="orientation"
  filters={["orientation"]}
>
  <Radio
    options={getFilterOptionsById("orientation")}
    bind:userSelected={selectedOrientation}
    filters={["orientation"]}
  />
</FilterToggler>

<FilterToggler
  selectedValue={guestsSum > 0 ? 1 : undefined}
  title="guests"
  filters={["guests"]}
>
  <Guests bind:guests />
</FilterToggler>

<FilterToggler selectedValue={bedrooms} title="bedrooms" filters={["bedrooms"]}>
  <Bedrooms
    bind:selectedValue={bedrooms}
    on:filter-change={(e) => {
      setFilterValueById("bedrooms", e.detail.selectedValue);
    }}
  />
</FilterToggler>

<FilterToggler
  selectedValue={priceFilter}
  title="price range"
  filters={["weekRange", "nightRange"]}
>
  <PriceRange />
</FilterToggler>

<FilterToggler
  selectedValue={collectionSelected.length}
  filters={["collection"]}
  title="collection"
>
  <SelectFilter
    bind:selectedOptions={collectionSelected}
    selectOptions={getFilterOptionsById("collection")}
    on:filter-change={(e) => {
      setFilterValueById("collection", e.detail.selectedOptions);
    }}
  />
</FilterToggler>

<FilterToggler
  selectedValue={specificSelected.length}
  filters={["specific"]}
  title="specific"
>
  <SelectFilter
    bind:selectedOptions={specificSelected}
    selectOptions={getFilterOptionsById("specific")}
    on:filter-change={(e) => {
      setFilterValueById("specific", e.detail.selectedOptions);
    }}
  />
</FilterToggler>
</div>