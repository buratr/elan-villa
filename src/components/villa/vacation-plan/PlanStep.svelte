<script lang="ts">
  export let step: string = "Step 1";
  export let title: string = "Availability";
</script>

<div class="flex w-full justify-between items-center gap-2">
  <span class="text-[20px] md:text-[35px] font-bold text-white">
    {step}
  </span>
  <div class="flex-1">
    <div class="w-full h-1 dashed-spaced"></div>
  </div>
  <span class="md:text-[35px] font-amsterdam text-purple-light">
    {title}
  </span>
</div>

<style lang="postcss">
  .dashed-spaced {
    background-image: linear-gradient(
      to right,
      #7c4db7 50%,
      rgba(255, 255, 255, 0) 0%
    );
    background-position: top;
    background-size: 20px 1px;
    background-repeat: repeat-x;
    white-space: nowrap; /* Prevent text wrapping */
  }
</style>
