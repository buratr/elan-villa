<script lang="ts">
  import IconButton from "./atoms/IconButton.svelte";
  import Link from "./atoms/Link.svelte";
  import CloseIcon from "@assets/svgs/icons/cross-svgrepo-com.svg?component";
  import DRAPEAU from "@assets/countries/DRAPEAU.png";
  import IllustrationAllVillas from "@assets/svgs/illustrations/15illustration.svg?component";
  import IllustrationMap from "@assets/svgs/illustrations/12illustration.svg?component";
  import IllustrationTravelLab from "@assets/svgs/illustrations/2illustration.svg?component";
  import IllustrationContact from "@assets/svgs/illustrations/17illustration.svg?component";
  import IllustrationTrusted from "@assets/svgs/illustrations/19illustration.svg?component";
  import IllustrationServices from "@assets/svgs/illustrations/11illustration.svg?component";
  import IllustrationStBars from "@assets/svgs/illustrations/5illustration.svg?component";
  import LogoLight from "@assets/svgs/logos/VRSB-light.svg?component";
  import { closeMenu, menuStore, openMenu } from "@lib/menu-store";
  import LordIcon from "@components/atoms/LordIcon.svelte";

  let links = [
    {
      title: "Home",
      link: "/",
      illustration: "",
      hover: false,
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
</script>

<div class="menu">

    <div class="flex justify-between items-start">
      <a href="/" class="md:w-full w-48">
        <LogoLight width="100%" />
      </a>
      <div class="md:pr-20 pr-9 my-auto">
          <IconButton on:click={closeMenu} light class="!p-0">
          <CloseIcon
            width="24"
            height="24"
            class="stroke-6 stroke-white fill-white group-hover:fill-black group-hover:stroke-black"
          />
        </IconButton>
      </div>
    </div>
  

  <div class="flex justify-between pt-10">

    <div class="flex pb-3 justify-center md:ml-14 ml-9 ">
      <div class="flex flex-col md:gap-8 gap-5">
        {#each links as link}
          <Link
            class="font-athena {link.large ? 'md:text-6xl text-4xl' : 'md:text-3xl text-2xl'} "
            href={link.link}>{link.title}</Link
          >
        {/each}
      </div>
    </div>
      
    
    <div>
        <div class="flex flex-col items-end gap-4 md:pr-16 pr-6 sticky top-4">
            <div>
              <div class="flex flex-col gap-2 w-fit bg-gradient-to-r from-purple-dark to-purple-darker rounded-[50px] px-3 py-5">
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


</div>

<style lang="postcss">
  .menu {
    @apply md:hidden flex w-full h-full flex-col fixed top-0 z-50 overflow-scroll;
    background: linear-gradient(
        56.68deg,
        #000000 6.14%,
        rgba(0, 0, 0, 0.09) 64.34%,
        rgba(255, 255, 255, 0.06) 117.24%
      ),
      linear-gradient(0deg, #1e1e1e, #1e1e1e);
  }
</style>
