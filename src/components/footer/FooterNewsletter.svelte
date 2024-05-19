<script lang="ts">
  import Button from "@components/atoms/Button.svelte";
  import Input from "@components/atoms/Input.svelte";
  import IconNotification from "@assets/icons-json/144-envelope-mail-notification.rough.json?url";
  import LordIcon from "@components/atoms/LordIcon.svelte";
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

<div class="flex flex-col pt-16 max-md:pt-8">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
  on:click={() =>  {if(isMobile){open = !open}}}
  class="{isMobile?"flex items-center justify-between w-full":"items-end max-w-[60%]"}  gap-8  md:max-w-none"
  >
    {#if !isMobile}
      <p class="uppercase text-xl text-purple-light font-medium">NEWSLETTER</p>
      <p class="font-athena text-3xl text-white pt-2 tracking-widest pb-8">Subscribe to our Newsletter</p>
    {:else}
   
      <p class=" text-base text-white font-medium">Newsletter</p>
      
    
      
      <LittleArrow width="8" stroke="#fff" class="{open?"rotate-90":""} transition-all"/>
    {/if}

  </div>
  
  {#if open }
  <div transition:slide class="flex gap-4 flex-wrap">
    {#if isMobile}
    <p class="font-athena text-3xl text-white pt-2 tracking-widest pb-8">Subscribe to our Newsletter</p>
    {/if}
    <Input
      class="min-w-[260px] placeholder:text-center placeholder:italic"
      placeholder="Enter your email"
    >
      <LordIcon slot="icon" src="{IconNotification}" size="50" class="text-purple" />
    </Input>
    <Button style="primary">SUBSCRIBE</Button>
  </div>
  {/if}
</div>
