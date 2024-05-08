<script lang="ts">
  import Circle from "@components/atoms/Circle.svelte";
  import LordIcon from "@components/atoms/LordIcon.svelte";

  export let service: any | undefined = undefined;
</script>

  <div class="flex bg-white/80 items-center w-full md:w-1/2 flex-1 rounded-[50px] shadow-select justify-between px-4 py-2">
    <div class="flex items-center gap-4">
      <LordIcon size="38" src={service.icon}></LordIcon>
      <span class="font-medium text-left">{service.title}</span>
    </div>
    <Circle selected={service.active}></Circle>
  </div>
  <div class="flex w-full md:w-1/2 flex-1 px-8 md:px-0 text-start">
    <span class="text-xs md:text-base text-white">{service.decs}</span>
  </div>
