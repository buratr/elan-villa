<script lang="ts">
  import Link from "@components/atoms/Link.svelte";
  import { slide } from "svelte/transition";
  import LittleArrow from"@assets/svgs/icons/littleArrow.svg?component"

  let outerWidth:number;
  let isMobile: boolean = false;
  let open: boolean = true;

  $:{
  if(outerWidth < 960){
    isMobile=true;
    open=false;
  }else{
    isMobile=false
    open=true;
  }
}

</script>

<svelte:window bind:outerWidth />

<div class="flex w-full flex-col lg:flex-row justify-center lg:justify-between align-baseline lg:pt-16 lg:pb-12 lg:px-20 font-light lg:items-baseline">
  <span class="max-md:pt-8 text-xs md:text-base text-white order-1 lg:order-none text-center">
    Elan Immo Saint Barth © 2023 | All rights reserved</span
  >
  
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  {#if isMobile}
  <div
    on:click={() =>  {if(isMobile){open = !open}}}
    class="{isMobile?"mb-8 flex items-center justify-between w-full":""}"
    >
    <p class=" text-base text-white font-medium">Legal</p>
    <LittleArrow width="8" stroke="#fff" class="{open?"rotate-90":""} transition-all"/>
  </div>
  {/if}
  {#if open }
    <div transition:slide class="flex flex-wrap md:flex-nowrap lg:gap-24 lg:text-xl justify-evenly gap-6 pb-6 lg:pb-0 items-center">
      <Link class="hidden md:block" href="/">Terms & conditions</Link>
      <Link href="/">Privacy</Link>
      <Link href="/">Disclosure</Link>
      <Link href="/">Cookies</Link>
      <Link href="/">CGV</Link>
    </div>
  {/if}
</div>
