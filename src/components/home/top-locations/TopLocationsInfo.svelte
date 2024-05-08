<script>
  import Button from "@components/atoms/Button.svelte";
</script>

<div class="flex flex-col max-w-2xl relative z-10">
  <div class="flex flex-col items-start">
    <span class="text-purple-light text-md tracking-widest pb-4 uppercase"
      >THE MOST POPULAR areas</span
    >
    <h2 class="font-athena text-6xl text-white">Top locations</h2>
    <div class="text-white text-justify text-md tracking-wide max-w-3xl py-16">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
    </div>
  </div>
  <div class="flex gap-8 items-center justify-center">
    <Button style="outlined">HOT AREAS</Button>
    <Button style="primary">MAP</Button>
  </div>
</div>
