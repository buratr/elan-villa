<script lang="ts">
  import Circle from "@components/atoms/Circle.svelte";

  export let locations: any;
  export let selected: any = locations[0];
</script>

{#each locations as location}
  <button class="flex flex-col" on:click={() => (selected = location)}>
    <div class="flex gap-3 items-start">
      <Circle selected={selected.id === location.id}></Circle>
      <div class="flex flex-col items-start gap-1">
        <span
          class:text-purple={selected.id === location.id}
          class="font-semibold hover:text-purple transition-all">{location.description}</span
        >
        <span class="text-xs">
          {location.info}
        </span>
      </div>
    </div>
  </button>
{/each}

<style>
  .circle {
    width: 27px;
    height: 27px;
    position: relative;
    transition: all;
  }

  .circle::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: linear-gradient(180deg, #50156b 0%, #3e127f 100%);
    /* border: 1px solid; */

    -webkit-mask: radial-gradient(
      farthest-side,
      transparent calc(100% - 1px),
      #fff 0
    );
  }

  .selected.circle::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: linear-gradient(180deg, #50156b 0%, #3e127f 100%);
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    /* border: 1px solid; */
  }
</style>
