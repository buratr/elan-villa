<script lang="ts" context="module">
  import type { SvelteComponentTyped } from "svelte";
  import { fade, slide } from "svelte/transition";

  export type Tab = {
    label: string;
    value: number;
    component: typeof SvelteComponentTyped;
  };
</script>

<script lang="ts">
  export let items: Tab[] = [];
  export let activeTabValue: number = 1;
  export let tabsClass: string = "";
  export let activeTabClass: string = "bg-black text-white";
  export let transition: boolean = false;

  const handleClick = (tabValue: number) => () => {
    activeTabValue = tabValue;
  };

  $: ({ class: classList, ...rest } = $$props);
</script>

<div
  class="{classList} flex items-center justify-around rounded-[30px] shadow-select p-2 mb-14 bg-white"
>
  {#each items as item}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      on:click={handleClick(item.value)}
      class="{activeTabValue === item.value
        ? activeTabClass + ' rounded-[30px] shadow-select'
        : ''} px-4 transition-all cursor-pointer hover:scale-105 text-center"
    >
      <span>{item.label}</span>
    </div>
  {/each}
</div>

{#each items as item}
  {#if activeTabValue === item.value}
    {#if transition}
      <div class={tabsClass} transition:slide>
        <svelte:component this={item.component} />
      </div>
    {:else}
      <div class={tabsClass}>
        <svelte:component this={item.component} />
      </div>
    {/if}
  {/if}
{/each}
