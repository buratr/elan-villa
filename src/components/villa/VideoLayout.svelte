<script lang="ts">
  import homepage from "@assets/video/homepage.mp4";
  import homepagePoster from "@assets/video/video-background.png";
  import IconButton from "@components/atoms/IconButton.svelte";
  import CloseIcon from "@assets/svgs/icons/cross-svgrepo-com.svg?component";
  import { modal } from "@components/Modal.svelte";
</script>

<div class="video-container">
  <div class="flex gap-4 items-center justify-start h-fit px-14 py-10">
    <IconButton
      dark
      class="!p-0"
      on:click={() => {
        modal.close();
      }}
    >
      <CloseIcon
        width="24"
        height="24"
        class="stroke-6 stroke-white fill-white "
      />
    </IconButton>
    <span class="font-medium">Close video</span>
  </div>
  <!-- Video Background -->
  <video
    class="absolute inset-0 w-full h-screen object-cover -z-10"
    autoplay
    muted
    loop
    poster={homepagePoster}
  >
    <source src={homepage} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

<style lang="postcss">
  .video-container {
    @apply flex w-full items-stretch relative max-h-screen min-h-[392px] md:min-h-[728px] lg:min-h-[980px];
  }
</style>
