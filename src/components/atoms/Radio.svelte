<script lang="ts" context="module">
  export type RadioOption = { label: string; value: string };
</script>

<script lang="ts">
  export let options: RadioOption[] = [];
  export let userSelected: RadioOption | undefined;
  export let outlined: boolean = false;

  const uniqueID = Math.floor(Math.random() * 100);

  const slugify = (str = "") =>
    str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");

  const isSelected = (option: RadioOption) => {
    return userSelected?.value === option.value;
  };

  const deselectSelected = (option: RadioOption) => {
    if (isSelected(option)) {
      userSelected = undefined;
    } else {
      userSelected = option;
    }
  };

  $: ({ class: classList, ...rest } = $$props);
</script>

<div
  role="radiogroup"
  class="flex gap-2 flex-wrap {classList}"
  aria-labelledby={`label-${uniqueID}`}
  id={`group-${uniqueID}`}
>
  {#each options as option}
    <input
      class="sr-only"
      type="radio"
      id={slugify(option.label)}
      name="radioGroup"
      checked={isSelected(option)}
      value={option}
    />

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <label
      on:click={() => deselectSelected(option)}
      class="{userSelected?.value === option.value
        ? outlined ? 'border bg-gradient-to-r from-purple-dark to-purple-darker text-white' : 'bg-gradient-to-r from-purple-dark to-purple-darker text-white'
        : outlined
          ? 'border border-black'
          : 'bg-white/50 font-medium'} w-fit cursor-pointer hover:scale-105 transition-all py-2 px-4 text-sm shadow-select rounded-[30px]"
      for={slugify(option.label)}
    >
      {option.label}
    </label>
  {/each}
</div>

<style lang="postcss">
</style>
