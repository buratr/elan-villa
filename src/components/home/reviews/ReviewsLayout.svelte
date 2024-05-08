<script lang="ts">
  import Button from "@components/atoms/Button.svelte";
  import ReviewsInfo from "./ReviewsInfo.svelte";
  import ReviewsSlider from "./ReviewsSlider.svelte";
</script>

<div class="pb-20 pt-40 relative">
  <ReviewsInfo />
  <ReviewsSlider />
  <div class="flex justify-center pt-20">
    <Button style="primary">Read All Reviews</Button>
  </div>
</div>
