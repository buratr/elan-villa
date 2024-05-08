<script lang="ts">
  import { data } from "@lib/top-locations/all-villas";
  import Villa from "@components/all-villas/Villa.svelte";
  import Button from "@components/atoms/Button.svelte";
  import LordIcon from "@components/atoms/LordIcon.svelte";
  import { slide } from "svelte/transition";
  import MemberBadge from "./MemberBadge.svelte";

  let showAll = false;
</script>

{#each data.slice(0, 3) as item, index}
  <div class="md:pb-12 md:border-b">
    <div class="w-full lg:pr-24 lg:px-0 px-5 pt-12 md:bg-interit bg-mobile">
      <div class="flex pb-12 gap-8">
        <div class="flex gap-2 items-baseline text-white md:text-black">
          <span class="font-athena text-4xl">{item.title}</span>
          |
          <span class="text-xl">{item.side}</span>
        </div>
        <Button style="outlined" class="!py-[4px] hidden md:inherit">
          Open Map
          <LordIcon
            name="globe"
            size="32"
            class="text-purple-secondary group-hover:text-white"
          />
        </Button>
      </div>
      <div
        class="justify-between gap-4 md:gap-8 grid md:grid-cols-2 grid-cols-1"
      >
        {#each item.villas as villa}
          <Villa {villa} />
        {/each}
      </div>
    </div>

    <Button
      style="primary"
      class="md:hidden !fixed bottom-[100px] left-1/2 -translate-x-1/2"
    >
      Map
      <LordIcon name="globe" size="32" class="text-white" />
    </Button>
  </div>

  {#if index === 0}
    <div class="flex justify-center items-center py-10">
      <MemberBadge class="md:hidden w-[368px]" />
    </div>
  {/if}
{/each}

{#if showAll}
  <div
    transition:slide
    class="md:flex w-full justify-center flex-col items-center gap-4 pt-4"
  >
    {#each data.slice(3, data.length) as item, index}
      <div class="pb-12 border-b">
        <div class="w-full lg:pr-24 lg:px-0 px-5 pt-12 md:bg-interit bg-mobile">
          <div class="flex pb-12 gap-8">
            <div class="flex gap-2 items-baseline text-white md:text-black">
              <span class="font-athena text-4xl">{item.title}</span>
              |
              <span class="text-xl">{item.side}</span>
            </div>
            <Button style="outlined" class="!py-[4px] hidden md:inherit">
              Open Map
              <LordIcon
                name="globe"
                size="32"
                class="text-purple-secondary group-hover:text-white"
              />
            </Button>
          </div>
          <div
            class="justify-between gap-4 md:gap-8 grid md:grid-cols-2 grid-cols-1"
          >
            {#each item.villas as villa}
              <Villa {villa} />
            {/each}
          </div>
        </div>

        <Button
          style="primary"
          class="md:hidden !fixed bottom-[100px] left-1/2 -translate-x-1/2"
        >
          Map
          <LordIcon name="globe" size="32" class="text-white" />
        </Button>
      </div>
    {/each}
  </div>
{/if}

<div
  class="flex justify-center items-center pt-20 md:pt-10 {showAll
    ? 'hidden'
    : 'flex'}"
>
  <Button on:click={() => (showAll = true)} style="outlined"
    >all extra services</Button
  >
</div>

<style lang="postcss">
  @media screen and (max-width: 960px) {
    .bg-mobile {
      background: linear-gradient(
          80.92deg,
          #000000 2.55%,
          rgba(0, 0, 0, 0.09) 83.13%,
          rgba(255, 255, 255, 0.06) 156.39%
        ),
        linear-gradient(0deg, #1e1e1e, #1e1e1e);
    }
  }
</style>
