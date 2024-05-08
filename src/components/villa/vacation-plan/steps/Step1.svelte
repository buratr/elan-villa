<script lang="ts">
  import PlanStep from "../PlanStep.svelte";
  import StepLayout from "../StepLayout.svelte";
  import DatePicker from "@components/villa/vacation-plan/DatePicker.svelte";
  import DatePickerMobile from "../DatePickerMobile.svelte";
  import Season from "../Season.svelte";
  import Tabs from "@components/Tabs.svelte";
  import Input from "@components/atoms/Input.svelte";
  import Guests from "@components/filters/Guests.svelte";
  import LordIcon from "@components/atoms/LordIcon.svelte";
  let tabs = [
    { label: "Fixed dates", value: 1, component: DatePicker },
    { label: "Flexible dates", value: 2, component: Season },
  ];
  let selectedDates: Date[] = [];
</script>

<StepLayout class="px-10 md:p-0">
  <PlanStep slot="title" />
  <div slot="desc" class="flex text-xs md:text-base flex-col gap-4 text-white">
    <p>Check availability and select your dates !</p>
    <p>
      A minimum of 7 nights is usually required, short stay can be considered
      upon request.
    </p>
    <p>
      During the Festive Period (Christmas and/or New Year) a minimum of 10 to
      14 nights is required due to a high demand.
    </p>
    <p>Checkout before 11:00</p>
  </div>

  <div slot="option" class="w-full">
    <div class="hidden md:flex md:items-center lg:items-start flex-col">
      <Tabs
        items={tabs}
        transition
        tabsClass="min-h-[440px]"
        class="bg-white/50 flex-row md:self-center lg:self-start !text-xs md:!text-sm shadow-select !mb-14 mt-8 md:mt-0 w-[260px]"
      />
    </div>
    <div class="md:hidden flex w-full justify-center pt-20">
      <DatePickerMobile></DatePickerMobile>
    </div>
  </div>
  <StepLayout>
    <div slot="desc" class="grid grid-rows-2 pt-10 md:pt-0">
      <div class="flex text-xs md:text-base flex-col gap-8 text-white">
        <p class="text-[25px] md:text-[35px] font-athena text-purple-light">
          You need a flight ?
        </p>
        <p>
          We provide airline tickets with our exclusive partner Elan Voyages.
        </p>
      </div>
    </div>

    <div slot="option">
      <div class="grid md:grid-cols-[auto,1fr] gap-y-8 gap-x-10 w-fit pb-20">
        <span class="self-center text-white">Airport Departure : </span>
        <div>
          <Input
            right
            placeholder="Country, city, or airport"
            class="!px-6 bg-white/80 shadow-main md:min-w-[320px] min-w-[300px]"
          >
            <LordIcon name="search" size="32" class="text-black" />
          </Input>
        </div>
        <span class="text-white">Number of passengers :</span>
        <Guests class="bg-white/80"></Guests>
      </div>
    </div>
  </StepLayout>
</StepLayout>
