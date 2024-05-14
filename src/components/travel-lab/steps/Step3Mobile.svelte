<script lang="ts">
  import Circle from "@components/atoms/Circle.svelte";
  import StepLayout from "../StepLayout.svelte";
  import specialOffers from "@assets/images/casa-tua.png";
  import ultraLuxe from "@assets/images/652-40.png";
  import contemporary from "@assets/images/you1.png";
  import caribbean from "@assets/images/chanticleer 1.png";
  import friends from "@assets/images/casa-tua 1.png";
  import honeyMoon from "@assets/images/Mask group.png";
  import beach from "@assets/images/chambre-2.png";
  import Tabs from "@components/Tabs.svelte";
  import DateFilter from "@components/filters/date/DateFilter.svelte";
  import SeasonsFilter from "../SeasonsFilter.svelte";
  import EventsFilter from "@components/filters/date/EventsFilter.svelte";
  import Guests from "@components/filters/Guests.svelte";
  import { locations } from "@lib/locations/locations";
  import Area from "@components/home/head/Area.svelte";
  import AreaMobile from "@components/home/head/AreaMobile.svelte";
  import Progress from '@components/travel-lab/Progerss.svelte';
  
  export let progressVal;

  let items = [
    { label: "By season", value: 2, component: SeasonsFilter },
    { label: "By dates", value: 1, component: DateFilter },
    { label: "By events", value: 3, component: EventsFilter },
  ];


  let isPopupOpen = false;
  let clientHeight: number;
  let selectedArea: string | undefined = undefined;

  const collections = [
    {
      id: 1,
      title: "Special offers",
      desc: "Perfect accommodations to share memories",
      img: specialOffers,
      active: false,
    },
    {
      id: 2,
      title: "Ultra luxe",
      desc: "The excellence of the villas on the island are here",
      img: ultraLuxe,
      active: false,
    },
    {
      id: 3,
      title: "Contemporary",
      desc: "L’excellence des villas sur l’île sont ici",
      img: contemporary,
      active: false,
    },
    {
      id: 4,
      title: "Caribbean",
      desc: "Envie de vous plongez dans l’ambiance créole ?",
      img: caribbean,
      active: false,
    },
    {
      id: 5,
      title: "Family and friends",
      desc: "Perfect accommodations to share memories",
      img: friends,
      active: false,
    },
    {
      id: 6,
      title: "Honey Moon",
      desc: "For those who needs to feel the romantic vibe",
      img: honeyMoon,
      active: false,
    },
    {
      id: 7,
      title: "On the beach",
      desc: "Only few steps from the beach",
      img: beach,
      active: false,
    },
  ];

  const selectCollection = (id: number) => {
    collections.forEach((collection, index) => {
      collection.id === id
        ? (collections[index]["active"] = true)
        : (collections[index]["active"] = false);
    });
  };
  
  let selectedAreaArr: string[] = [];
  let areaString:string =""
  $: {
    areaString=""
    selectedAreaArr.forEach((item, id)=>{
      if(selectedAreaArr.length != id+1){
        areaString += item +", "
      }else{
        areaString += item
      }
    })
  }

</script>
<div class="flex flex-col">
  <div class="flex flex-col justify-center text-center pt-20">
    <div class="h-[120px] relative flex justify-center items-end">
      <div class="absolute w-full h-full dashed-vertical -z-10 -top-1/2"></div>
      <Circle class="!w-[72px] !h-[72px] wide" light selected />
    </div>
    <span class="text-[35px] pb-12 font-bold text-white pt-6"> STEP 3 </span>
    <span class="text-[25px] font-amsterdam pb-10 text-purple-light">
      The Filters
    </span>

    <p class="pb-6 text-white px-10">
      In order to adapt our offer as best as we can, we give you full control
      over what you want during your stay.
    </p>
    <p class="text-[9px] md:text-xs px-10 text-white">
      Offers cannot be combined with our welcome offer
    </p>
  </div>
</div>

<div class="flex flex-col justify-center px-8 items-center">
  <span class="text-purple-light text-[20px] font-medium">
    Your dates :
  </span>
  <div class="max-w-sm">
    <Tabs class="bg-white/80 flex-row gap-0 !my-10" {items} />
  </div>
</div>

<div class="flex flex-col justify-center items-center gap-8 pt-10">
  <span class="text-purple-light text-[20px] font-medium">
    Number of people :
  </span>
  <div class="w-full flex justify-center">
    <Guests class="bg-white/80 w-full max-w-full"></Guests>
  </div>
</div>

<div class="flex flex-col justify-center items-center gap-8 pt-10 px-20">
  <span class="text-purple-light text-[20px] font-medium">
    Area :
  </span>
  <div class="w-full flex justify-center">
    <AreaMobile {locations} class="bg-white/80 max-w-[695px] w-full" bind:selectedAreaArr bind:selectedArea staticArea isOpen parentHeight={clientHeight} />
  </div>
</div>

<div class="h-[70px] relative flex justify-center items-end mt-8">
  <div class="absolute w-full h-full dashed-vertical -z-10 top-0"></div>
</div>
<Progress val={progressVal}/>