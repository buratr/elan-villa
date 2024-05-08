<script lang="ts">
  import Background from "@assets/background/background.png";
  import FooterLogo from "./footer/FooterLogo.svelte";
  import FooterLinks from "./footer/FooterLinks.svelte";
  import FooterNewsletter from "./footer/FooterNewsletter.svelte";
  import FooterSupport from "./footer/FooterSupport.svelte";
  import FooterCopyright from "./footer/FooterCopyright.svelte";
  import BgBeige from "@assets/background/BackgroundBeige.webp";
  import { navigating, page } from "$app/stores";
  // import ImageLeaves from "@assets/images/other-leaves_1.png";
  // import ImagePalmLeaves from "@assets/images/palm-leaves_1.png";
  let bgBeige = $page.url.pathname === "/all_villas";
  let bgDark = $page.url.pathname === "/travel_lab" || $page.url.pathname === "/travel_lab/summary";

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
  class="footer z-0 {bgDark ? 'bg-lab' : ''}"
  style={bgBeige ? "background-image: url(" + BgBeige + ")" : ""}
>
  <div class="flex justify-between pt-44">
    <div class="footer-left pl-[7%] pr-[5%] basis-3/5 w-full">
      <FooterLogo />
      <div class="horizontal-separator" />
      <FooterLinks />
    </div>
    <div class="vertical-separator mt-14" />
    <div class="w-full basis-2/5 px-[4%]">
      <FooterNewsletter />
      <FooterSupport />
    </div>
  </div>

  <div class="flex flex-col pt-8">
    <div class="horizontal-separator" />
    <FooterCopyright />
  </div>
  <div
    class="footer-background"
    style="background-image: url({Background}); background-size: cover;"
  >
    <!-- <FooterBackground /> -->
  </div>
  <!-- <div class="absolute bottom-0 left-0 -z-10">
    <img src="{ImageLeaves}" alt="Leaves">
  </div>
  <div class="absolute top-44 -translate-y-full right-0 -z-10">
    <img src="{ImagePalmLeaves}" alt="Leaves">
  </div> -->
</div>

<style lang="postcss">
  .footer {
    @apply relative hidden lg:block;
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
