<script lang="ts">
  import TravelLabInfo from "./TravelLabInfo.svelte";
  import TravelLabBG from "@assets/images/travel-lab-gb.png";
  import TravelLabOptions from "./TravelLabOptions.svelte";
</script>

<div style="background: url({TravelLabBG})">
  <div class="bg-blend-overlay pb-96 pt-32 bg-white/90">
    <TravelLabInfo />
    <TravelLabOptions />
  </div>
</div>
