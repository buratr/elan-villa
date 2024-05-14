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
  import { getFilterValueById } from "@lib/stores/filtersStore";
  import Guests from "@components/filters/Guests.svelte";
  import Label from "@components/atoms/Label.svelte";
  import { locations } from "@lib/locations/locations";
  import Area from "@components/home/head/Area.svelte";
  import LordIcon from "@components/atoms/LordIcon.svelte";

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

<StepLayout>
  <div
    slot="left"
    class="px-10 md:p-0 items-end text-end flex text-xs md:text-base flex-col text-white"
  >
    <div class="flex flex-col max-w-md pb-40">
      <span class="text-[20px] md:text-[35px] pb-12 font-bold text-white">
        STEP 3
      </span>
      <span class="md:text-[35px] font-amsterdam pb-20 text-purple-light">
        The Filters
      </span>
    </div>
  </div>
  <div slot="icon" class="flex justify-center">
    <Circle class="!w-[72px] !h-[72px] wide" light selected />
  </div>
  <div slot="right" class="pb-20">
    <div class="flex flex-col">
      <span class="text-purple-light text-[20px] font-medium">
        Your dates :
      </span>
      <div class="max-w-sm">
        <Tabs class="bg-white/80 flex-row gap-0 !my-10" {items} />
      </div>
    </div>

    <div class="flex flex-col pt-14 gap-8">
      <span class="text-purple-light text-[20px] font-medium">
        Number of people :
      </span>
      <div class="max-w-sm">
        <Guests class="bg-white/80"></Guests>
      </div>
    </div>

    <div class="flex flex-col pt-14 gap-8">
        <span class="text-purple-light text-[20px] font-medium">
          Area :
        </span>
        <Area {locations} class="bg-white/80 max-w-[695px] w-full" bind:selectedAreaArr bind:selectedArea staticArea isOpen parentHeight={clientHeight} />
      </div>
  </div>
</StepLayout>
