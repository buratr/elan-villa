<script lang="ts">
  import SelectButton from "@components/atoms/SelectButton.svelte";
  import PlanStep from "../PlanStep.svelte";
  import StepLayout from "../StepLayout.svelte";
  import Circle from "@components/atoms/Circle.svelte";
  import IconArrowLeft from "@assets/svgs/icons/arrow-left.svg?component";
  import Bedrooms from "@components/filters/Bedrooms.svelte";

  let ranges = ["Weekly", "Daily"];
  let activeRange = "Weekly";
  let currencies = ["EUR", "USD"];
  let activeCurrency = "USD";
  let start = 0;
  let selectedEvent: string | undefined = undefined;
  let bedrooms: number = 1;
  let active: string | undefined = undefined;

  const data = [
    {
      title: "1 bedrooms",
      summerSeason: "10 000",
      winterSeason: "10 000",
      festiveSeason: "50 000",
      event1: "30 000",
      event2: "10 000",
    },
    {
      title: "2 bedrooms",
      summerSeason: "15 000",
      winterSeason: "10 000",
      festiveSeason: "35 000",
      event1: "40 000",
      event2: "20 000",
    },
    {
      title: "3 bedrooms",
      summerSeason: "20 000",
      winterSeason: "30 000",
      festiveSeason: "150 000",
      event1: "100 000",
      event2: "100 000",
    },
    {
      title: "4 bedrooms",
      summerSeason: "50 000",
      winterSeason: "60 000",
      festiveSeason: "150 000",
      event1: "130 000",
      event2: "110 000",
    },
    {
      title: "5 bedrooms",
      summerSeason: "100 000",
      winterSeason: "100 000",
      festiveSeason: "250 000",
      event1: "300 000",
    },
  ];

  const handleRange = (range: string) => () => {
    activeRange = range;
  };

  const handleCurrency = (currency: string) => () => {
    activeCurrency = currency;
  };

  $: getSelectedEvent = (i: number) => {
    return data[i][selectedEvent]
      ? activeCurrency + " " + data[i][selectedEvent]
      : "---";
  };
</script>

<StepLayout class="px-10 md:p-0">
  <PlanStep slot="title" step="STEP 2" title="Rates" />
  <div slot="desc" class="flex text-xs md:text-base flex-col gap-4 text-white">
    <p>
      Pick the number of bedrooms needed, and our system will show you the exact
      cost according to your dates.
    </p>
    <p>Tourist taxes</p>
    <p class="text-[9px] md:text-xs">
      Rates may be subject to change without notice, following your request, the
      exact cost of your stay will be confirmed by one of our agents
    </p>
  </div>

  <div slot="option">
    <div class="pt-10 pb-32 hidden md:flex">
      <div
        class="bg-white/80 flex-col shadow-select rounded-l-[30px] col-span-2 flex"
      >
        <div class="flex flex-col gap-3 pt-6 pb-[19px] px-6">
          <div
            class="flex items-center justify-around rounded-[30px] w-full shadow-select p-2 bg-white"
          >
            {#each ranges as range}
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <div
                on:click={handleRange(range)}
                class="{activeRange === range
                  ? 'active-range rounded-[30px] shadow-select'
                  : ''} px-6 transition-all cursor-pointer hover:scale-105 text-center"
              >
                <span>{range}</span>
              </div>
            {/each}
          </div>
          <div
            class="flex items-center justify-around rounded-[30px] w-full shadow-select p-2 bg-white"
          >
            {#each currencies as currency}
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <div
                on:click={handleCurrency(currency)}
                class="{activeCurrency === currency
                  ? 'active-range rounded-[30px] shadow-select'
                  : ''} px-6 transition-all cursor-pointer hover:scale-105 text-center"
              >
                <span>{currency}</span>
              </div>
            {/each}
          </div>
        </div>
        <div class="flex flex-col py-6 bg-white/60 px-6">
          <span>Summer season</span>
          <span class="text-xs text-black-secondary">Apr. 15 to Dec. 14</span>
        </div>
        <div class="flex flex-col py-6 px-6">
          <span>Winter season</span>
          <span class="text-xs text-black-secondary">Jan. 11 to Apr. 14</span>
        </div>
        <div class="flex flex-col py-6 px-6 bg-white/60">
          <span>Festive season</span>
          <span class="text-xs text-black-secondary">Dec. 15 to Jan. 10</span>
        </div>
        <div class="flex justify-center items-center p-6">
          <SelectButton
            class="max-w-[180px]"
            selectedValue="Special event"
            options={["event1", "event2"]}
            on:change={(e) => {
              selectedEvent = e.detail;
            }}
          />
        </div>
      </div>
      <div class="flex flex-col w-[169px] bg-first">
        <div
          class="relative flex flex-col py-8 gap-5 items-center justify-center"
        >
          <button
            class="absolute left-2 top-1/4 hover:scale-110 transition-all"
            on:click={() => {
              if (!(start === 0)) {
                start = start - 1;
              }
            }}
          >
            <IconArrowLeft
              width="21"
              class="stroke-white !w-auto !h-auto stroke-9"
            />
          </button>
          <button
            on:click={() => {
              active = data[start].title;
            }}
          >
            <Circle light selected={active === data[start].title}></Circle>
          </button>
          <span class="text-white font-medium"> {data[start].title} </span>
        </div>
        <div
          class="bg-white/40 flex flex-col py-8 gap-4 items-center justify-center"
        >
          <span class="text-white font-medium"
            >{activeCurrency} {data[start].summerSeason}
          </span>
        </div>
        <div class="flex flex-col py-8 gap-4 items-center justify-center">
          <span class="text-purple-light font-medium">
            {activeCurrency}
            {data[start].winterSeason}
          </span>
        </div>
        <div
          class="bg-white/40 flex flex-col py-8 gap-4 items-center justify-center"
        >
          <span class="text-white font-medium">
            {activeCurrency}
            {data[start].festiveSeason}
          </span>
        </div>
        <div class="flex flex-col py-8 gap-4 items-center justify-center">
          <span class="text-white font-medium">
            {getSelectedEvent(start)}
          </span>
        </div>
      </div>
      <div class="flex flex-col w-[169px] bg-second">
        <div class="flex flex-col py-8 gap-5 items-center justify-center">
          <button
            on:click={() => {
              active = data[start + 1].title;
            }}
          >
            <Circle light selected={active === data[start + 1].title}></Circle>
          </button>
          <span class="text-white font-medium"> {data[start + 1].title} </span>
        </div>
        <div
          class="bg-white/40 flex flex-col py-8 gap-4 items-center justify-center"
        >
          <span class="text-white font-medium">
            {activeCurrency} {data[start + 1].summerSeason}</span
          >
        </div>
        <div class="flex flex-col py-8 gap-4 items-center justify-center">
          <span class="text-purple-light font-medium">
            {activeCurrency}
            {data[start + 1].winterSeason}
          </span>
        </div>
        <div
          class="bg-white/40 flex flex-col py-8 gap-4 items-center justify-center"
        >
          <span class="text-white font-medium">
            {activeCurrency}
            {data[start + 1].festiveSeason}
          </span>
        </div>
        <div class="flex flex-col py-8 gap-4 items-center justify-center">
          <span class="text-white font-medium">
            {getSelectedEvent(start + 1)}
          </span>
        </div>
      </div>
      <div class="flex flex-col w-[169px] bg-third rounded-r-[30px]">
        <div
          class="flex flex-col py-8 gap-5 items-center justify-center relative"
        >
          <button
            class="absolute right-2 top-1/4 hover:scale-110 transition-all"
            on:click={() => {
              if (!(start + 4 > data.length)) {
                start = start + 1;
              }
            }}
          >
            <IconArrowLeft
              width="21"
              class="stroke-white !w-auto !h-auto stroke-9 !rotate-180"
            />
          </button>
          <button
            on:click={() => {
              active = data[start + 2].title;
            }}
          >
            <Circle light selected={active === data[start + 2].title}></Circle>
          </button>
          <span class="text-white font-medium"> {data[start + 2].title} </span>
        </div>
        <div
          class="bg-white/40 flex flex-col py-8 gap-4 items-center justify-center"
        >
          <span class="text-white font-medium">
            {activeCurrency}
            {data[start + 2].summerSeason}
          </span>
        </div>
        <div class="flex flex-col py-8 gap-4 items-center justify-center">
          <span class="text-purple-light font-medium">
            {activeCurrency}
            {data[start + 2].winterSeason}
          </span>
        </div>
        <div
          class="bg-white/40 flex flex-col py-8 gap-4 items-center justify-center"
        >
          <span class="text-white font-medium">
            {activeCurrency}
            {data[start + 2].festiveSeason}
          </span>
        </div>
        <div class="flex flex-col py-8 gap-4 items-center justify-center">
          <span class="text-white font-medium">
            {getSelectedEvent(start + 2)}
          </span>
        </div>
      </div>
    </div>
    <!-- MOBILE STEP -->
    <div class="px-[8%] pb-20 pt-10 md:pt-0 md:hidden">
      
        <div class="py-10 flex flex-col w-full bg-white/80 shadow-select rounded-t-[30px]">
          <div class=" px-8">
            <span class="font-medium pb-4">Number of rooms</span>
            <Bedrooms bind:selectedValue={bedrooms} />

            <div class="flex justify-between w-full pt-6">
              <div class="flex flex-col">
                <span>Summer season</span>
                <span class="text-xs text-black-secondary"
                  >Apr. 15 to Dec. 14</span
                >
              </div>
              <button>
                <Circle></Circle>
              </button>
            </div>
            <div class="flex justify-between w-full pt-6">
              <div class="flex flex-col">
                <span>Winter season</span>
                <span class="text-xs text-black-secondary"
                  >Jan. 11 to Apr. 14</span
                >
              </div>
              <button>
                <Circle></Circle>
              </button>
            </div>
            <div class="flex justify-between w-full pt-6">
              <div class="flex flex-col">
                <span>Festive season</span>
                <span class="text-xs text-black-secondary"
                  >Dec. 15 to Jan. 10</span
                >
              </div>
              <button>
                <Circle></Circle>
              </button>
            </div>
            <div class="flex pt-6">
              <SelectButton
                class="max-w-[180px]"
                selectedValue="Special event"
                options={["event1", "event2"]}
                on:change={(e) => {
                  selectedEvent = e.detail;
                }}
              />
            </div>
            <div class="flex flex-col gap-3 pt-6">
              <div
                class="flex items-center justify-around rounded-[30px] w-full shadow-select p-2 bg-white"
              >
                {#each ranges as range}
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <!-- svelte-ignore a11y-no-static-element-interactions -->
                  <div
                    on:click={handleRange(range)}
                    class="{activeRange === range
                      ? 'active-range rounded-[30px] shadow-select'
                      : ''} px-4 transition-all cursor-pointer hover:scale-105 text-center"
                  >
                    <span>{range}</span>
                  </div>
                {/each}
              </div>
              <div
                class="flex items-center justify-around rounded-[30px] w-full shadow-select p-2 bg-white"
              >
                {#each currencies as currency}
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <!-- svelte-ignore a11y-no-static-element-interactions -->
                  <div
                    on:click={handleCurrency(currency)}
                    class="{activeCurrency === currency
                      ? 'active-range rounded-[30px] shadow-select'
                      : ''} px-4 transition-all cursor-pointer hover:scale-105 text-center"
                  >
                    <span>{currency}</span>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            class="flex justify-center items-center rounded-b-[30px] py-4 bg-gradient-to-r from-purple-dark to-purple-darker"
          >
            <div
              class="text-white border rounded-[30px] border-white px-4 py-1 text-sm"
            >
              $ 20 000
            </div>
          </div>
        </div>

    </div>
  </div>
</StepLayout>

<style lang="postcss">
  .bg-first {
    background: radial-gradient(
        49.31% 85.29% at 9.85% 4.97%,
        rgba(134, 134, 218, 0.6) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(0deg, #000023, #000023);
  }

  .bg-second {
    box-shadow: -5px 7px 14px -8px #00000040;
    background: linear-gradient(277.58deg, #50156b 35.24%, #3e127f 88.52%);
  }

  .bg-third {
    background: linear-gradient(
        68.37deg,
        #000000 22.61%,
        rgba(0, 0, 0, 0.09) 58.62%,
        rgba(255, 255, 255, 0.06) 91.35%
      ),
      linear-gradient(0deg, #1e1e1e, #1e1e1e);
  }

  .active-range {
    @apply text-white;
    background: linear-gradient(277.58deg, #50156b 35.24%, #3e127f 88.52%);
  }
</style>
