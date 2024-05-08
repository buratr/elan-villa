<script lang="ts">
  import Link from "@components/atoms/Link.svelte";
</script>

<div class="flex w-full flex-col lg:flex-row justify-center lg:justify-between align-baseline lg:pt-16 lg:pb-12 lg:px-20 font-light lg:items-baseline">
  <span class="text-xs md:text-base text-white order-1 lg:order-none text-center">
    Elan Immo Saint Barth © 2023 | All rights reserved</span
  >
  <div class="flex flex-wrap md:flex-nowrap lg:gap-24 lg:text-xl justify-evenly gap-6 pb-6 lg:pb-0 items-center">
    <Link class="hidden md:block" href="/">Terms & conditions</Link>
    <Link href="/">Privacy</Link>
    <Link href="/">Disclosure</Link>
    <Link href="/">Cookies</Link>
    <Link href="/">CGV</Link>
  </div>
</div>
