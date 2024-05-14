<script lang="ts">
  import { onMount } from 'svelte';
  import Circle from "@components/atoms/Circle.svelte";
  import StepLayout from "./StepLayout.svelte";
  import LordIcon from "@components/atoms/LordIcon.svelte";
  import IconBag from "@assets/icons-json/725-suitcase-travel-baggage-luggage.rough.json?url";
  import Button from "@components/atoms/Button.svelte";
  import IconPeace from "@assets/icons-json/1939-peace-sign.rough.json?url";
  import Step3SliderMobile from "@components/villa/vacation-plan/Step3SliderMobile.svelte";
  import IconLab from "@assets/icons-json/1243-chemistry.rough.json?url";
  import IconExtra from "@assets/icons-json/381-plus-minus-morph.rough.json?url";
  import IconPlane from "@assets/icons-json/830-plane-2.rough.json?url";
  import IconGift from "@assets/icons-json/412-gift.rough.json?url";
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
  import IconCheff from "@assets/icons-json/675-male-cook.rough.json?url";
  import IconSecurity from "@assets/icons-json/1708-home-safety.rough.json?url";
  import IconDiamond from "@assets/icons-json/724-diamond-luxury-precious.rough.json?url";
  import Experience from "@components/villa/vacation-plan/Experience.svelte";
  import Service from "@components/villa/vacation-plan/Service.svelte";
  import { slide } from "svelte/transition";
  import Step1 from "./steps/Step1.svelte";
  import Step1Mobile from "./steps/Step1Mobile.svelte";
  import Step2 from "./steps/Step2.svelte";
  import Step2Mobile from "./steps/Step2Mobile.svelte";
  import Step3 from "./steps/Step3.svelte";
  import Step3Mobile from "./steps/Step3Mobile.svelte";
  import Step4 from "./steps/Step4.svelte";
  import Step4Mobile from "./steps/Step4Mobile.svelte";
  import Progress from '@components/travel-lab/Progerss.svelte';
  import { goto } from "$app/navigation";

  let active: number | undefined = undefined;
  const experience = [
    {
      id: 1,
      icon: IconPlane,
      decs: "Meet & Greet",
      active: false,
    },
    {
      id: 2,
      icon: IconCar,
      decs: "Escort to/from the villa",
      active: false,
    },
    {
      id: 3,
      icon: IconGift,
      decs: "Welcome gifts",
      active: false,
    },
    {
      id: 4,
      icon: IconTowel,
      decs: "Daily maid service",
      active: false,
    },
    {
      id: 5,
      icon: IconCustomer,
      decs: "Villa specialist",
      active: false,
    },
    {
      id: 6,
      icon: IconCroissant,
      decs: "Continental breakfast",
      active: false,
    },
    {
      id: 7,
      icon: IconService,
      decs: "Concierge service 24/7",
      active: false,
    },
    {
      id: 8,
      icon: IconPlate,
      decs: "Restaurants reservations",
      active: false,
    },
    {
      id: 9,
      icon: IconYacht,
      decs: "Activities reservations",
      active: false,
    },
    {
      id: 10,
      icon: IconCarrent,
      decs: "Car rental quote",
      active: false,
    },
    {
      id: 11,
      icon: IconAirplane,
      decs: "Airplane tickets quote",
      active: false,
    },
  ];

  const addExperience = (id: number) => {
    experience.forEach((exp, i) => {
      if (exp.id === id) {
        experience[i]["active"] = !experience[i]["active"];
      }
    });
  };

  const services = [
    {
      id: 1,
      icon: IconClean,
      title: "Housekeeping 7/7",
      decs: "Instead of 6 days a week. A maid will provide services on Sundays and bank holidays.",
      active: false,
    },
    {
      id: 2,
      icon: IconDriver,
      title: "Private Driver",
      decs: "Don’t worry about driving on the island, a private driver is there for you.",
      active: false,
    },
    {
      id: 3,
      icon: IconCheff,
      title: "Private Chef",
      decs: "Don’t worry about driving on the island, a private driver is there for you.",
      active: false,
    },
    {
      id: 4,
      icon: IconService,
      title: "Private Butler",
      decs: "Don’t worry about driving on the island, a private driver is there for you.",
      active: false,
    },
    {
      id: 5,
      icon: IconSecurity,
      title: "Security guard",
      decs: "Don’t worry about driving on the island, a private driver is there for you.",
      active: false,
    },
    {
      id: 6,
      icon: IconBag,
      title: "Continental breakfast",
      decs: "Don’t worry about driving on the island, a private driver is there for you.",
      active: false,
    },
    {
      id: 7,
      icon: IconBag,
      title: "Concierge service 24/7",
      decs: "Don’t worry about driving on the island, a private driver is there for you.",
      active: false,
    },
    {
      id: 8,
      icon: IconBag,
      title: "Restaurants reservations",
      decs: "Don’t worry about driving on the island, a private driver is there for you.",
      active: false,
    },
    {
      id: 9,
      icon: IconBag,
      title: "Activities reservations",
      decs: "Don’t worry about driving on the island, a private driver is there for you.",
      active: false,
    },
    {
      id: 10,
      icon: IconBag,
      title: "Car rental quote",
      decs: "Don’t worry about driving on the island, a private driver is there for you.",
      active: false,
    },
    {
      id: 11,
      icon: IconBag,
      title: "Airplane tickets quote",
      decs: "Don’t worry about driving on the island, a private driver is there for you.",
      active: false,
    },
  ];

  let showAll = false;
  let showAllExtra = false;

  let bookFlight = true;

  const addService = (id: number) => {
    services.forEach((service, i) => {
      if (service.id === id) {
        services[i]["active"] = !services[i]["active"];
      }
    });
  };

//////////////////////////
let counter = 0, counterMob = 0;

onMount(() => {
  const startElement = document.querySelector('div[data-marker="start"]');
  const allSetElement = document.querySelector('div[data-marker="all-set"]');

  const startElementMob = document.querySelector('div[data-marker="start-mob"]');
  const allSetElementMob = document.querySelector('div[data-marker="all-set-mob"]');

  function updateCounter() {
    const windowHeight = window.innerHeight;
    const startRect = startElement.getBoundingClientRect();
    const allSetRect = allSetElement.getBoundingClientRect();

    const startRectMob = startElementMob.getBoundingClientRect();
    const allSetRectMob = allSetElementMob.getBoundingClientRect();
    
    const startOffsetTop = startRect.top;
    const allSetOffsetTop = allSetRect.top;
    const startOffsetBottom = startRect.bottom;
    const allSetOffsetBottom = allSetRect.bottom;

    const startOffsetTopMob = startRectMob.top;
    const allSetOffsetTopMob = allSetRectMob.top;
    const startOffsetBottomMob = startRectMob.bottom;
    const allSetOffsetBottomMob = allSetRectMob.bottom;

    if (startOffsetTop <= windowHeight / 2) {
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight / 2 - startOffsetTop) / (allSetOffsetBottom - startOffsetTop))) * 100;
      counter = Math.ceil(scrollProgress);
    }else{
      counter = 0
    }
    if (startOffsetTopMob <= windowHeight / 2) {
      const scrollProgressMob = Math.max(0, Math.min(1, (windowHeight / 2 - startOffsetTopMob) / (allSetOffsetBottomMob - startOffsetTopMob))) * 100;
      counterMob = Math.ceil(scrollProgressMob);
    }else{
      counterMob =0
    }

  }

  window.addEventListener('scroll', updateCounter);
  updateCounter(); // Вызываем после инициализации

  return () => {
    window.removeEventListener('scroll', updateCounter);
  };
});

console.log(counter)
</script>



<div class="px-[3%] hidden lg:flex w-full flex-col justify-center">
  <div data-marker="start">
    <Progress val={counter}/>
  </div>
  <Step1 />
  <Progress val={counter}/>
  <Step2 />
  <Progress val={counter}/>
  <Step3 />
  <Progress val={counter}/>
  <Step4 />

  <div class="flex flex-col w-full text-center pb-10 md:pb-24 px-8 md:px-0 pt-20">
    <div data-marker="all-set"
      class="flex justify-center items-center w-full md:px-[8%] lg:px-[15%] gap-4 pb-10"
      >
      <div class="w-full flex-1 h-1 dashed-spaced hidden md:block"></div>
      <span class="text-white text-[25px] md:text-[35px] font-bold">
        <span class="flex md:inline justify-center w-full">ALL SET ?</span>
        <span> LET’S GO TO THE FINAL STEP !</span>
      </span>
      <div class="w-full flex-1 h-1 dashed-spaced hidden md:block"></div>
    </div>
    <div class="flex w-full flex-wrap justify-center items-center gap-6">
      <div class="flex">
        <Button style="outlined">finish later</Button>
      </div>
      <div class="flex">
        <Button style="primary" on:click={() => goto('/travel_lab/summary')}>FINAL STEP</Button>
      </div>
    </div>
  </div>
</div>

<div class="lg:hidden flex w-full flex-col justify-center pt-20">
  <div data-marker="start-mob">
    <Progress val={counterMob}/>
  </div>
  <Step1Mobile progressVal={counterMob}/>
  <Step2Mobile progressVal={counterMob}/>
  <Step3Mobile progressVal={counterMob}/>
  <Step4Mobile progressVal={counterMob}/>

  <div class="flex flex-col w-full text-center pb-10 md:pb-24 px-8 md:px-0 pt-20">
    <div data-marker="all-set-mob"
      class="flex justify-center items-center w-full md:px-[8%] lg:px-[15%] gap-4 pb-10"
    >
      <div class="w-full flex-1 h-1 dashed-spaced hidden md:block"></div>
      <span class="text-white text-[25px] md:text-[35px] font-bold">
        <span class="flex md:inline justify-center w-full">ALL SET ?</span>
        <span> LET’S GO TO THE FINAL STEP !</span>
      </span>
      <div class="w-full flex-1 h-1 dashed-spaced hidden md:block"></div>
    </div>
    <div class="flex w-full flex-wrap justify-center items-center gap-6">
      <div class="flex">
        <Button style="outlined">finish later</Button>
      </div>
      <div class="flex">
        <Button style="primary" on:click={() => goto('/travel_lab/summary')}>FINAL STEP</Button>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .active-select {
    background: radial-gradient(
        49.31% 85.29% at 9.85% 4.97%,
        rgba(134, 134, 218, 0.6) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(0deg, #000023, #000023);
  }

  .icon-bg {
    background: radial-gradient(
        102.69% 101.16% at 100% 3.15%,
        rgba(30, 30, 30, 0.5) 3.35%,
        rgba(164, 164, 164, 0.075) 30.04%,
        rgba(255, 255, 255, 0) 66.38%
      ),
      linear-gradient(0deg, #1e1e1e, #1e1e1e);
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
  }
</style>
