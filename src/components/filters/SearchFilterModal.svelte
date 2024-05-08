<script lang="ts">
  import Counter from "@components/atoms/Counter.svelte";
  import Label from "@components/atoms/Label.svelte";
  import Button from "@components/atoms/Button.svelte";
  import { modal } from "@components/Modal.svelte";
  import AreaMobile from "@components/home/head/AreaMobile.svelte";
  import { locations } from "@lib/locations/locations";
  import RangePicker from "@components/filters/date/RangePicker.svelte";
  import LordIcon from "@components/atoms/LordIcon.svelte";
  import GuestsIcon from "@assets/icons-json/313-two-avatar-icon-calm.rough.json?url";

  let selectedArea: string | undefined = undefined;

  const onSelectArea = (title: string) => {
    selectedArea = title;
    modal.close();
  };

  const openSearchArea = () => {
    modal.open(AreaMobile, {
      locations,
      onSelectArea(title) {
        selectedArea = title;
        modal.close();
      },
    });
  };
</script>

<div class="flex flex-col bg-white pb-32 px-8">
  <div class="pb-11 border-b border-black">
    <AreaMobile {locations} {onSelectArea}></AreaMobile>
  </div>

  <div
    class="border-b-black justify-center border-b flex items-center gap-2 ms:gap-4 px-4 sm:px-11 py-6"
  >
    <RangePicker className="villas-mobile" />
  </div>
  <div
    class="border-b-black border-b flex items-center px-4 sm:px-11 !pr-11 py-6 justify-between gap-2 ms:gap-4"
  >
    <div class="flex items-center gap-4">
      <LordIcon src={GuestsIcon} size="50" class="text-purple-secondary" />
      <Label>Guests</Label>
    </div>
    <Counter gradient />
  </div>
  <div class=" flex items-center justify-center p-11">
    <Button style="primary">
      SEARCH
      <LordIcon name="search" size="32" class="text-white" />
    </Button>
  </div>
</div>
