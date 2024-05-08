<script>

  import StarRating from "./StarRating.svelte";

</script>
<div class="flex flex-col items-center pb-40 px-16 text-center">
  <span class="text-black text-md tracking-[4px] pb-4 uppercase"
    >read what people say about us</span
  >
  <h2 class="font-athena text-6xl text-purple">Reviews</h2>
  <div class="text-purple text-2xl flex justify-center gap-2 items-center pt-8">
    4.2
    <StarRating score={4.2} size={24} />
  </div>
</div>
