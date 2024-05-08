<script lang="ts" context="module">
  export type HeaderLink = {
    label: string;
    path: string;
  };
</script>

<script lang="ts">
  import { page } from "$app/stores";
  import BurgerIcon from "@assets/svgs/icons/burger-icon.svg?component";
  import IconButton from "./atoms/IconButton.svelte";
  import IconWhatsApp from "@assets/svgs/icons/icons8-whatsapp.svg?component";
  import { closeMenu, menuStore, openMenu } from "@lib/menu-store";
  import MenuMobile from "./MenuMobile.svelte";
  import LordIcon from "./atoms/LordIcon.svelte";

  export let links: HeaderLink[] = [];
  $: isOpen = $menuStore;
  $: lightHeader = $page.url.pathname === "/";

  let y: number;
  let clientHeight: number;

  $: offScreen = y > clientHeight * 2;

  $: {
    if ($menuStore) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
</script>

<svelte:window bind:scrollY={y} />

{#if isOpen}
  <MenuMobile />
{/if}

<div class="header-mobile">
  <div class="flex basis-1/4 justify-center">
    <IconButton on:click={openMenu} gap='2'>
      <BurgerIcon width="24" height="24" class="stroke-2" stroke="white" />
    </IconButton>
  </div>
  <div class="flex basis-1/4 justify-center">
    <a
      href="/"
      class="active:scale-95 transition-all group"
    >
      <LordIcon name="like" size="32" class="text-purple-light group-hover:stroke-purple" />
    </a>
  </div>
  <div class="flex basis-1/4 justify-center">
    <a
      href="/"
      class="active:scale-95 transition-all group"
    >
      <LordIcon name="user" size="32" class="text-purple-light group-hover:stroke-purple" />
    </a>
  </div>
  <div class="flex basis-1/4 justify-center">
    <IconButton gap='2'>
      <IconWhatsApp
        width="24"
        height="24"
        class="stroke-2"
        stroke="white"
        fill="red"
      />
    </IconButton>
  </div>
</div>

<style lang="postcss">
  .header-mobile {
    @apply fixed bottom-0 w-full min-h-[65px] flex flex-row items-center z-50 md:hidden;
    background: linear-gradient(
        58.23deg,
        #000000 5.41%,
        rgba(0, 0, 0, 0.09) 56.37%,
        rgba(255, 255, 255, 0.06) 102.7%
      ),
      linear-gradient(0deg, #1e1e1e, #1e1e1e);
  }
</style>
