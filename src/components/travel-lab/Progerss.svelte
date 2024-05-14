<script lang="ts">
  import { onMount } from "svelte";
  export let val

  let  x1:number=0, x2:number=0, x3:number=0; 

  function convertToShiftValues(input:number) {
    const maxX1 = 180;
    const maxX2 = 20;
    const maxX3 = 80;
    
    const percentX1 = (maxX1 - input * maxX1 / 100)+(input * maxX2 / 100);
    const percentX2 = input * maxX2 / 100;
    const percentX3 = input * maxX3 / 100;

     x1 = Math.round(Math.min(percentX1, maxX1));
     x2 = Math.round(Math.min(percentX2, maxX2));
     x3 = Math.round(Math.min(percentX3, maxX3));
   // return { x1, x2, x3 };
}

$: {convertToShiftValues(val)}
  // let counter = 0;
   let end = false;

  // function increaseCounter() {
  //   if (counter < 100) {
  //     counter++;
  //   } else {
  //     end = true;
  //   }
  // }

  // onMount(() => {
  //   const interval = setInterval(increaseCounter, 250);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // });

</script>
<!-- style="background-size: {x1}% {x2}%, {x1}% {x2}%, {x1}% {x2}%, {x1}% {x2}%, {val}% {x3}%;" -->
<div class="flex justify-center items-center pt-4 lg:py-20">
  <div class="relative">
    <span
    style="--bg-shift-x1:{x1}%; --bg-shift-x3:{x3}%;"
      class="box3 lg:text-[360px] text-[120px] font-roboto leading-none transition-all {end ? 'text-purple' : 'text-purple-light/10'}"
      >{val}</span
    >
    <span
    style="--bg-shift-x1:{x1}%; --bg-shift-x3:{x3}%;"
      class="box2 absolute left-0 lg:text-[360px] text-[120px] font-roboto leading-none transition-all {end ? 'text-purple' : 'text-purple-light/10'}"
      >{val}</span
    >
    <span
    style="--bg-shift-x1:{x1}%; --bg-shift-x3:{x3}%;"
      class="box absolute left-0 lg:text-[360px] text-[120px] font-roboto leading-none transition-all {end ? 'text-purple' : 'text-purple-light/10'}"
      >{val}</span
    >
  </div>
  <div class="relative">
    <div
    style="--bg-shift-x1:{x1}%; --bg-shift-x3:{x3}%;"
      class="box3 absolute left-0 items-center flex lg:h-[360px] h-[120px] {end ? 'text-purple' : 'text-purple-light/10'}"
    >
      <span class="lg:text-[240px] text-[120px] font-roboto leading-none transition-all"
        >%</span
      >
    </div>
    <div
    style="--bg-shift-x1:{x1}%; --bg-shift-x3:{x3}%;"
      class="box2 absolute left-0 items-center flex lg:h-[360px] h-[120px] {end ? 'text-purple' : 'text-purple-light/10'}"
    >
      <span class="lg:text-[240px] text-[120px] font-roboto leading-none transition-all"
        >%</span
      >
    </div>
    <div
    style="--bg-shift-x1:{x1}%; --bg-shift-x3:{x3}%;"
      class="box relative items-center flex lg:h-[360px] h-[120px] {end ? 'text-purple' : 'text-purple-light/10'}"
    >
      <span class="lg:text-[240px] text-[120px] font-roboto leading-none transition-all"
        >%</span
      >
    </div>
  </div>
</div>

<style>
  .box {
    background:
      radial-gradient(100% 58% at top, transparent 99%, #7b4eb7)
        calc(0 * 100% / 3) 0/50.1% var(--bg-shift-x1),
      radial-gradient(100% 58% at bottom, #7b4eb7 99%, transparent)
        calc(3 * 100% / 3) 0/50.1% var(--bg-shift-x1),
      radial-gradient(100% 58% at top, transparent 99%, #7b4eb7)
        calc(6 * 100% / 3) 0/50.1% var(--bg-shift-x1),
      radial-gradient(100% 58% at bottom, #7b4eb7 99%, transparent)
        calc(9 * 100% / 3) 0/50.1% var(--bg-shift-x1),
      linear-gradient(#7b4eb7, #7b4eb7) bottom/100% var(--bg-shift-x3);
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    animation:
      move 1.1s infinite linear;
      /* up 27s linear alternate; */
  }

  .box2 {

    background:
      radial-gradient(100% 58% at top, transparent 99%, #c09ff9)
        calc(0 * 100% / 3) 0/50.1% var(--bg-shift-x1),
      radial-gradient(100% 58% at bottom, #c09ff9 99%, transparent)
        calc(3 * 100% / 3) 0/50.1% var(--bg-shift-x1),
      radial-gradient(100% 58% at top, transparent 99%, #c09ff9)
        calc(6 * 100% / 3) 0/50.1% var(--bg-shift-x1),
      radial-gradient(100% 58% at bottom, #c09ff9 99%, transparent)
        calc(9 * 100% / 3) 0/50.1% var(--bg-shift-x1),
      linear-gradient(#c09ff9, #c09ff9) bottom/100% var(--bg-shift-x3);
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    animation:
      move 1.25s infinite linear;
      /* up 27s linear alternate; */
  }

  .box3 {

    background:
      radial-gradient(100% 58% at top, transparent 99%, #c09ff973)
        calc(0 * 100% / 3) 0/50.1% var(--bg-shift-x1),
      radial-gradient(100% 58% at bottom, #c09ff973 99%, transparent)
        calc(3 * 100% / 3) 0/50.1% var(--bg-shift-x1),
      radial-gradient(100% 58% at top, transparent 99%, #c09ff973)
        calc(6 * 100% / 3) 0/50.1% var(--bg-shift-x1),
      radial-gradient(100% 58% at bottom, #c09ff973 99%, transparent)
        calc(9 * 100% / 3) 0/50.1% var(--bg-shift-x1),
      linear-gradient(#c09ff973, #c09ff973) bottom/100% var(--bg-shift-x3);
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    animation:
      move 1.5s infinite ease;
      /* up 26s linear alternate; */
  }

  @keyframes move {
    to {
      background-position:
        calc(-6 * 100% / 3) 0,
        calc(-3 * 100% / 3) 0,
        calc(0 * 100% / 3) 0,
        calc(3 * 100% / 3) 0,
        bottom;
    }
  }

  @keyframes up {
    to {
      background-size:
        50.1% 20%,
        50.1% 20%,
        50.1% 20%,
        50.1% 20%,
        100% 80%;
    }
  }
</style>
