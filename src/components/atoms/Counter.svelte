<script lang="ts">
  import { MinusCircleIcon } from "svelte-feather-icons";
  import { PlusCircleIcon } from "svelte-feather-icons";
  export let count: number = 0;
  export let maxValue: number = 99;
  export let gradient: boolean = false;

  $: ({ class: classList, ...rest } = $$props);
</script>

<div class="{classList} {gradient ? 'bg-gradient-to-r from-purple-dark to-purple-darker' : 'bg-purple-lighter'} flex h-full items-center gap-2 justify-between w-32 rounded-full p-1.5">
  <button class="" on:click={() => (count < 1 ? (count = 0) : count--)}>
    <MinusCircleIcon size="32" class="text-white" />
  </button>
  <span class="font-bold text-white">{count}</span>
  <button disabled={count === maxValue} on:click={() => count++}>
    <PlusCircleIcon size="32" class="text-white" />
  </button>
</div>
