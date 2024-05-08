<script lang="ts">
  import Button from "@components/atoms/Button.svelte";
  import DatePicker from "./DatePicker.svelte";
  import IconCalendar from "@assets/icons-json/28-calendar.rough.json?url";
  import LordIcon from "@components/atoms/LordIcon.svelte";
</script>

<div class="flex justify-between px-6">
  <div class="flex items-center gap-4">
    <LordIcon src={IconCalendar} size="50" class="text-purple-secondary" />
    <DatePicker labelIn="Check in" labelOut="Check out" />
  </div>
  <Button style="primary">
    SEARCH
    <LordIcon name="search" size="24" class="text-white" />
  </Button>
</div>
