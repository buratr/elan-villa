<script lang="ts">
  import Link from "@components/atoms/Link.svelte";
  import IconYouTube from "@assets/svgs/icons/icons8-youtube.svg?component";
  import IconInstagram from "@assets/svgs/icons/icons8-instagram.svg?component";
  import IconTikTok from "@assets/svgs/icons/icons8-tiktok.svg?component";
  import { slide } from "svelte/transition";
  import LittleArrow from"@assets/svgs/icons/littleArrow.svg?component"

  let outerWidth:number;
  let isMobile: boolean = false;
  let openSocials: boolean = true;
  let openCompany: boolean = true;

$:{
  if(outerWidth < 960){
    isMobile=true;
    openSocials=false;
    openCompany=false;
  }else{
    isMobile=false;
    openSocials=true;
    openCompany=true;
  }
}

</script>

<svelte:window bind:outerWidth />

<div class="max-md:pt-8 max-md:gap-0 flex flex-col md:flex-row gap-10 pt-16 justify-around w-full lg:w-auto">
  
  <div>
    
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      on:click={() =>  {if(isMobile){openSocials = !openSocials}}}
      class="{isMobile?"mb-8 flex items-center justify-between w-full":""}"
      >
      {#if !isMobile}
        <p class="font-athena text-3xl text-white tracking-widest pb-8">Socials</p>
      {:else}
    
        <p class=" text-base text-white font-medium">Socials</p>
        <LittleArrow width="8" stroke="#fff" class="{openSocials?"rotate-90":""} transition-all"/>
      {/if}
    </div>
    
    {#if openSocials }
    <div  transition:slide class="flex flex-col text-xl font-light gap-y-6 pl-4 max-md:pb-8 ">
      <div class="flex gap-4 items-center">
        <IconYouTube
          width="24"
          class="stroke-2 fill-purple-light"
          fill="purple-light"
        />
        <Link href="/">Youtube</Link>
      </div>
      <div class="flex gap-4 items-center">
        <IconTikTok
          width="24"
          class="stroke-2 fill-purple-light"
          fill="purple-light"
        />
        <Link href="/">Tik tok</Link>
      </div>
      <div class="flex gap-4 items-center">
        <IconInstagram
          width="24"
          class="stroke-2 fill-purple-light"
          fill="purple-light"
        />
        <Link href="/">Instagram</Link>
      </div>
    </div>
    {/if}
  </div>


  <div class="hidden md:block">
    <p class="font-athena text-3xl text-white tracking-widest pb-8">Explore</p>
    <div class="flex flex-col font-light text-xl gap-y-6 pl-4">
      <Link href="/all_villas">All villas</Link>
      <Link href="/">Map</Link>
      <Link href="/travel_lab">Travel Lab’</Link>
      <Link href="/">Trusted Providers</Link>
      <Link href="/">Saint Barthélémy</Link>
      <Link href="/">Vacation tips</Link>
    </div>
  </div>

  <div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      on:click={() =>  {if(isMobile){openCompany = !openCompany}}}
      class="{isMobile?"mb-8 flex items-center justify-between w-full":""}">

      {#if !isMobile}
        <p class="font-athena text-3xl text-white tracking-widest pb-8">Company</p>
      {:else}
        <p class=" text-base text-white font-medium">Company</p>
        <LittleArrow width="8" stroke="#fff" class="{openCompany?"rotate-90":""} transition-all"/>
      {/if}
    </div>
    
    {#if openCompany }
      <div transition:slide class="flex flex-col text-xl font-light gap-y-6 pl-4 max-md:pb-8">
        <Link href="/contact">About us</Link>
        <Link href="/">Elan Rewards</Link>
        <Link href="/">Elan Real Estate</Link>
        <Link href="/">Elan Manager</Link>
        <Link href="/">Elan Voyages</Link>
      </div>
    {/if}
  </div>
</div>
