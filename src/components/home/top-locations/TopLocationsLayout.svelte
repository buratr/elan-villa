<script lang="ts">
  import BGurl from "@assets/images/TopLocationsBG.png";
  import mobileBGUrl from "@assets/images/topLocationMobileBG.png";
  import Map from "@assets/images/map_top_locations.png";
  import MapMobile from "@assets/images/mapMobileTopLocations.png";
  import TopLocationsInfo from "./TopLocationsInfo.svelte";
  import MapPin from "@components/home/top-locations/MapPin.svelte";
  import MapPinMobile from "@components/home/top-locations/MapPinMobile.svelte";
  import { villas } from "@lib/top-locations/villas-slider";
  import TopLocationBadgeMobile from "./TopLocationBadgeMobile.svelte";

  let activeVilla = villas[0];
  $: activeVilla;

  let scrollTarget: HTMLDivElement;

  function scrollToElement() {
    scrollTarget.scrollIntoView({ behavior: 'smooth' });
    window.scrollBy(0, -80);
  }

</script>

<div
  class="bg-cover bg-top overflow-hidden pt-60 pb-[40rem] relative hidden md:flex px-32 justify-end"
  style="background-image: url({BGurl});"
>

  <TopLocationsInfo />
  <div
    class="absolute -left-[10%]  w-100% lg:left-32 bottom-0 overflow-hidden flex mr-[290px]"
  >
    <img src={Map} alt="Map Top Locations " />
    <MapPin
      villa={villas[0]}
      class="w-20 absolute top-[47.93%] left-[37.35%]"
 
    />
    <MapPin
      villa={villas[1]}
      class="w-20 absolute top-[57.74%] left-[52.23%]"
    />
    <MapPin
      villa={villas[2]}
      class="w-20 absolute top-[65.12%] left-[42.18%]"
    />
    <MapPin
      villa={villas[3]}
      class="w-20 absolute top-[71.12%] left-[47.02%]"
    />
  </div>
</div>

<div
  class="bg-cover md:hidden bg-top overflow-hidden pt-96 pb-40 relative flex flex-col"
  style="background-image: url({mobileBGUrl});"
>
  <div class="px-8 flex justify-end">
    <TopLocationsInfo />
  </div>

  <div bind:this={scrollTarget} class="w-full flex justify-center mt-20 -mb-36 z-10">
    <TopLocationBadgeMobile
      class="flex w-[90%] items-center overflow-hidden rounded-[40px] relative h-[610px]"
      villa={activeVilla}
    />
  </div>

  <div class="pt-8 relative flex flex-col w-full items-center">
    <img src={MapMobile} alt="Map" class="w-full" />
    <div
      class="absolute left-1/2 md:hidden flex -translate-x-1/2 h-full top-0 w-[110%] overflow-hidden"
    >

      <MapPinMobile
        scroll={scrollToElement}
        villa={villas[0]}
        bind:activeVilla
        class="w-12 absolute top-[45.93%] left-[33.35%]"
        
      />
      <MapPinMobile
        scroll={scrollToElement}
        villa={villas[1]}
        bind:activeVilla
        class="w-12 absolute top-[55.74%] left-[48.23%]"
      />
      <MapPinMobile
        scroll={scrollToElement}
        villa={villas[2]}
        bind:activeVilla
        class="w-12 absolute top-[60.12%] left-[37.18%]"
      />
      <MapPinMobile
        scroll={scrollToElement}
        villa={villas[3]}
        bind:activeVilla
        class="w-12 absolute top-[67.12%] left-[41.02%]"
      />
    </div>
  </div>
 

  
</div>
