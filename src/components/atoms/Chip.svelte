<script lang="ts" context="module">
  import { createEventDispatcher } from "svelte";

  export type Style = "primary" | "light";

  export type StyleMap = {
    [k in Style]: {
      background: string;
      text: string;
    };
  };

  export const chipStyleMap: StyleMap = {
    primary: {
      background: "bg-gradient-to-r from-purple-dark to-purple-darker",
      text: "text-white",
    },
    light: { background: "bg-white", text: "text-purple" },
  };
</script>

<script lang="ts">
  import { XIcon } from "svelte-feather-icons";

  export let text: string = "";
  export let style: Style = "primary";
  export let removable: boolean = false;

  const dispatch = createEventDispatcher();

  const onRemove = () => {
    dispatch("remove");
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="px-3 py-2.5 inline-flex rounded-full shadow-main items-center gap-2 {chipStyleMap[style]?.background} {chipStyleMap[style]?.text}">
  <span class="min-w-max">
    {text}
  </span>

  {#if removable}
    <div
      on:click|stopPropagation={onRemove}
      on:focus|stopPropagation={() => {}}
    >
      <XIcon
        size="24"
        class="cursor-pointer rounded-full hover:scale-125 transition-transform"
      />
    </div>
  {/if}
</div>
