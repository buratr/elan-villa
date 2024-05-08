<script lang="ts">
  import Label from "@components/atoms/Label.svelte";
  import { locations } from "@lib/locations/locations";
  import Area from "./Area.svelte";
  import LordIcon from "@components/atoms/LordIcon.svelte";

  let isPopupOpen = false;
  let clientHeight: number;
  let selectedArea: string | undefined = undefined;
  let selectedAreaArr: string[] = [];
  let areaString:string =""
  $: {
    areaString=""
    selectedAreaArr.forEach((item, id)=>{
      if(selectedAreaArr.length != id+1){
        areaString += item +", "
      }else{
        areaString += item
      }
    })
  }
</script>

<div
  class="flex items-center gap-2 border-r border-purple-secondary px-6 relative"
  bind:clientHeight
>

  <LordIcon name="location-pin" size="50" class="text-purple-secondary" />
  <button on:click|stopPropagation={() => (isPopupOpen = !isPopupOpen)} class="no-scroll max-w-52 overflow-auto">
    <!-- <Label>{selectedArea ? selectedArea : 'Area'}</Label> -->
    <Label class="whitespace-nowrap">{areaString ? areaString : 'Area'}</Label>
  </button>
  <Area {locations} bind:selectedAreaArr bind:selectedArea bind:isOpen={isPopupOpen} parentHeight={clientHeight} />
</div>
<style lang="postcss">
.no-scroll::-webkit-scrollbar { width: 0 !important; height: 0 !important;}
.no-scroll { -ms-overflow-style: none; }
</style>