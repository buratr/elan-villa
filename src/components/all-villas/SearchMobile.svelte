<script lang="ts">
  import Button from "@components/atoms/Button.svelte";
  import Select from "@components/atoms/Select.svelte";
  import FilterMobile from "./FilterMobile.svelte";
</script>

<div class="flex flex-col gap-8 items-center justify-center w-full">
  <div class="px-11 w-full">
    <FilterMobile />
  </div>

  <div class="flex w-full bg-white shadow-select p-3 justify-between items-center">
    <span class="font-athena text-[18px]">results 72</span>
    <Select
      class="max-w-[200px] !shadow-none"
      selectedValue="Sort by area"
      options={["Area 1", "Area 2", "Area 3"]}
    />
  </div>
  <Button style="primary">SAVE for later</Button>
</div>
