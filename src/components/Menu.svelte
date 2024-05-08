<script lang="ts">
  import IconButton from "./atoms/IconButton.svelte";
  import Link from "./atoms/Link.svelte";
  import LogoLight from "@assets/svgs/logos/VRSB-light.svg?component";
  import CloseIcon from "@assets/svgs/icons/cross-svgrepo-com.svg?component";
  import IllustrationAllVillas from "@assets/svgs/illustrations/15illustration.svg?component";
  import IllustrationMap from "@assets/svgs/illustrations/12illustration.svg?component";
  import IllustrationTravelLab from "@assets/svgs/illustrations/2illustration.svg?component";
  import IllustrationContact from "@assets/svgs/illustrations/17illustration.svg?component";
  import IllustrationTrusted from "@assets/svgs/illustrations/19illustration.svg?component";
  import IllustrationServices from "@assets/svgs/illustrations/11illustration.svg?component";
  import IllustrationStBars from "@assets/svgs/illustrations/5illustration.svg?component";
  import DRAPEAU from "@assets/countries/DRAPEAU.png";
  import { closeMenu, menuStore, openMenu } from "@lib/menu-store";
  import { forEach } from "lodash";
  import LordIcon from "@components/atoms/LordIcon.svelte";

  let menuHeight: number;
  let larger = false;

  $: if (menuHeight) {
    larger = menuHeight >= innerHeight;
  }

  let links = [
    {
      title: "Home",
      link: "/",
      illustration: IllustrationAllVillas,
      hover: true,
      large: true,
    },
    {
      title: "All Villas",
      link: "/all_villas",
      illustration: IllustrationAllVillas,
      hover: false,
      large: true,
    },
    {
      title: "Map",
      link: "/",
      illustration: IllustrationMap,
      hover: false,
      large: true,
    },
    {
      title: "Travel lab’",
      link: "/travel_lab",
      illustration: IllustrationTravelLab,
      hover: false,
      large: true,
    },
    {
      title: "Contact",
      link: "/contact",
      illustration: IllustrationContact,
      hover: false,
      large: false,
    },
    {
      title: "Trusted providers",
      link: "/",
      illustration: IllustrationTrusted,
      hover: false,
      large: false,
    },
    {
      title: "Vacation tips",
      link: "/",
      illustration: IllustrationServices,
      hover: false,
      large: false,
    },
    {
      title: "St barth",
      link: "/",
      illustration: IllustrationStBars,
      hover: false,
      large: false,
    },
  ];

  const updateHover = (title: string, isHovered: boolean) => {
    links.forEach((link) => {
      link.hover = false;
    });

    const index = links.findIndex((link) => link.title === title);
    if (index !== -1) {
      links[index].hover = isHovered;
    }

    // Check if there is any link with hover = true
    const hasHoveredLink = links.some((link) => link.hover);

    // If no link has hover = true, set the first element's hover to true
    if (!hasHoveredLink && links.length > 0) {
      links[0].hover = true;
    }
  };
</script>
<!-- {larger && 'h-full'} -->
<div class="menu h-full " bind:clientHeight={menuHeight}>
  <div class="flex justify-between items-start">
    <a href="/">
      <LogoLight width="100%" />
    </a>
    <div class="pr-20 pt-10">
      <IconButton on:click={closeMenu} light class="!p-0">
        <CloseIcon
          width="24"
          height="24"
          class="stroke-6 stroke-white fill-white "
        />
      </IconButton>
    </div>
  </div>
  <div class="flex">
    <div class="basis-1/2 flex flex-col justify-between">
      <div class="flex h-full flex-col relative mr-10">
        {#each links as link}
          <svelte:component
            this={link.illustration}
            class="stroke-purple-light fill-purple-light absolute w-full h-full opacity-0 transition-all {link.hover
              ? '!opacity-100'
              : ''}"
          />
        {/each}
      </div>
      <div class="flex flex-col gap-8 pl-24 pb-16">
        <a
          class="text-white hover:text-purple-light"
          href="mailto:reservation@elanimmosaintbarth.com"
          >reservation@elanimmosaintbarth.com</a
        >
        <a class="text-white hover:text-purple-light" href="tel:+590590511010"
          >+ 590 590 51 10 10</a
        >
      </div>
    </div>
    <div class="basis-1/2 flex {larger ? 'pb-40' : 'pb-52'} justify-between">
      <div class="flex flex-col">
        {#each links as link}
          <Link
            class="font-athena {link.large ? 'text-6xl' : 'text-3xl'} {larger
              ? 'pb-4'
              : 'pb-8'}"
            href={link.link}
            on:mouseenter={() => updateHover(link.title, true)}
            on:mouseleave={() => updateHover(link.title, false)}
            >{link.title}</Link
          >
        {/each}
      </div>
      <div class="flex self-start items-center gap-8 pr-16">
        <div class="hidden lg:flex flex-col gap-9">
          <Link href="/" class="uppercase tracking-widest">LOGIN / Sign up</Link
          >
          <Link href="/" class="uppercase tracking-widest"
            >FAVORITEs / research</Link
          >
          <Link href="/" class="uppercase tracking-widest">en</Link>
        </div>
        <div
          class="flex flex-col gap-2 w-fit bg-gradient-to-r from-purple-dark to-purple-darker rounded-[50px] px-3 py-5"
        >
          <div class="group cursor-pointer">
            <LordIcon name="user" size="50" class="text-white" />
          </div>
          <div class="group cursor-pointer">
            <LordIcon name="like" size="52" class="text-white" />
          </div>
          <div class="group cursor-pointer flex justify-center">
            <img
              src={DRAPEAU}
              class="w-9 h-9 group-hover:!scale-110 transition-all"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .menu {
    @apply hidden md:flex w-full flex-col fixed top-0 z-50 overflow-scroll;
    background: linear-gradient(
        56.68deg,
        #000000 6.14%,
        rgba(0, 0, 0, 0.09) 64.34%,
        rgba(255, 255, 255, 0.06) 117.24%
      ),
      linear-gradient(0deg, #1e1e1e, #1e1e1e);
  }
</style>
