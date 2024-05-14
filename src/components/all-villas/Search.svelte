<script lang="ts">
  import Input from "@components/atoms/Input.svelte";
  import Button from "@components/atoms/Button.svelte";
  import Select from "@components/atoms/Select.svelte";
  import LordIcon from "@components/atoms/LordIcon.svelte";
</script>

<div class="lg:w-2/3 2xl:w-3/4 w-full lg:pl-0 pl-5 py-11 border-b flex items-center justify-between">
  <div class="flex gap-4">
    <Input
      right
      placeholder="Search by keywords, by villa names..."
      class="!px-6 bg-white shadow-main min-w-[350px]"
    >
      <LordIcon name="search" size="32" class="text-black" />
    </Input>
    <Button style="outlined" class="!py-[4px]">
      Open Map
      <LordIcon name="globe" size="32" class="text-purple-secondary group-hover:text-white" />
    </Button>
  </div>
  <div class="flex pr-16 items-center gap-8">
    <span class="font-athena text-[18px]">results 72</span>
    <Select
      class="max-w-[200px]"
      selectedValue="Sort by area"
      options={["Area - From most choices", "Area - From least choices", "Price - From higher", "Price - From lower", "Name - From A to Z", "Name - From Z to A"]}
    />
  </div>
</div>
