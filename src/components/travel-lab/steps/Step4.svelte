<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  import { writable } from 'svelte/store';
  import Circle from "@components/atoms/Circle.svelte";
  import StepLayout from "../StepLayout.svelte";
  import specialOffers from "@assets/images/casa-tua.png";
  import ultraLuxe from "@assets/images/652-40.png";
  import contemporary from "@assets/images/you1.png";
  import caribbean from "@assets/images/chanticleer 1.png";
  import friends from "@assets/images/casa-tua 1.png";
  import honeyMoon from "@assets/images/Mask group.png";
  import beach from "@assets/images/chambre-2.png";
  import Input from "@components/atoms/Input.svelte";
  import LordIcon from "@components/atoms/LordIcon.svelte";
  import Guests from "@components/filters/Guests.svelte";
  import Select from "@components/atoms/Select.svelte";
  import Counter from "@components/atoms/Counter.svelte";
  import capture from "@assets/images/Capture.png";
  import userIcon from "@assets/icons-json/306-avatar-icon-calm.rough.json?url";
  import carIcon from "@assets/icons-json/845-car-site-2.rough.json?url";
  import bagIcon from "@assets/icons-json/725-suitcase-travel-baggage-luggage.rough.json?url";
  import { PlusCircleIcon } from "svelte-feather-icons";
  import SeatsRange from '../SeatsRange.svelte';

let valueSeasonsInput:string

const dispatch = createEventDispatcher();

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

  let car1 = ["Normal", "Both", "4x4"];
  let activeCar1 = "Normal";
  let car2 = ["Normal", "Both","Convertible"];
  let activeCar2 = "Normal";
  let car3 = ["Electric", "Both","Gas"];
  let activeCar3 = "Electric";

  let bookFlight = true;
  let bookRoad = true;

  const selectCollection = (id: number) => {
    collections.forEach((collection, index) => {
      collection.id === id
        ? (collections[index]["active"] = true)
        : (collections[index]["active"] = false);
    });
  };

  let activeSeasons = writable([
    {
      id: 1,
      title: "Extra Suitcase",
      active: false,
    },
    {
      id: 2,
      title: "Business Class",
      active: false,
    },
    {
      id: 3,
      title: "VIP Service",
      active: false,
    },
    {
      id: 4,
      title: "Chair-wheel",
      active: false,
    },
    {
      id: 5,
      title: "Private charter to St Barth",
      active: false,
    },
  ]);
  // let activeSeasons = [
  //   {
  //     id: 1,
  //     title: "Extra Suitcase",
  //     active: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Business Class",
  //     active: false,
  //   },
  //   {
  //     id: 3,
  //     title: "VIP Service",
  //     active: false,
  //   },
  //   {
  //     id: 4,
  //     title: "Chair-wheel",
  //     active: false,
  //   },
  //   {
  //     id: 5,
  //     title: "Private charter to St Barth",
  //     active: false,
  //   },
  // ];

  let cars = [
    {
      id: 1,
      title: "Suzuki Jimny",
      people: "4",
      bags: "2",
      doors: "4",
      image: capture,
      active: false,
    },
    {
      id: 2,
      title: "Suzuki Jimny",
      people: "4",
      bags: "2",
      doors: "4",
      image: capture,
      active: false,
    },
    {
      id: 3,
      title: "Suzuki Jimny",
      people: "4",
      bags: "2",
      doors: "4",
      image: capture,
      active: false,
    },
    {
      id: 4,
      title: "Suzuki Jimny",
      people: "4",
      bags: "2",
      doors: "4",
      image: capture,
      active: false,
    },
    {
      id: 5,
      title: "Suzuki Jimny",
      people: "4",
      bags: "2",
      doors: "4",
      image: capture,
      active: false,
    },
    {
      id: 6,
      title: "Suzuki Jimny",
      people: "4",
      bags: "2",
      doors: "4",
      image: capture,
      active: false,
    },
    {
      id: 7,
      title: "Suzuki Jimny",
      people: "4",
      bags: "2",
      doors: "4",
      image: capture,
      active: false,
    },
    {
      id: 8,
      title: "Suzuki Jimny",
      people: "4",
      bags: "2",
      doors: "4",
      image: capture,
      active: false,
    },
  ];

  const selectSeason = (id: number) => {
    activeSeasons.update(seasons => {
      const index = seasons.findIndex(season => season.id === id);
      if (index !== -1) {
        seasons[index]["active"] = !seasons[index]["active"]; // Обновляем данные элемента
      }
      return seasons;
    });

    //activeSeasons[id-1]["active"] = !activeSeasons[id-1]["active"]
    // activeSeasons.forEach((season, index) => {
    //   season.id === id
    //     ? (activeSeasons[index]["active"] = true)
    //     : (activeSeasons[index]["active"] = false);
    // });
  };

  const selectCar = (id: number) => {
    cars.forEach((car, index) => {
      car.id === id
        ? (cars[index]["active"] = true)
        : (cars[index]["active"] = false);
    });
  };

  const resetSeason = () => {
    // activeSeasons.forEach((season, index) => {
    //   activeSeasons[index]["active"] = false;
    // });
  };

  const addSeason = ()=>{
    if(valueSeasonsInput){
      activeSeasons.update(seasons => [...seasons, {
        id:$activeSeasons.length+1,
        title:valueSeasonsInput,
        active:true,
      }]);
      dispatch('activeSeasonsChanged', activeSeasons);
      valueSeasonsInput=""
    }
    
  }
  const handleCar1 = (car: string) => () => {
    activeCar1 = car;
  };

  const handleCar2 = (car: string) => () => {
    activeCar2 = car;
  };

  const handleCar3 = (car: string) => () => {
    activeCar3 = car;
  };
</script>

<StepLayout>
  <div
    slot="right"
    class="px-10 md:p-0 flex text-xs md:text-base flex-col text-white"
  >
    <div class="flex flex-col max-w-md pb-40">
      <span class="text-[20px] md:text-[35px] pb-12 font-bold text-white">
        STEP 4
      </span>
      <span class="md:text-[35px] font-amsterdam pb-20 text-purple-light">
        The journey
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
  <div slot="left" class="flex justify-end">
    <div class="pl-[5%] flex flex-col w-full">
      <div class="flex flex-col">
        <span class="text-purple-light text-[20px] font-medium">
          In the air :
        </span>
        <div class="flex flex-wrap w-full gap-8 pt-10">
          <span class="text-white w-1/2">You want us to book your flight ?</span
          >
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
        </div>
        <div class="flex flex-wrap w-full gap-8 pt-10">
          <span class="text-white w-1/2"
            >Where do you start (city’s departure)</span
          >
          <div class="flex gap-4">
            <Input
              right
              placeholder="Country, city, or airport"
              class="!px-6 bg-white shadow-main min-w-[262px]"
            >
              <LordIcon name="search" size="32" class="text-black" />
            </Input>
          </div>
        </div>
        <div class="flex flex-wrap w-full gap-8 pt-10">
          <span class="text-white w-1/2">Number of PAX</span>
          <div class="flex gap-4 flex-1 w-full">
            <Guests class="bg-white/80 w-full"></Guests>
          </div>
        </div>
        <div class="flex w-full gap-8 pt-10">
          <span class="text-white w-1/2">Special needs</span>
          <div class="flex gap-4 flex-col flex-1 w-full px-8 max-w-[320px]">
            {#each $activeSeasons as season}
              <div class="flex w-full justify-between">
                <div class="flex flex-col text-white">
                  <p>{season.title}</p>
                </div>
                <button on:click={() => selectSeason(season.id)}>
                  <Circle light selected={season.active} />
                </button>
              </div>
            {/each}
            <div class="relative flex justify-end items-center">
              <Input
                right
                bind:value={valueSeasonsInput}
                on:click={() => {
                  resetSeason();
                }}
                placeholder="Other"
                class="!px-6 bg-white/80 shadow-main min-w-[262px] w-full"
              ></Input>
              <button
                on:click={() => {
                  addSeason();
                }}
                class="absolute right-2 {valueSeasonsInput?"block":"hidden"}"> <PlusCircleIcon size="32" class="text-[#3E127F]" />
              </button>
            </div>
            
          </div>
        </div>
      </div>

      <div class="flex flex-col">
        <span class="text-purple-light text-[20px] font-medium">
          On the road :
        </span>
        <div class="flex flex-wrap w-full gap-8 pt-10">
          <span class="text-white w-1/2"
            >You want us to book your car rental ?</span
          >
          <div class="flex gap-14 w-full flex-1 justify-end">
            <button
              on:click={() => (bookRoad = true)}
              class="flex items-center gap-4 text-white"
            >
              Yes
              <Circle light selected={bookRoad}></Circle>
            </button>
            <button
              on:click={() => (bookRoad = false)}
              class="flex items-center gap-4 text-white"
            >
              No, thanks
              <Circle light selected={!bookRoad}></Circle>
            </button>
          </div>
        </div>
        <div class="flex flex-wrap w-full gap-8 pt-10">
          <span class="text-white w-1/2">Choose my broker</span>
          <div class="flex gap-14 w-full flex-1 justify-end">
            <Select
              class="max-w-[260px] bg-white/80 w-[260px]"
              selectedValue="Sort by area"
              options={["Broker 1", "Broker 2", "Broker 3"]}
            />
          </div>
        </div>
        <div class="flex flex-wrap w-full gap-8 pt-10">
          <span class="text-white w-1/2">Pick a vehicle</span>
          <div class="flex gap-4 flex-1 w-full flex-col">
            <div class="flex gap-4 flex-col w-full flex-1 justify-end items-end">
              <span class="text-white font-medium">Seats number</span>
              <!-- <Counter class="!w-28 xl:w-32" gradient /> -->
              <div class="!w-64 xl:w-32 mt-4">
                <SeatsRange />
              </div>
              

            </div>
            <div class="flex gap-4 flex-1 w-full flex-col items-end">
              <div
                class="flex items-center justify-around rounded-[30px] w-full max-w-[300px] shadow-select p-2 bg-white/80"
              >
                {#each car1 as car}
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <!-- svelte-ignore a11y-no-static-element-interactions -->
                  <div
                    on:click={handleCar1(car)}
                    class="{activeCar1 === car
                      ? 'active-range rounded-[30px] shadow-select bg-black text-white'
                      : ''} px-6 transition-all cursor-pointer hover:scale-105 text-center"
                  >
                    <span>{car}</span>
                  </div>
                {/each}
              </div>
              <div
                class="flex items-center justify-around rounded-[30px] w-full max-w-[360px] shadow-select p-2 bg-white/80"
              >
                {#each car2 as car}
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <!-- svelte-ignore a11y-no-static-element-interactions -->
                  <div
                    on:click={handleCar2(car)}
                    class="{activeCar2 === car
                      ? 'active-range rounded-[30px] shadow-select bg-black text-white'
                      : ''} px-6 transition-all cursor-pointer hover:scale-105 text-center"
                  >
                    <span>{car}</span>
                  </div>
                {/each}
              </div>
              <div
                class="flex items-center justify-around rounded-[30px] w-full max-w-[300px] shadow-select p-2 bg-white/80"
              >
                {#each car3 as car}
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <!-- svelte-ignore a11y-no-static-element-interactions -->
                  <div
                    on:click={handleCar3(car)}
                    class="{activeCar3 === car
                      ? 'active-range rounded-[30px] shadow-select bg-black text-white'
                      : ''} px-6 transition-all cursor-pointer hover:scale-105 text-center"
                  >
                    <span>{car}</span>
                  </div>
                {/each}
              </div>

              <div class="flex bg-white/80 flex-col rounded-[30px] p-8">
                <Select
                  class="max-w-[260px] shadow-none bg-transparent w-[260px]"
                  selectedValue="Models"
                  options={["Model 1", "Model 2", "Model 3"]}
                />

                <div class="flex gap-4 flex-col pt-4">
                  {#each cars as car}
                    <div class="flex w-full justify-between gap-4 items-center">
                      <div class="flex rounded-full w-16 h-16 bg-white p-3">
                        <img src={car.image} class="w-16" alt="" />
                      </div>
                      <div class="flex w-full flex-col flex-1">
                        <span class="text-xs">{car.title}</span>
                        <div class="flex gap-4 text-[8px] pt-1">
                          <div class="flex items-center gap-1">
                            <LordIcon src="{userIcon}" trigger="" size="12" class="text-black" />
                            <span>{car.people}</span>
                          </div>
                          <div class="flex items-center gap-1">
                            <LordIcon src="{bagIcon}" trigger="" size="12" class="text-black" />
                            <span>{car.bags}</span>
                          </div>
                          <div class="flex items-center gap-1">
                            <LordIcon src="{carIcon}" trigger="" size="12" class="text-black" />
                            <span>{car.doors}</span>
                          </div>
                        </div>
                      </div>
                      <button on:click={() => selectCar(car.id)}>
                        <Circle selected={car.active}></Circle>
                      </button>
                    </div>
                  {/each}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></StepLayout
>
