<script lang="ts">
  import { onMount } from "svelte";
  import LordIcon from "@components/atoms/LordIcon.svelte";
  import Button from "./atoms/Button.svelte";
  import CloseIcon from "@assets/svgs/icons/cross-svgrepo-com.svg?component";
  import IconButton from "./atoms/IconButton.svelte";
  import ultraLuxe from "@assets/images/652-40.png";

  export let isOpen: boolean;
  export let parentHeight = 0;

  let popup: HTMLDivElement;

  $: ({ class: classList, ...rest } = $$props);
</script>

<div
  bind:this={popup}
  style="top: {parentHeight + 16}px;"
  class="absolute z-30 right-[10%] p-8 {!isOpen
    ? 'hidden'
    : ''} bg-white shadow-select rounded-[30px]"
>
  <div class="flex w-full justify-end">
    <IconButton on:click={() => (isOpen = false)} dark class="!p-0">
      <CloseIcon
        width="24"
        height="24"
        class="stroke-6 stroke-white fill-white "
      />
    </IconButton>
  </div>
  <div class="flex flex-col justify-center">
    <div class="flex w-full items-baseline justify-center gap-4">
      <span class="text-[45px] font-athena leading-1">Share</span>
      <span class="text-[25px] font-amsterdam">this villa</span>
    </div>

    <div class="grid md:grid-cols-2 2-full gap-4 pt-8">
      <Button
        style="light"
        class="!shadow-select !text-black active:!text-white hover:!text-white"
      >
        <LordIcon
          name="share"
          size="22"
          class="text-black group-hover:text-white"
        />
        Copy link
      </Button>
      <Button
        style="light"
        class="!shadow-select !text-black active:!text-white hover:!text-white"
      >
        <LordIcon
          name="share"
          size="22"
          class="text-black group-hover:text-white"
        />
        E-mail address
      </Button>
      <Button
        style="light"
        class="!shadow-select !text-black active:!text-white hover:!text-white"
      >
        <LordIcon
          name="share"
          size="22"
          class="text-black group-hover:text-white"
        />
        Messenger
      </Button>
      <Button
        style="light"
        class="!shadow-select !text-black active:!text-white hover:!text-white"
      >
        <LordIcon
          name="share"
          size="22"
          class="text-black group-hover:text-white"
        />
        Messages
      </Button>
      <Button
        style="light"
        class="!shadow-select !text-black active:!text-white hover:!text-white"
      >
        <LordIcon
          name="share"
          size="22"
          class="text-black group-hover:text-white"
        />
        WhatsApp
      </Button>
      <Button
        style="light"
        class="!shadow-select !text-black active:!text-white hover:!text-white"
      >
        <LordIcon
          name="share"
          size="22"
          class="text-black group-hover:text-white"
        />
        Facebook
      </Button>
    </div>

    <div class="flex w-full flex-row justify-center items-center sm:px-8 pb-4 pt-8 gap-4">
      <div class="w-1/2 flex justify-end flex-1">
        <img
          src={ultraLuxe}
          class="min-w-[120px] w-[120px] object-contain aspect-square rounded-[20px]"
          alt=""
        />
      </div>
      <div class="flex w-1/2 gap-4">
        <div class="flex w-full flex-col">
          <p class="">
            Villa <span class="font-medium">BLANC BLEU </span>
          </p>
          <p class="text-xs">Lorient | 5 BD . 5BA</p>
          <p class="text-xs">2,429 USD / night</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  :global(.sc-carousel-dot__dot.sc-carousel-dot__dot_active) {
    @apply bg-purple;
  }

  :global(.sc-carousel-dot__dot) {
    @apply !bg-purple-light;
  }
</style>
