<script lang="ts">
  import LordIcon from "@components/atoms/LordIcon.svelte";
  import Button from "@components/atoms/Button.svelte";
  import Tabs from "@components/Tabs.svelte";
  import DetailsSlider from "@components/villa/plans/DetailsSlider.svelte";
  import outdoor from "@assets/images/piscine.jpeg";
  import indoor from "@assets/images/sejour-cuisine.jpeg";
  import bedrooms from "@assets/images/chambre_3.jpeg";
  import { useModal } from "@components/Modal.svelte";
  import ModalAllFeatures from "./ModalExtra.svelte";
  import { groupBy } from "lodash";
  import IconCar from "@assets/icons-json/845-car-site-2.rough.json?url";
  import IconTowel from "@assets/icons-json/1607-towel.rough.json?url";
  import IconCustomer from "@assets/icons-json/682-male-customer-service.rough.json?url";
  import IconService from "@assets/icons-json/2334-bartender.rough.json?url";
  import IconCroissant from "@assets/icons-json/574-croissant.rough.json?url";
  import IconPlate from "@assets/icons-json/558-food-plate-warm-cover.rough.json?url";
  import IconCarrent from "@assets/icons-json/496-car-vehicle.rough.json?url";
  import IconYacht from "@assets/icons-json/839-yacht-boat.rough.json?url";
  import IconAirplane from "@assets/icons-json/490-plane-aircraft.rough.json?url";
  import IconClean from "@assets/icons-json/1645-cleaning-surface.rough.json?url";
  import IconDriver from "@assets/icons-json/912-driver-driving-person.rough.json?url";
  import IconSecurity from "@assets/icons-json/1708-home-safety.rough.json?url";
  import PlanFeature from "./PlanFeature.svelte";

  export let currentAmenities:string = "Living room"
  
  const showAllModal = () => {
    const modal = useModal({ backdropClose: true, size: "lg" });

    modal.open(ModalAllFeatures, {
      features: allFeatures,
    });
  };
  let tabs = [
    { label: "Furniture", value: 1, component: DetailsSlider },
    { label: "Mesurements", value: 2, component: DetailsSlider },
    { label: "3 Dimensions", value: 3, component: DetailsSlider },
  ];



  const items = [
    {
      name: "Living room",
      features:[{name: "Pool", icon: "pool"}, {name: "Barbecue", icon: "barbecue"}, {name: "Tennis court", icon: "tennis-courte"}, {name: "Garage", icon: "garage"}],
      square: "31,2 m2",
      description: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna."
    },
    {
      name: "Kitchen",
      features:[{name: "Pool", icon: "pool"}, {name: "Tennis court", icon: "tennis-courte"}, {name: "Garage", icon: "garage"}],
      square: "32,2 m2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna."
    
    },
    {
      name: "Bedroom 1", 
      features:[{name: "Barbecue", icon: "barbecue"}, {name: "Tennis court", icon: "tennis-courte"}, {name: "Garage", icon: "garage"}],
      square: "39,2 m2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna."
    
    },
    {
      name: "Bedroom 2",
      features:[{name: "Pool", icon: "pool"}, {name: "Barbecue", icon: "barbecue"}, {name: "Garage", icon: "garage"}],
      square: "26,2 m2",
      description: "Lorem adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum sed do eiusmod tempor incididunt ut laboreet dolore magna."
    
    },
    {
      name: "Bedroom 3",
      features:[{name: "Pool", icon: "pool"}, {name: "Barbecue", icon: "barbecue"}],
      square: "24,2 m2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna."
    
    },
    {
      name: "Bathroom 1",
      features:[{name: "Pool", icon: "pool"}, {name: "Barbecue", icon: "barbecue"}, {name: "Tennis court", icon: "tennis-courte"}, {name: "Garage", icon: "garage"}],
      square: "16,2 m2",
      description: "Lorem ipsum dolor sit amet, do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna."
    
    },
    {
      name: "Outdoor",
      features:[ {name: "Tennis court", icon: "tennis-courte"}, {name: "Garage", icon: "garage"}],
      square: "30,2 m2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet,  tempor incididunt ut laboreet dolore magna."
    
    },
    {
      name: "Bathroom 3",
      features:[ {name: "Barbecue", icon: "barbecue"}, {name: "Garage", icon: "garage"}],
      square: "3,2 m2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna."
    
    },
    {
      name: "Exterior",
      features:[{name: "Pool", icon: "pool"}, {name: "Barbecue", icon: "barbecue"},  {name: "Garage", icon: "garage"}],
      square: "7,2 m2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet,  tempor incididunt ut laboreet dolore magna."
    
    },
    {
      name: "Gym",
      features:[ {name: "Barbecue", icon: "barbecue"}, {name: "Tennis court", icon: "tennis-courte"}, {name: "Garage", icon: "garage"}],
      square: "38,9 m2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor do eiusmod tempor incididunt ut laboreet dolore magna."
    
    },
  ];

  let currentAmenitiesObg:any=items[0]

  $: {
  //console.log(items.filter((item)=>item.name === currentAmenities))
  currentAmenitiesObg=items.filter((item)=>item.name === currentAmenities)[0]
  }

  const allFeatures = {
    title: "All features title",
    group: [
      {
        title: "Group title",
        features: [
          {
            name: "Feature 1",
            icon: IconCar,
          },
          {
            name: "Feature 2",
            icon: IconTowel,
          },
          {
            name: "Feature 3",
            icon: IconCustomer,
          },
          {
            name: "Feature 4",
            icon: IconService,
          },
        ],
      },
      {
        title: "Group title 2",
        features: [
          {
            name: "Feature 1",
            icon: IconCroissant,
          },
          {
            name: "Feature 2",
            icon: IconPlate,
          },
          {
            name: "Feature 3",
            icon: IconCarrent,
          },
          {
            name: "Feature 4",
            icon: IconYacht,
          },
        ],
      },
      {
        title: "Group title 3",
        features: [
          {
            name: "Feature 1",
            icon: IconAirplane,
          },
          {
            name: "Feature 2",
            icon: IconClean,
          },
          {
            name: "Feature 3",
            icon: IconDriver,
          },
          {
            name: "Feature 4",
            icon: IconSecurity,
          },
        ],
      },
    ],
  };
  export let detailsImages: any = [outdoor, indoor, bedrooms];

  let gap = 0,
    outerWidth: number;

  $: gap = outerWidth >= 960 ? 40 : 0;
</script>

<svelte:window bind:outerWidth />
<div
  class="w-full flex flex-col md:grid md:grid-cols-2 md:px-[9%] md:pt-56 md:pb-72 md:gap-[4%] lg:gap-[10%]"
>
  <div class="flex flex-col w-full order-2 md:order-1 px-16 py-24 md:!p-0">
    <div class="flex flex-col">
      <h3 class="font-athena text-[35px] text-white">{currentAmenitiesObg.name}</h3>
      <h4 class="font-athena text-[25px] text-purple-light">{currentAmenitiesObg.square}</h4>
      <span
        class="text-white text-xs md:text-base pt-8 md:tracking-normal tracking-widest"
      >
      {currentAmenitiesObg.description}
      </span>
    </div>
    <div class="grid md:grid-cols-2 md:grid-rows-2 gap-8 w-fit py-11">
      {#each currentAmenitiesObg.features as feature}
        <PlanFeature iconName={feature.icon} featureName={feature.name}/>
      {/each}
    </div>
    <div class="flex">
      <Button on:click={showAllModal} style="primary">all features</Button>
    </div>
  </div>
  <div class="flex flex-col w-full order-1 px-4 md:!p-0">
    <Tabs
      items={tabs}
      tabsClass="px-16 md:p-0"
      class="bg-white/50 flex-row !text-xs md:!text-sm self-center md:self-start shadow-select !mb-8 mt-8 md:mt-0 max-w-[372px]"
    />
  </div>
</div>
