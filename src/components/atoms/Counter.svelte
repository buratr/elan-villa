<script lang="ts">
  import { MinusCircleIcon } from "svelte-feather-icons";
  import { PlusCircleIcon } from "svelte-feather-icons";
  import MinusCount from "@assets/svgs/icons/minusCount.svg?component"
  import PlusCount from "@assets/svgs/icons/plusCount.svg?component"
  export let count: number = 0;
  export let maxValue: number = 99;
  export let gradient: boolean = false;

  $: ({ class: classList, ...rest } = $$props);

  function handleInputChange() {
    count = Number(count)
    if(count<0){
      count = 0
    }
  }

</script>

<div class="{classList} {gradient ? 'bg-gradient-to-r from-purple-dark to-purple-darker' : 'bg-purple-lighter'} flex h-full items-center justify-center gap-2  w-32 rounded-full p-1.5">
  <button class="mr-auto" on:click={() => (count < 1 ? (count = 0) : count--)}>
    <!-- <MinusCircleIcon size="32" class="text-white" /> -->
    <MinusCount width="32"/>
  </button>
  <!-- <span class="font-bold text-white">{count}</span> -->
  <input class="mx-auto absolute left-auto right-auto font-bold text-white w-[35px] bg-transparent text-center" type="number" bind:value={count} on:input={handleInputChange}>
  <button disabled={count === maxValue} on:click={() => count++}>
    <!-- <PlusCircleIcon size="32" class="text-white" /> -->
    <PlusCount width="32"/>
  </button>
</div>

<style>
  input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input:active{
  border: 0;
  border-color: transparent;
  box-shadow: 0px 0px 0px 0px #000 !important;
  outline: none;
}
input:focus-visible{
  border: 0;
  border-color: transparent;
  box-shadow: 0px 0px 0px 0px #000 !important;
  outline: none;
}
input:focus{
  border: 0;
  border-color: transparent;
  box-shadow: 0px 0px 0px 0px #000 !important;
  outline: none;
}
</style>
