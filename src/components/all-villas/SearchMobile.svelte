<script lang="ts">
  import Button from "@components/atoms/Button.svelte";
  import Select from "@components/atoms/Select.svelte";
  import FilterMobile from "./FilterMobile.svelte";
</script>

<div class="flex flex-col gap-8 items-center justify-center w-full">
  <div class="px-11 w-full">
    <FilterMobile />
  </div>
  <div class="text-xs text-center">
    <div>
       Le 30 January 2023, à 17h36, votre recherche compte <br/>
        <span class="font-semibold">120 villas</span>  disponibles <span class="font-semibold">du TI Mars au 21 Avril</span>. <br/>
    </div>
    <div class="mt-2">
      Les Villas qui suivent n'attendent que vous et vos invités!
    </div>
  </div>
  <Button style="primary">SAVE for later</Button>

  <div class="flex w-full bg-white shadow-select p-3 justify-between items-center">
    <span class="font-athena text-[18px]">results 72</span>
    <Select
      class="max-w-[200px] !shadow-none"
      selectedValue="Sort by area"
      options={["Area - From most choices", "Area - From least choices", "Price - From higher", "Price - From lower", "Name - From A to Z", "Name - From Z to A"]}
    />
  </div>
  
</div>
