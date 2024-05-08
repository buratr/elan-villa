<script>
  import Link from "@components/atoms/Link.svelte";
  import LogoEVRMobile from "@assets/svgs/logos/logo-evr-1.png";
</script>

<div class="copyright">
  <div
    class="flex w-full flex-col lg:flex-row justify-center lg:justify-between align-baseline py-10 lg:px-20 font-light lg:items-baseline"
  >
    <span
      class="text-xs md:text-base text-white order-1 lg:order-none text-center"
    >
      Elan Immo Saint Barth © 2023 | All rights reserved</span
    >
    <div
      class="flex flex-col md:flex-row lg:gap-24 lg:text-xl justify-evenly gap-6 pb-6 lg:pb-0 items-center"
    >
      <div class="md:px-16 md:hidden">
        <img src={LogoEVRMobile} class="md:w-96" alt="Logo Mobile" />
      </div>
      <Link class="hidden md:block" href="/">Terms & conditions</Link>
      <Link href="/">Privacy</Link>
      <Link href="/">Disclosure</Link>
      <Link href="/">Cookies</Link>
      <Link href="/">CGV</Link>
    </div>
  </div>
</div>

<style lang="postcss">
  .copyright {
    background: linear-gradient(0deg, #1e1e1e, #1e1e1e),
      linear-gradient(
        69.22deg,
        #000000 22.18%,
        rgba(0, 0, 0, 0.09) 83.57%,
        rgba(255, 255, 255, 0.06) 135.34%
      );
  }
</style>
