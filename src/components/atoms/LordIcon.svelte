<script lang="ts">
  import { icons } from "@lib/icons/index";
  export let name: string = '';
  export let src: string | undefined = undefined;
  export let stroke: string = '60';
  export let size: string = '50';
  export let trigger: string = 'hover';

  $: ({ class: classList, ...rest } = $$props);

  const getIconSource = (name: string) => {
    const icon = icons.find((icon) => icon.name === name);
    return icon ? icon.src : "https://cdn.lordicon.com/hlywgxmy.json";
  };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<button class="{classList} transition-all flex">
  <lord-icon
    src={src ? src : getIconSource(name)}
    {trigger}
    style="width:{size}px;height:{size}px"
    class="current-color"
    {stroke}
  >
  </lord-icon>
</button>
