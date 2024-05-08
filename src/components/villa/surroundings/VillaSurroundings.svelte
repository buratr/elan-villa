<script lang="ts">
  import VillaCompass from "./VillaCompass.svelte";
  import VillaLocations from "./VillaLocations.svelte";
  import VillaMap from "@components/villa/surroundings/VillaMap.svelte";
  import VillaServices from "./VillaServices.svelte";
</script>

<div class="flex flex-col w-full pt-48 md:pt-20 pb-20 relative" id="surroundings">
  <VillaCompass />
  <div class="flex px-14 lg:px-44 justify-center flex-col relative z-10">
    <div class="flex flex-col pb-10 md:pb-20">
      <h2 class="uppercase tracking-[4px] font-medium text-xs md:text-base">
        blanc bleu location
      </h2>
      <h2 class="text-[45px] md:text-[60px] text-purple font-athena">
        Surroundings
      </h2>
    </div>

    <VillaLocations />
  </div>
  <VillaMap />

  <div class="md:hidden pt-20">
    <div class="flex flex-col items-center pb-10">
      <h2 class="uppercase tracking-[4px] font-medium text-xs md:text-base">
        Included with this villa
      </h2>
      <h2 class="text-[45px] md:text-[60px] text-purple font-athena">
        All services
      </h2>
    </div>

    <VillaServices />
  </div>
</div>
