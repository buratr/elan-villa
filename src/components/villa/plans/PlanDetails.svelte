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
    },
    {
      name: "Kitchen",
    },
    {
      name: "Bedroom 1",
    },
    {
      name: "Bedroom 2",
    },
    {
      name: "Bedroom 3",
    },
    {
      name: "Bathroom 1",
    },
    {
      name: "Outdoor",
    },
    {
      name: "Bathroom 3",
    },
    {
      name: "Exterior",
    },
    {
      name: "Gym",
    },
  ];

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
      <h3 class="font-athena text-[35px] text-white">Outdoors</h3>
      <h3 class="font-athena text-[35px] text-purple-light">16,6 m2</h3>
      <span
        class="text-white text-xs md:text-base pt-8 md:tracking-normal tracking-widest"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna.
      </span>
    </div>
    <div class="grid md:grid-cols-2 md:grid-rows-2 gap-8 w-fit py-11">
      <div class="flex items-center justify-start gap-4">
        <LordIcon name="pool" size="60" class="text-purple" />
        <span class="text-white font-medium">Pool</span>
      </div>

      <div class="flex items-center justify-start gap-4">
        <LordIcon name="barbecue" size="60" class="text-purple" />
        <span class="text-white font-medium">Barbecue</span>
      </div>

      <div class="flex items-center justify-start gap-4">
        <LordIcon name="tennis-courte" size="60" class="text-purple" />
        <span class="text-white font-medium">Tennis court</span>
      </div>

      <div class="flex items-center justify-start gap-4">
        <LordIcon name="garage" size="60" class="text-purple" />
        <span class="text-white font-medium">Garage</span>
      </div>
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
