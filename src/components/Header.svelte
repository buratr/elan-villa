<script lang="ts" context="module">
  export type HeaderLink = {
    label: string;
    path: string;
  };
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from "$app/stores";
  import LogoLight from "@assets/svgs/logos/VRSB-light.svg?component";
  import LogoDark from "@assets/svgs/logos/VRSB-dark.svg?component";
  import Link from "./atoms/Link.svelte";
  import BurgerIcon from "@assets/svgs/icons/burger-icon.svg?component";
  import IconButton from "./atoms/IconButton.svelte";
  import Menu from "./Menu.svelte";
  import MenuMobile from "./MenuMobile.svelte";
  import { closeMenu, menuStore, openMenu } from "@lib/menu-store";
  import LordIcon from "@components/atoms/LordIcon.svelte";
  import MenuButton from "@components/atoms/MenuButton.svelte";

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

  let prevScrollPos: number = 0;
  let showNavbar: boolean = true;

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    const currentScrollPos = window.pageYOffset;
    showNavbar = prevScrollPos > currentScrollPos;
    prevScrollPos = currentScrollPos;
  }
  const isMobile:boolean = window.matchMedia('(max-width: 960px)').matches;

</script>

<svelte:window bind:scrollY={y} />

{#if isOpen}
  
{#if isMobile}
  <MenuMobile />
  {:else}
  <Menu />
{/if}

{/if}

<div class="header {!showNavbar&&isMobile?'header-hidden':''}"  bind:clientHeight> <!--  -->
  <div class="header-dark {!lightHeader || offScreen ? '!opacity-100' : ''}" />
  <!-- Left side: Logo -->
  <div class="logo hidden md:block">
    <a href="/">
      {#if !lightHeader || offScreen}
        <LogoLight width="100%" />
      {:else}
        <LogoDark width="100%" />
      {/if}
    </a>
  </div>
  <div class="logo-mobile md:hidden">
    <a href="/" class="flex justify-center">
      {#if !lightHeader || offScreen}
        <LogoLight width="75%" />
      {:else}
        <LogoDark width="75%" />
      {/if}
    </a>
  </div>

  <!-- Right side: Links and Menu -->
  <div class="hidden md:flex items-center w-full">
    <div class="links">
      {#each links as link}
        <Link
          href={link.path}
          class={$page.url.pathname === link.path ? "!text-purple-light" : ""}
        >
          {link.label}
        </Link>
      {/each}
    </div>
    <div class="icon-links">
      <a
        href="/"
        class="active:scale-95 transition-all group"
      >
        <LordIcon name="like" size="48" class="text-purple-light group-hover:stroke-purple" />
      </a>

      <a
        href="/"
        class="active:scale-95 transition-all group"
      >
        <LordIcon name="user" size="48" class="text-purple-light group-hover:stroke-purple" />
      </a>
    </div>
    <div class="separator" />
    
    
    
    <!-- <div class="menu">
      <Link href="/">Menu</Link>
      <IconButton on:click={openMenu}>
        <BurgerIcon width="24" height="24" class="stroke-2" stroke="white" />
      </IconButton>
    </div> -->
  </div>

  <MenuButton on:click={openMenu}></MenuButton>

</div>

<style lang="postcss">
  .header {
    @apply fixed w-full shadow-header h-[65px] md:h-[99px] overflow-hidden pr-[5%] flex items-center justify-center md:justify-between z-30 top-0 bg-white/20 transition-all duration-500;
  }
  .header-hidden {
    top: -100%; /* высота навбара */
  }

  .header-dark {
    @apply absolute top-0 right-0 bottom-0 left-0 transition-all duration-150 -z-10 opacity-0;
    background: linear-gradient(
        58.23deg,
        #000000 5.41%,
        rgba(0, 0, 0, 0.09) 56.37%,
        rgba(255, 255, 255, 0.06) 102.7%
      ),
      linear-gradient(0deg, #1e1e1e, #1e1e1e);
  }

  .links {
    @apply flex gap-[10%] w-full justify-end items-center uppercase text-xl;
  }

  .icon-links {
    @apply flex items-center gap-6 lg:gap-12 pl-[4%] justify-between;
  }

  .menu {
    @apply flex justify-between items-center gap-4 lg:gap-9;
  }

  .separator {
    @apply h-[50px] bg-white w-0.5 mr-[3%] ml-[4%];
  }
</style>
