<script lang="ts">
  import LocationSelect from "./LocationSelect.svelte";
  const locations = [
    {
      id: 1,
      description: "Gouverneur Beach",
      info: "1,2km - Beach",
    },
    {
      id: 2,
      description: "Gustaf III Airport",
      info: "4,8 Km - Airport",
    },
    {
      id: 3,
      description: "Gustavia",
      info: "3,2 Km - Town",
    },
    {
      id: 4,
      description: "Santa Fe",
      info: "800m - Restaurant",
    },
    {
      id: 5,
      description: "Hospital Center of Bruyn",
      info: "3,5 Km - Hospital",
    },
    {
      id: 6,
      description: "Super U",
      info: "4,8 Km - Supermarket",
    },
  ];

  let selectedLocation = locations[0];
</script>

<div class="md:grid grid-cols-3 gap-y-6 gap-x-16 md:w-fit flex flex-col w-full">
  <LocationSelect {locations} bind:selected={selectedLocation} />
</div>