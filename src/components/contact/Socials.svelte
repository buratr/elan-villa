<script lang="ts">
  import socialsBG from "@assets/background/BGSocials.svg";
  import Link from "@components/atoms/Link.svelte";
  import IconYouTube from "@assets/svgs/icons/icons8-youtube.svg?component";
  import IconInstagram from "@assets/svgs/icons/icons8-instagram.svg?component";
  import IconTikTok from "@assets/svgs/icons/icons8-tiktok.svg?component";
  import socials from "@assets/images/socials.png";
  import socialsMobile from "@assets/images/Insta.png";

  let dataURL = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAxOTIwIDgwOSI+PHBhdGggZD0iTTAgMS4xdjgwOC4yaDE5MjBWMTIzQzEzOTguNSAyNzkuMiA5NzEuOS0yNS44IDAgMS4xIiBzdHlsZT0iZmlsbDojMDAwMDIzIi8+PHJhZGlhbEdyYWRpZW50IGlkPSJhIiBjeD0iNzA0LjM3IiBjeT0iNjYwLjg5NSIgcj0iLjgzOCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMjY3Ni45OTc4IDcwNC4zOTUxIDc4NC4zMzg1IDI5ODAuODE1OSAxMzY5NDE5LjI1IC0yNDY1OTYwLjUpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIuMDA1IiBzdHlsZT0ic3RvcC1jb2xvcjojODY4NmRhIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMDAwO3N0b3Atb3BhY2l0eTowIi8+PC9yYWRpYWxHcmFkaWVudD48cGF0aCBkPSJNMCAxLjF2ODA4LjJoMTkyMFYxMjNDMTM3OC43IDI4MS40IDk3MS45LTI1LjggMCAxLjEiIHN0eWxlPSJmaWxsOnVybCgjYSk7ZmlsbC1vcGFjaXR5Oi42Ii8+PC9zdmc+"
</script>

<div
  class="flex relative bg-cover overflow-hidden"
>
<img src="{socialsBG}" alt="" class="-z-10 absolute w-full h-full object-cover">
  <div class="flex w-1/2 md:w-full">
    <img
      src={socials}
      style="mask-image: url({dataURL});mask-size: cover"
      class="w-fit h-full object-cover object-right hidden md:block"
      alt="team"
    />
    <img
      src={socialsMobile}
      style="mask-image: url({socialsBG});mask-size: cover"
      class="w-fit h-full object-cover object-left md:hidden"
      alt="team"
    />
  </div>
  <div class="flex flex-col md:w-1/2 justify-center mt-[15%] pb-[8%]">
    <div class="flex flex-col items-start">
      <span class="text-purple-light font-medium tracking-[4px] pb-4"
        >LET’S GET SOCIAL</span
      >
      <h2 class="font-athena text-[35px] md:text-6xl text-white">Follow us</h2>
    </div>
    <div class="flex flex-col text-xl font-light gap-y-6 pt-11">
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
</div>
