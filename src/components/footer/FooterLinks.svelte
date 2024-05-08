<script lang="ts">
  import Link from "@components/atoms/Link.svelte";
  import IconYouTube from "@assets/svgs/icons/icons8-youtube.svg?component";
  import IconInstagram from "@assets/svgs/icons/icons8-instagram.svg?component";
  import IconTikTok from "@assets/svgs/icons/icons8-tiktok.svg?component";
</script>

<div class="flex flex-col md:flex-row gap-10 pt-16 justify-around w-full lg:w-auto">
  <div>
    <p class="font-athena text-3xl text-white tracking-widest pb-8">Socials</p>
    <div class="flex flex-col text-xl font-light gap-y-6 pl-4">
      <div class="flex gap-4 items-center">
        <IconYouTube
          width="24"
          class="stroke-2 fill-purple-light"
          fill="purple-light"
        />
        <Link href="/">Youtube</Link>
      </div>
      <div class="flex gap-4 items-center">
        <IconTikTok
          width="24"
          class="stroke-2 fill-purple-light"
          fill="purple-light"
        />
        <Link href="/">Tik tok</Link>
      </div>
      <div class="flex gap-4 items-center">
        <IconInstagram
          width="24"
          class="stroke-2 fill-purple-light"
          fill="purple-light"
        />
        <Link href="/">Instagram</Link>
      </div>
    </div>
  </div>
  <div class="hidden md:block">
    <p class="font-athena text-3xl text-white tracking-widest pb-8">Explore</p>
    <div class="flex flex-col font-light text-xl gap-y-6 pl-4">
      <Link href="/all_villas">All villas</Link>
      <Link href="/">Map</Link>
      <Link href="/travel_lab">Travel Lab’</Link>
      <Link href="/">Trusted Providers</Link>
      <Link href="/">Saint Barthélémy</Link>
      <Link href="/">Vacation tips</Link>
    </div>
  </div>
  <div>
    <p class="font-athena text-3xl text-white tracking-widest pb-10">Company</p>
    <div class="flex flex-col text-xl font-light gap-y-6 pl-4">
      <Link href="/contact">About us</Link>
      <Link href="/">Elan Rewards</Link>
      <Link href="/">Elan Real Estate</Link>
      <Link href="/">Elan Manager</Link>
      <Link href="/">Elan Voyages</Link>
    </div>
  </div>
</div>
