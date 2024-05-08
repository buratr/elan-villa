<script lang="ts">
  import Counter from "@components/atoms/Counter.svelte";
  import Label from "@components/atoms/Label.svelte";
  import GuestsIcon from "@assets/icons-json/313-two-avatar-icon-calm.rough.json?url";
  import LordIcon from "@components/atoms/LordIcon.svelte";
</script>

<div class="flex justify-between lg:border-r border-purple-secondary px-6 items-center gap-4">
  <div class="flex items-center gap-2">
    <LordIcon src={GuestsIcon} size="50" class="text-purple-secondary" />
    <Label>Guests</Label>
  </div>
  <Counter gradient />
</div>
