<script lang="ts">
  import Background from "@assets/background/background-mobile.png";
  import FooterLogo from "./footer/FooterLogo.svelte";
  import FooterLinks from "./footer/FooterLinks.svelte";
  import FooterNewsletter from "./footer/FooterNewsletter.svelte";
  import FooterSupport from "./footer/FooterSupport.svelte";
  import FooterCopyright from "./footer/FooterCopyright.svelte";
  import BgBeige from "@assets/background/BackgroundBeige.webp";
  import { navigating, page } from "$app/stores";
  // import ImageLeaves from "@assets/images/other-leaves-mob.png";
  // import ImagePalmLeaves from "@assets/images/palm-leaves-mob.png";
  let bgBeige = $page.url.pathname === "/all_villas";
  let bgDark =
    $page.url.pathname === "/travel_lab" ||
    $page.url.pathname === "/travel_lab/summary";

  $: if ($navigating) {
    if ($navigating.to?.route.id === "/all_villas") {
      bgBeige = true;
      bgDark = false;
    } else if (
      $navigating.to?.route.id === "/travel_lab" ||
      $navigating.to?.route.id === "/travel_lab/summary"
    ) {
      bgBeige = false;
      bgDark = true;
    } else {
      bgBeige = false;
      bgDark = false;
    }
  }
</script>

<div
  class="footer px-16 pb-8 lg:hidden pt-52 z-0 {bgDark ? 'bg-lab' : ''}"
  style={bgBeige ? "background-image: url(" + BgBeige + ")" : ""}
>
  <div class="flex flex-wrap md:pt-20">
    <FooterLogo />
    <div class="horizontal-separator md:hidden" />
    <div class="w-full flex-wrap flex justify-between">
      <FooterSupport />
      <FooterNewsletter />
    </div>
    <div class="horizontal-separator md:mx-[10%] mt-16" />
    <FooterLinks />
    <div class="horizontal-separator my-10" />
    <FooterCopyright />
  </div>

  <div
    class="footer-background"
    style="background-image: url({Background}); background-size: cover;"
  >
    <!-- <FooterBackground /> -->
  </div>
  <!-- <div class="absolute bottom-0 right-0 -z-10">
    <img src="{ImageLeaves}" alt="Leaves">
  </div>
  <div class="absolute top-72 -translate-y-full left-0 -z-10">
    <img src="{ImagePalmLeaves}" alt="Leaves">
  </div> -->
</div>

<style lang="postcss">
  .footer {
    @apply relative;
    /* background: linear-gradient(
        58.23deg,
        #000000 5.41%,
        rgba(0, 0, 0, 0.09) 56.37%,
        rgba(255, 255, 255, 0.06) 102.7%
      ),
      linear-gradient(0deg, #1E1E1E, #1E1E1E); */
  }

  .footer-background {
    @apply absolute top-0 left-0 w-full h-full -z-20;
  }

  .horizontal-separator {
    @apply w-full border-[0.5px];
  }

  .vertical-separator {
    @apply h-[670px] border-[0.5px];
  }

  .bg-lab {
    background: linear-gradient(
        90deg,
        rgba(98, 97, 97, 0.8) -132.55%,
        rgba(0, 0, 0, 0) 20.77%
      ),
      linear-gradient(0deg, #141414, #141414);
  }
</style>
