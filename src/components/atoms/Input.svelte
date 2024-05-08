<script lang="ts">
  import type { DOMAttributes, HTMLInputAttributes } from "svelte/elements";

  interface $$Props
    extends Omit<HTMLInputAttributes, keyof DOMAttributes<HTMLInputElement>> {
    value?: string | number;
    checked?: boolean;
    error?: boolean;
    uppercase?: boolean;
    right?: boolean;
    full?: boolean;
  }

  export let value: string | number | undefined = undefined;
  export let checked: boolean | undefined = undefined;
  export let error: boolean | undefined = undefined;
  export let uppercase: boolean | undefined = false;
  export let right: boolean | undefined = false;
  export let full: boolean | undefined = false;

  let isFocused: boolean = false;
  let iconWidth: number | undefined = undefined;

  $: ({ class: classList, ...rest } = $$props);

  function onKeyUp(event: KeyboardEvent) {
    if (event.target) {
      const target = event.target as HTMLInputElement;
      if (target.value && uppercase) {
        target.value = target.value.toUpperCase();
      }
    }
  }
</script>

<div class="relative flex {full ? 'w-full' : 'w-fit'}">
  <!-- {#if !isFocused && !value} -->
    <div bind:clientWidth={iconWidth} class="absolute z-20 top-1/2 -translate-y-1/2 {right ? 'right-2' : 'left-2'}">
      <slot name="icon" />
    </div>
  <!-- {/if} -->
  {#if rest.type === "checkbox"}
    <input
      on:focus={() => (isFocused = true)}
      on:blur={() => (isFocused = false)}
      on:keydown
      on:click|stopPropagation
      type="checkbox"
      bind:checked
      style="{right ? 'padding-right' : 'padding-left'}: {iconWidth + 8}px"
      class="border border-black p-2 outline-none {classList} "
      {...rest}
      on:change
    />
  {:else if rest.type === "number"}
    <input
      on:focus={() => (isFocused = true)}
      on:blur={() => (isFocused = false)}
      on:keydown
      on:click|stopPropagation
      type="number"
      bind:value
      class:border-red-500={error}
      style="{right ? 'padding-right' : 'padding-left'}: {iconWidth + 8}px"
      class="bg-gray-lighter focus:bg-white border rounded-full focus:border-black p-2 outline-none transition-transform {classList}"
      {...rest}
      on:change
    />
  {:else}
    <input
      on:focus={() => (isFocused = true)}
      on:blur={() => (isFocused = false)}
      on:keydown
      on:input
      on:keyup={onKeyUp}
      on:click|stopPropagation
      bind:value
      class:border-red-500={error}
      style="{right ? 'padding-right' : 'padding-left'}: {iconWidth + 8}px"
      class="bg-gray-lighter focus:bg-white border rounded-full focus:border-black p-2 outline-none transition-transform {classList}"
      {...rest}
      on:change
    />
  {/if}
</div>
