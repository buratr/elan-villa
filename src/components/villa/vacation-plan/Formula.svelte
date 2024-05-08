<script lang="ts">
  import Button from "@components/atoms/Button.svelte";

  export let active: boolean = false;
</script>

<button
  class="{active
    ? 'active-select'
    : ''} flex relative flex-col text-center justify-center rounded-[30px] max-w-[260px] pt-16 bg-white/80 shadow-select px-10 pb-6 gap-4 items-center"
>
  <div
    class="p-4 absolute bg-gradient-to-r from-purple-dark to-purple-darker rounded-full -top-[55px]"
  >
    <slot />
  </div>
  <span class="text-[30px] font-athena {active ? 'text-white' : ''}"
    >Casual trip</span
  >
  <span class="text-purple text-sm {active ? 'text-purple-light' : ''}"
    >-50 % off services fees</span
  >
  <Button style={active ? "primary" : "outlined"}>Select</Button>
</button>
