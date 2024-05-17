<script lang="ts">
  import Circle from "@components/atoms/Circle.svelte";
  import StepLayout from "../StepLayout.svelte";
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

  let active: number | undefined = undefined;
  const experienceGroup = [
    {
      name:"Casual Trip",
      options:["Meet & Greet", 
      "Escort to/from the villa", 
      "Welcome gifts", 
      "Daily maid service", 
      "Villa specialist"]
    },
    {
      name:"Travel Peacefully",
      options:["Meet & Greet", 
      "Escort to/from the villa", 
      "Welcome gifts", 
      "Daily maid service", 
      "Villa specialist", 
      "Continental breakfast", 
      "Car rental quote", 
      "Airplane tickets quote"]
    },
    {
      name:"Premium Holiday",
      options:["Meet & Greet", 
      "Escort to/from the villa", 
      "Welcome gifts", 
      "Daily maid service", 
      "Villa specialist", 
      "Continental breakfast", 
      "Car rental quote", 
      "Airplane tickets quote", 
      "Concierge service 24/7", 
      "Restaurants reservations", 
      "Activities reservations"]
    },
  ]


  let experience = [
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
      icon: IconCarrent,
      decs: "Car rental quote",
      active: false,
    },
    {
      id: 8,
      icon: IconAirplane,
      decs: "Airplane tickets quote",
      active: false,
    },
    {
      id: 9,
      icon: IconService,
      decs: "Concierge service 24/7",
      active: false,
    },
    {
      id: 10,
      icon: IconPlate,
      decs: "Restaurants reservations",
      active: false,
    },
    {
      id: 11,
      icon: IconYacht,
      decs: "Activities reservations",
      active: false,
    },
    
  ];

  const findActiveGroup = () => {
    const activeOptionsSet = new Set(experience.filter(item => item.active).map(item => item.decs));
    let matchingGroupId = -1;
    experienceGroup.forEach((group, index) => {
        const groupOptions = new Set(group.options);
        if ([...groupOptions].every(option => activeOptionsSet.has(option))) {
            matchingGroupId = index;
        }
    });
    return matchingGroupId+1;
  }

  const addExperience = (id: number) => {
    experience.forEach((exp, i) => {
      if (exp.id === id) {
        experience[i]["active"] = !experience[i]["active"];
      }
    });
    active=findActiveGroup()
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

  const trevelPlancChange = (plan:number)=>{
    experience.map(item => {item.active = false;return item; });

    experienceGroup[plan-1].options.forEach((option)=>{
      experience.map(item => {
        if (item.decs === option) {
          item.active = true;
        }
        return item;
      });
      //console.log(findOption)
    })
    experience = [...experience]
  }

</script>

<StepLayout>
  <div
    slot="left"
    class="px-10 md:p-0 flex items-end text-xs md:text-base flex-col text-white text-right"
  >
    <div class="flex flex-col max-w-md pb-40">
      <span class="text-[20px] md:text-[35px] pb-12 font-bold text-white">
        STEP 1
      </span>
      <span class="md:text-[35px] font-amsterdam pb-20 text-purple-light">
        The package
      </span>

      <p class="pb-6">
        In order to adapt our offer as best as we can, we give you full control
        over what you want during your stay.
      </p>
      <p class="text-[9px] md:text-xs">
        Offers cannot be combined with our welcome offer
      </p>
    </div>
  </div>
  <div slot="icon" class="flex justify-center">
    <Circle class="!w-[72px] !h-[72px] wide" light selected />
  </div>
  <div slot="right">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="hidden md:grid grid-cols-3 gap-x-4 pt-10 justify-center items-start"
     >
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="{active === 1
          ? 'active-select !min-h-[260px]'
          : ''} flex relative flex-col text-center justify-center min-h-[231px] rounded-[30px] max-w-[220px] pt-20 bg-white/80 shadow-select px-4 pb-6 gap-4 items-center"
       >
        <div
          class="p-4 absolute bg-gradient-to-r from-purple-dark to-purple-darker rounded-full -top-[55px]"
        >
          <LordIcon src={IconBag} size="91" class="text-white" />
        </div>
        <span class=" text-[20px] font-athena {active === 1 ? 'text-white text-[30px]' : ''}"
          >Casual trip</span
        >
        <span
          class="text-purple text-sm {active === 1 ? 'text-purple-light' : ''}"
          >-50 % off services fees</span
        >
        <Button
          on:click={() => {trevelPlancChange(1); active = 1}}
          style={active === 1 ? "primary" : "outlined"}>Select</Button
        >
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="{active === 2
          ? 'active-select !min-h-[260px]'
          : ''} flex relative flex-col text-center justify-center min-h-[231px] rounded-[30px] max-w-[220px] pt-16 bg-white/80 shadow-select px-4 pb-6 gap-4 items-center"
      >
        <div
          class="p-4 absolute bg-gradient-to-r from-purple-dark to-purple-darker rounded-full -top-[55px]"
        >
          <LordIcon src={IconPeace} size="91" class="text-white" />
        </div>
        <span class="mt-4 text-[20px] font-athena {active === 2 ? 'text-white text-[30px]' : ''}"
          >Travel peacefully</span
        >
        <span
          class="text-purple text-sm {active === 2 ? 'text-purple-light' : ''}"
          >-25 % off services fees</span
        >
        <Button
          on:click={() => {trevelPlancChange(2); active = 2}}
          style={active === 2 ? "primary" : "outlined"}>Select</Button
        >
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="{active === 3
          ? 'active-select !min-h-[260px]'
          : ''} flex relative flex-col text-center justify-center min-h-[231px] rounded-[30px] max-w-[220px] pt-16 bg-white/80 shadow-select px-4 pb-6 gap-4 items-center"
        >
        <div
          class="p-4 absolute bg-gradient-to-r from-purple-dark to-purple-darker rounded-full -top-[55px]"
          >
          <LordIcon src={IconDiamond} size="91" class="text-white" />
        </div>
        <span class="mt-4 text-[20px] font-athena {active === 3 ? 'text-white text-[30px]' : ''}"
          >Premium holiday</span
        >
        <Button
          on:click={() => {trevelPlancChange(3); active = 3}}
          style={active === 3 ? "primary" : "outlined"}>Select</Button
        >
      </div>
    </div>

    <div class="md:hidden">
      <Step3SliderMobile />
    </div>
  </div>
</StepLayout>
<StepLayout>
  <div slot="icon" class="flex items-center justify-center">
    <div class="icon-bg p-4 rounded-full">
      <LordIcon src={IconLab} size="72" class="text-purple-light" />
    </div>
  </div>
  <div slot="left" class="flex items-center justify-end text-end self-center">
    <div class="flex flex-col max-w-md pb-40 items-end text-white">
      <p
        class="text-[25px] md:text-[35px] max-w-xs font-athena text-white self-end pb-8"
      >
        Tailor-made Experience
      </p>
      <p class="text-sm md:text-base">
        Here, the services are “à la carte” ! <br />  Add what you want, remove what
        you don’t.
      </p>
    </div>
  </div>

  <div slot="right">
    <div class="flex w-full justify-center flex-col items-center pt-10">
      <div
        class="max-w-[90%] w-fit gap-y-8 gap-4 xl:gap-x-0 justify-center hidden md:flex flex-wrap"
      >
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        {#each experience as exp, index}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <button
            style="flex: 0 0 200px"
            class="flex justify-center"
            on:click={() => addExperience(exp.id)}
          >
            <Experience experience={exp} />
          </button>
        {/each}
      </div>
    </div>
  </div>
</StepLayout>
<StepLayout>
  <div slot="icon" class="flex items-center justify-center">
    <div class="icon-bg p-4 rounded-full">
      <LordIcon src={IconExtra} size="72" class="text-purple-light" />
    </div>
  </div>
  <div slot="left" class="flex items-center justify-end text-end self-center">
    <div class="flex flex-col max-w-md pb-40 items-end text-white">
      <p
        class="text-[25px] md:text-[35px] max-w-xs test-right font-athena text-white self-end pb-8"
      >
        Extra cost
      </p>
      <p class="text-sm max-w-xs md:text-base">
        Complete with all you might need, our agents will take care of giving
        you quotes from the best providers.
      </p>
    </div>
  </div>

  <div slot="right" class="pb-20">
    <!-- <div class="flex flex-wrap w-full gap-8 pt-10">
      <span class="text-white w-1/2">You want us to book your flight ?</span>
      <div class="flex gap-4">
        <button
          on:click={() => (bookFlight = true)}
          class="flex items-center gap-4 text-white"
        >
          Yes
          <Circle light selected={bookFlight}></Circle>
        </button>
        <button
          on:click={() => (bookFlight = false)}
          class="flex items-center gap-4 text-white"
        >
          No, thanks
          <Circle light selected={!bookFlight}></Circle>
        </button>
      </div>
    </div> -->
    <div
      class="md:flex w-full justify-center flex-col items-center gap-4 pt-20"
      >
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      {#each services.slice(0, 5) as service, index}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <button
          class="flex w-full h-full flex-col md:flex-row gap-y-4 gap-x-8 items-center pb-4 md:pb-0"
          on:click={() => addService(service.id)}
        >
          <Service {service} />
        </button>
      {/each}
    </div>
    {#if showAllExtra}
      <div
        transition:slide
        class="md:flex w-full justify-center flex-col items-center gap-4 pt-4"
      >
        {#each services.slice(5, services.length) as service, index}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <button
            class="flex w-full h-full flex-col md:flex-row gap-y-4 gap-x-8 items-center pb-4 md:pb-0"
            on:click={() => addService(service.id)}
          >
            <Service {service} />
          </button>
        {/each}
      </div>
    {/if}

    <div
      class="flex md:justify-start justify-center items-center pt-20 md:pt-10 md:pl-[10%] {showAllExtra
        ? 'hidden'
        : 'flex'}"
    >
      <Button on:click={() => (showAllExtra = true)} style="primary"
        >all extra services</Button
      >
    </div>
  </div>
</StepLayout>

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
