<script lang="ts">
  import MapPin from "@assets/svgs/icons/map-pin.svg?url";
  import MapPinHover from "@assets/svgs/icons/map-pin-hover.svg?url";

  $: ({ class: classList, ...rest } = $$props);

  export let activeVilla;
  export let villa: any = {};
  export let scroll: any | undefined
  type CallbackFunction = () => void;

  interface ClickOutsideController {
    update(newCallbackFunction: CallbackFunction): void;
    destroy(): void;
  }

  function clickOutside(
    element: HTMLElement,
    callbackFunction: CallbackFunction
  ): ClickOutsideController {
    function onClick(event: MouseEvent): void {
      if (!element.contains(event.target as Node)) {
        callbackFunction();
      }
    }

    document.body.addEventListener("click", onClick);

    return {
      update(newCallbackFunction: CallbackFunction): void {
        callbackFunction = newCallbackFunction;
      },
      destroy(): void {
        document.body.removeEventListener("click", onClick);
      },
    };
  }

  let isHovered = false;
  let showVilla = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:mouseenter={() => (isHovered = true)}
  on:mouseleave={() => (isHovered = false)}
  use:clickOutside={() => (showVilla = false)}
  on:click={() => {
    if(scroll){
      scroll()
    }
   
    showVilla = true;
    activeVilla = villa;
  }}
  class="cursor-pointer"
>
  <img
    src={MapPin}
    class="transition-all ease-in-out {isHovered || showVilla
      ? 'opacity-0'
      : 'opacity-100'} {classList}"
    alt="Map Pin Hover"
  />
  <img
    src={MapPinHover}
    class="transition-all ease-in-out {isHovered || showVilla
      ? 'opacity-100'
      : 'opacity-0'} {classList}"
    alt="Map Pin"
  />
</div>
