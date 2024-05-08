<script lang="ts">
  import ContactBG from "@assets/background/BGContact.svg";
  import Tabs from "@components/Tabs.svelte";
  import ContactNumber from "./ContactNumber.svelte";
  import ContactAddress from "./ContactAddress.svelte";
  import ContactEmail from "./ContactEmail.svelte";
  import { fade, fly, slide, blur } from "svelte/transition";
  import Map from "@assets/images/map_top_locations.png";
  import Input from "@components/atoms/Input.svelte";
  import {
    circInOut,
    quadInOut,
    quintOut,
    backInOut,
    backOut,
    backIn,
    sineIn,
  } from "svelte/easing";
  import Button from "@components/atoms/Button.svelte";

  let tabs = [
    { label: "E-mail", value: 1, component: ContactEmail },
    { label: "Number", value: 2, component: ContactNumber },
    { label: "Address", value: 3, component: ContactAddress },
  ];

  let days = [
    { name: "Monday", time: "8:30 AM–1 PM, 3–6:30 PM" },
    { name: "Tuesday", time: "8:30 AM–1 PM, 3–6:30 PM" },
    { name: "Wednesday", time: "8:30 AM–1 PM, 3–6 PM" },
    { name: "Thursday", time: "8:30 AM–1 PM, 3–6:30 PM" },
    { name: "Friday", time: "8:30 AM–1 PM, 3–6:30 PM" },
    { name: "Saturday", time: "8:30 AM–1 PM" },
    { name: "Sunday", time: "Closed" },
  ];

  let activeTabValue = 1;
</script>

<div
  class="flex flex-col md:flex-row relative px-4 md:px-0 bg-cover justify-center min-h-[1400px] md:min-h-[1300px]"
>
<img src="{ContactBG}" alt="" class="-z-10 absolute w-full h-full object-cover">
  <div
    class="flex flex-row w-full md:w-1/2 lg:w-1/3 items-center justify-center md:pl-[5%] md:mt-32"
  >
    <div class="flex flex-col w-fit">
      <div class="flex flex-col pb-10">
        <h2
          class="uppercase text-purple-light text-sx md:text-base tracking-[4px]"
        >
          contact the team
        </h2>
        <h2 class="font-athena text-white text-[35px] md:text-[60px]">
          Get in touch
        </h2>
      </div>
      <Tabs
        bind:activeTabValue
        items={tabs}
        transition
        activeTabClass="bg-purple-light text-black"
        class="bg-white/50 flex-row !justify-center gap-4 !text-xs md:!text-sm md:self-start shadow-select !mb-8 mt-8 md:mt-0 w-[300px] sm:w-[372px]"
      />
    </div>
  </div>
  <div class="flex w-full pt-10 md:w-2/3 justify-center">
    {#if activeTabValue === 1}
      <div
        in:blur={{
          delay: 0,
          duration: 300,
          easing: sineIn,
        }}
        out:blur={{
          delay: 0,
          duration: 0,
          easing: sineIn,
        }}
        class="flex items-center"
      >
        <img src={Map} alt="Map Contact" />
      </div>
    {/if}
    {#if activeTabValue === 2}
      <div
        in:blur={{
          delay: 0,
          duration: 300,
          easing: sineIn,
        }}
        out:blur={{
          delay: 0,
          duration: 0,
          easing: sineIn,
        }}
        class="flex items-center md:pl-[10%]"
      >
        <div
          class="flex flex-col bg-black/25 rounded-[30px] px-8 py-16 sm:px-16 sm:py-24 shadow-select text-white"
        >
          <span class="text-white text-[25px] md:text-[35px] font-athena pb-14"
            >Opening hours</span
          >

          <div class="flex gap-6 text-xs md:text-base tracking-wide">
            <div class="max-w-min whitespace-nowrap">
              {#each days as day}
                <div class="pb-2">{day.name} :</div>
              {/each}
            </div>
            <div class="flex flex-col">
              {#each days as day}
                <div class="pb-2">{day.time}</div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    {/if}
    {#if activeTabValue === 3}
      <div
        in:blur={{
          delay: 0,
          duration: 300,
          easing: sineIn,
        }}
        out:blur={{
          delay: 0,
          duration: 0,
          easing: sineIn,
        }}
        class="flex w-full items-center justify-center h-full"
      >
        <div
          class="flex flex-col bg-black/25 rounded-[30px] gap-10 p-8 pb-16 sm:p-16 shadow-select text-white"
        >
          <span class="text-white text-[25px] md:text-[35px] font-athena md:pb-10"
            >Contact form</span
          >

          <div class="flex flex-col gap-2">
            <span class="text-white text-sm md:text-base"> Your name </span>
            <Input
              placeholder=""
              class="!px-6 bg-white/70 text-black transition-all shadow-main min-w-[275px] sm:min-w-[300px] lg:min-w-[565px]"
            ></Input>
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-white text-sm md:text-base"> Your mail </span>
            <Input
              placeholder=""
              type="email"
              class="!px-6 bg-white/70 text-black transition-all shadow-main min-w-[275px] sm:min-w-[300px] lg:min-w-[565px]"
            ></Input>
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-white text-sm md:text-base"> Your message </span>
            <textarea
              class="rounded-[50px] bg-white/70 text-black focus:bg-white transition-all hidden sm:block p-8 outline-0 placeholder:italic"
              placeholder=""
              cols="30"
              rows="6"
            />

            <textarea
              class="rounded-[50px] bg-white/70 text-black focus:bg-white transition-all sm:hidden p-8 outline-0 placeholder:italic"
              placeholder=""
              cols="3"
              rows="3"
            />
          </div>
          <div class="flex">
            <Button style="primary">send message</Button>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
</style>
