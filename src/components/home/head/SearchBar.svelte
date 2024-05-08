<script lang="ts">
  import SearchArea from "./SearchArea.svelte";
  import SearchGuests from "./SearchGuests.svelte";
  import SearchRange from "./SearchRange.svelte";
</script>

<div
  class="flex flex-wrap lg:flex-nowrap bg-white/50 rounded-full shadow-main p-2 lg:p-0 lg:py-2 w-full"
>
  <div class="flex lg:basis-1/2 w-full">
    <div class="basis-1/2">
      <SearchArea />
    </div>
    <div class="basis-1/2">
      <SearchGuests />
    </div>
  </div>

  <div class="w-full lg:basis-1/2 pt-4 lg:pt-0">
    <SearchRange />
  </div>
</div>
