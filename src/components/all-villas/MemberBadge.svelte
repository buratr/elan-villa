<script lang="ts">
  import member from "@assets/background/VectorMembers.svg?url";
  import Button from "@components/atoms/Button.svelte";
  $: ({ class: classList, ...rest } = $$props);
</script>

<div class="flex relative bg-white/50 shadow-select rounded-full flex-col p-8 text-center {classList}">
  <img src={member} class="w-full h-full absolute top-[8%]" style="transform: scaleX(1.4);" alt="" />
  <h3 class="font-athena text-purple leading-1 text-[125px] tracking-[-6px]">-50%</h3>
  <span>Get the Premium Holiday formula and all its included services + an exclusive 50% off services fees discount </span>
  <div class="flex w-full justify-center">
    <Button style="primary">go for it</Button>
  </div>
</div>
