<script>
  import Star from "@assets/svgs/icons/star.svg?component";
  import HalfStar from "@assets/svgs/icons/star-lefthalf.svg?component";

  export let score = 0;
  export let size = 16;

  let fullStars = Math.floor(score);
  let halfStar = score % 1 > 0;

  let stars = Array.from({ length: fullStars + (halfStar ? 1 : 0) });
</script>

<div class="flex gap-1">
  {#each stars as _, index (index)}
    {#if index === fullStars && halfStar}
      <HalfStar class="!stroke-purple !fill-purple" style="width: {size}px !important; height: {size}px !important;" />
    {:else}
      <Star class="!stroke-purple !fill-purple" style="width: {size}px !important; height: {size}px !important;"/>
    {/if}
  {/each}
</div>
