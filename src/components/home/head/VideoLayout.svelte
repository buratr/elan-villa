<script lang="ts">
  import homepage from "@assets/video/homepage.mp4";
  import homepagePoster from "@assets/video/video-background.png";
  import SearchBar from "./SearchBar.svelte";
  import SearchBarMobile from "./SearchBarMobile.svelte";
  import IconScroll from "@assets/animated/IconScroll.svelte";
</script>

<div class="video-container">
  <!-- Video Background -->
  <video
    class="absolute inset-0 w-full h-full object-cover -z-10"
    autoplay
    muted
    loop
    poster={homepagePoster}
  >
    <source src={homepage} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <!-- Content Overlay -->
  <div class="flex flex-col justify-center items-center w-full">

    <div class="hidden lg:flex h-3/4 items-end w-full px-[4%] xl:px-[15%]">
      <SearchBar />
    </div>

    <div class="flex lg:hidden h-3/4 items-end w-full px-[4%] xl:px-[10%]">
      <SearchBarMobile />
    </div>

    <div class="h-1/4 relative w-full hidden lg:block">
      <IconScroll />
    </div>
  </div>
</div>

<style lang="postcss">
  .video-container {
    @apply flex w-full items-stretch relative max-h-screen min-h-[392px] md:min-h-[728px] lg:min-h-[980px];
  }
</style>
