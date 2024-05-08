<script lang="ts">
  import doubleTrait from "@assets/images/double-trait-purple.png";
  import Button from "@components/atoms/Button.svelte";
  import DatePicker from "@components/villa/vacation-plan/DatePicker.svelte";
  import Season from "./Season.svelte";
  import Step1 from "./steps/Step1.svelte";
  import Step2 from "./steps/Step2.svelte";
  import Step3 from "./steps/Step3.svelte";

  let tabs = [
    { label: "Fixed dates", value: 1, component: DatePicker },
    { label: "Flexible dates", value: 2, component: Season },
  ];
  let selectedDates: Date[] = [];

  let dataURL = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSJMYXllcl8xIiB4PSIwIiB5PSIwIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxOTIwIDUxOTQiPjxzdHlsZT4uc3Qwe2ZpbGw6bm9uZX08L3N0eWxlPjxwYXRoIGQ9Ik0wIDBjNjQzLjMgMjA3LjggMTMxMS4xIDM1Ni44IDE5MjAgMjQ3IiBjbGFzcz0ic3QwIi8+PHBhdGggZD0iTTAgMHY1MTk0aDE5MjBWMjQ3QzEzMTEuMSAzNTYuOCA2NDMuMyAyMDcuOCAwIDAiIHN0eWxlPSJmaWxsOiMxNDE0MTQiLz48cGF0aCBkPSJNMTkyMCAyNDdWMEgwYzY0My4zIDIwNy44IDEzMTEuMSAzNTYuOCAxOTIwIDI0NyIgY2xhc3M9InN0MCIvPjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIHgxPSItMjU4MC42NTIiIHgyPSIyMzI1LjQyNCIgeTE9IjQyOTQuNTQ5IiB5Mj0iMTk0Mi4zNTQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiM2MjYxNjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDA7c3RvcC1vcGFjaXR5OjAiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Ik0wIDB2NTE5NGgxOTIwVjI0N0MxMzExLjEgMzU2LjggNjQzLjMgMjA3LjggMCAwIiBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzFfKTtmaWxsLW9wYWNpdHk6LjgiLz48L3N2Zz4='
</script>

<div
  class="bg-vacation-plan flex relative bg-cover"
  id="vacation-plans"
  style="mask-image: url({dataURL});mask-size: cover"
>
<!-- <img src="{VacationBG}" alt="" class="-z-10 absolute w-full h-full object-cover"> -->
  <div class="flex flex-col relative z-10 items-center w-full mt-[30%]">
    <div class="flex flex-col text-center pb-10 md:pb-20 px-16 md:px-0">
      <h2
        class="uppercase tracking-[4px] font-medium text-purple-light text-xs md:text-base"
      >
        create the perfect
      </h2>
      <h2 class="text-[45px] md:text-[60px] text-white font-athena">
        Vacation plan
      </h2>
      <div
        class="text-white text-xs md:text-base tracking-wide max-w-3xl text-center py-16 px-8 md:px-0"
      >
        Make it easy ! ELAN offer you a possibility to create a full vacation
        plan in only few click. Complete the 3 steps to make it done, then we
        will take care of
        <div class="relative inline-block">
          <img
            src={doubleTrait}
            class="absolute top-8 w-24 right-0"
            alt="Double Trait"
          />
          <span class="text-purple">everything</span>
        </div>
        for you.
      </div>
    </div>
    <div class="flex flex-col w-full md:pl-32 md:pr-[13%]">
      <Step1 />
      <Step2 />
      <Step3 />
    </div>
    <div class="flex flex-col w-full text-center pb-10 md:pb-20 px-8 md:px-0">
      <div
        class="flex justify-center items-center w-full md:px-[8%] lg:px-[15%] gap-4 pb-10"
      >
        <div class="w-full flex-1 h-1 dashed-spaced hidden md:block"></div>
        <span class="text-white text-[25px] md:text-[35px] font-bold">
          <span class="flex md:inline justify-center w-full">ALL SET ?</span>
          <span> LET’S BOOK YOUR TRIP ! </span>
        </span>
        <div class="w-full flex-1 h-1 dashed-spaced hidden md:block"></div>
      </div>
      <div class="flex w-full flex-wrap justify-center items-center gap-6">
        <div class="flex">
          <Button style="outlined">finish later</Button>
        </div>
        <div class="flex">
          <Button style="primary">BOOK NOW</Button>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .bg-vacation-plan {
    background: linear-gradient(0deg, #141414, #141414), linear-gradient(291.67deg, rgba(98, 97, 97, 0.8) -33.08%, rgba(0, 0, 0, 0) 91.58%);
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

  .dashed-spaced {
    background-image: linear-gradient(
      to right,
      #7c4db7 50%,
      rgba(255, 255, 255, 0) 0%
    );
    background-position: top;
    background-size: 20px 1px;
    background-repeat: repeat-x;
    white-space: nowrap; /* Prevent text wrapping */
  }
</style>
