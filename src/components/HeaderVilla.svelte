<script lang="ts" context="module">
  export type HeaderLink = {
    label: string;
    path: string;
  };
</script>

<script lang="ts">
  import { page } from "$app/stores";
  import LogoLight from "@assets/svgs/logos/VRSB-light.svg?component";
  import Link from "./atoms/Link.svelte";
  import IconButton from "./atoms/IconButton.svelte";
  import IconArrowLeft from "@assets/svgs/icons/arrow-left.svg?component";
  import { closeMenu, menuStore, openMenu } from "@lib/menu-store";
  import IconBack from "./atoms/IconBack.svelte";
  import { goto } from "$app/navigation";
  import LordIcon from "./atoms/LordIcon.svelte";
  import { useModal } from "./Modal.svelte";
  import VideoLayout from "./villa/VideoLayout.svelte";
  import Area from "./home/head/Area.svelte";
  import { locations } from "@lib/locations/locations";
  import VillaShare from "./VillaShare.svelte";

  export let links: HeaderLink[] = [];
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

  let isPopupOpen = false;
  let selectedArea: string | undefined = undefined;

  const openVideo = () => {
    const modal = useModal({ backdropClose: true, size: "screen" });

    modal.open(VideoLayout);
  };
</script>

<svelte:window bind:scrollY={y} />

<div class="fixed w-full z-30 top-0 h-0">
  <VillaShare bind:isOpen={isPopupOpen} class="area top-0 z-50" parentHeight={clientHeight} />
  <div class="header" bind:clientHeight>
    <!-- <div class="header-dark {offScreen ? '!opacity-100' : ''}" /> -->
    <!-- Left side: Logo -->
    <div class="logo hidden md:block">
      <a href="/">
        <LogoLight width="100%" />
      </a>
    </div>

    <div class="md:hidden">
      <IconBack on:click={() => goto('/all_villas')}>
        <IconArrowLeft height="32" class="!stroke-black stroke-6" />
      </IconBack>
    </div>
    <!-- Right side: Links and Menu -->
    <div class="flex justify-end w-full">
      <div class="icon-links">
        <div class="flex items-center gap-4">
          <Link class="hidden md:inline-block">Video</Link>
          <IconButton gap="1" dark  on:click={() => openVideo()}>
            <LordIcon name="gallery" size="32" class="text-white" />
          </IconButton>
        </div>

        <div class="flex items-center gap-4">
          <Link class="hidden md:inline-block">Visit the villa</Link>
          <IconButton gap="1" dark>
            <LordIcon name="360" size="32" class="text-white" />
          </IconButton>
        </div>

        <div class="flex items-center gap-4 relative">
          <Link class="hidden md:inline-block">Share</Link>
          <IconButton gap="1" dark on:click={() => isPopupOpen = true}>
            <LordIcon name="share" size="32" class="text-white" />
          </IconButton>
        </div>

        <div class="flex items-center gap-4">
          <Link class="hidden md:inline-block">Save</Link>
          <IconButton gap="1" dark>
            <LordIcon name="like" size="32" class="text-white" />
          </IconButton>
        </div>
      </div>
    </div>
  </div>

  <div class="hidden md:flex pt-8 pl-12 w-fit items-center gap-4">
    <IconButton on:click={() => goto('/all_villas')}>
      <IconArrowLeft height="18" class="!stroke-white stroke-6" />
    </IconButton>
    <Link href="/all_villas">All villas</Link>
  </div>
</div>

<style lang="postcss">
  .header {
    @apply shadow-header h-[65px] md:h-[99px] backdrop-blur-xl overflow-hidden px-8 md:px-0 md:pr-[5%] flex items-center justify-center md:justify-between z-30 top-0 bg-white/20 transition-all duration-500;
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

  .icon-links {
    @apply flex items-center gap-4 sm:gap-8 lg:gap-7 pl-8 justify-between;
  }
</style>
