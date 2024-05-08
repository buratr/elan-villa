<script lang="ts">
  export let nights: number = 0;
</script>

<div
  class="absolute -top-[50px] left-1/2 -translate-x-1/2 flex rounded-[40px] bg-gradient-to-r from-purple-dark to-purple-darker text-white px-[30px] py-2.5 gap-2"
>
  <span>{nights}</span>
  <span>{nights === 1 ? "night" : "nights"}</span>
</div>
