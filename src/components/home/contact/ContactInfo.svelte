<script>
  import Button from "@components/atoms/Button.svelte";
  import CrewImage from "@assets/images/Crew.png";
  import CrewImageMobile from "@assets/images/crew_mobile.png";
  import { goto } from "$app/navigation";
</script>

<div class="flex flex-col lg:flex-row md:items-center w-full lg:pl-0 lg:pr-20">
  <div>
    <img src={CrewImage} class="hidden md:block" alt="Crew" />
    <img src={CrewImageMobile} class="md:hidden" alt="Crew mobile" />
  </div>
  <div class="flex flex-col lg:max-w-xl lg:pt-40 pb-20 lg:pb-0 px-16 lg:px-0">
    <div class="flex flex-col items-start">
      <span class="text-purple-light text-md tracking-widest pb-4 uppercase"
        >GET IN TOUCH WITH US</span
      >
      <h2 class="font-athena text-6xl text-white">Contact</h2>
      <div class="text-white text-md tracking-widest max-w-3xl py-11 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit
      </div>
    </div>
    <div class="">
      <Button style="primary" on:click={() => goto('/contact')}>let’s talk</Button>
    </div>
  </div>
</div>
