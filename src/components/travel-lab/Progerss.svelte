<script>
  import { onMount } from "svelte";

  let counter = 0;
  let end = false;

  function increaseCounter() {
    if (counter < 100) {
      counter++;
    } else {
      end = true;
    }
  }

  onMount(() => {
    const interval = setInterval(increaseCounter, 250);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<div class="flex justify-center items-center pt-4 lg:py-20">
  <div class="relative">
    <span
      class="box3 lg:text-[360px] text-[120px] font-roboto leading-none transition-all {end ? 'text-purple' : 'text-purple-light/10'}"
      >{counter}</span
    >
    <span
      class="box2 absolute left-0 lg:text-[360px] text-[120px] font-roboto leading-none transition-all {end ? 'text-purple' : 'text-purple-light/10'}"
      >{counter}</span
    >
    <span
      class="box absolute left-0 lg:text-[360px] text-[120px] font-roboto leading-none transition-all {end ? 'text-purple' : 'text-purple-light/10'}"
      >{counter}</span
    >
  </div>
  <div class="relative">
    <div
      class="box3 absolute left-0 items-center flex lg:h-[360px] h-[120px] {end ? 'text-purple' : 'text-purple-light/10'}"
    >
      <span class="lg:text-[240px] text-[120px] font-roboto leading-none transition-all"
        >%</span
      >
    </div>
    <div
      class="box2 absolute left-0 items-center flex lg:h-[360px] h-[120px] {end ? 'text-purple' : 'text-purple-light/10'}"
    >
      <span class="lg:text-[240px] text-[120px] font-roboto leading-none transition-all"
        >%</span
      >
    </div>
    <div
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
        calc(0 * 100% / 3) 0/50.1% 180%,
      radial-gradient(100% 58% at bottom, #7b4eb7 99%, transparent)
        calc(3 * 100% / 3) 0/50.1% 180%,
      radial-gradient(100% 58% at top, transparent 99%, #7b4eb7)
        calc(6 * 100% / 3) 0/50.1% 180%,
      radial-gradient(100% 58% at bottom, #7b4eb7 99%, transparent)
        calc(9 * 100% / 3) 0/50.1% 180%,
      linear-gradient(#7b4eb7, #7b4eb7) bottom/100% 0%;
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    animation:
      move 1.1s infinite linear,
      up 27s linear alternate;
  }

  .box2 {
    background:
      radial-gradient(100% 58% at top, transparent 99%, #c09ff9)
        calc(0 * 100% / 3) 0/50.1% 180%,
      radial-gradient(100% 58% at bottom, #c09ff9 99%, transparent)
        calc(3 * 100% / 3) 0/50.1% 180%,
      radial-gradient(100% 58% at top, transparent 99%, #c09ff9)
        calc(6 * 100% / 3) 0/50.1% 180%,
      radial-gradient(100% 58% at bottom, #c09ff9 99%, transparent)
        calc(9 * 100% / 3) 0/50.1% 180%,
      linear-gradient(#c09ff9, #c09ff9) bottom/100% 0%;
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    animation:
      move 1.25s infinite linear,
      up 27s linear alternate;
  }

  .box3 {
    background:
      radial-gradient(100% 58% at top, transparent 99%, #c09ff973)
        calc(0 * 100% / 3) 0/50.1% 180%,
      radial-gradient(100% 58% at bottom, #c09ff973 99%, transparent)
        calc(3 * 100% / 3) 0/50.1% 180%,
      radial-gradient(100% 58% at top, transparent 99%, #c09ff973)
        calc(6 * 100% / 3) 0/50.1% 180%,
      radial-gradient(100% 58% at bottom, #c09ff973 99%, transparent)
        calc(9 * 100% / 3) 0/50.1% 180%,
      linear-gradient(#c09ff973, #c09ff973) bottom/100% 0%;
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    animation:
      move 1.5s infinite ease,
      up 26s linear alternate;
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
