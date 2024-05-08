<script lang="ts">
  import LordIcon from "@components/atoms/LordIcon.svelte";

  export let experience: any | undefined = undefined;
</script>

<div
  class="flex flex-col w-full h-full {experience.active
    ? 'bg-gradient-to-r from-purple-dark to-purple-darker text-white'
    : 'bg-white/80 text-black'} p-4 px-8 rounded-[30px] gap-4 items-center w-fit justify-center max-w-[173px]"
>
  <LordIcon size="75" src={experience.icon}></LordIcon>
  <span class="font-medium text-sm">{experience.decs}</span>
</div>
