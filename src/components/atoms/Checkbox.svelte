<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { DOMAttributes, HTMLInputAttributes } from "svelte/elements";

  interface $$Props
    extends Omit<HTMLInputAttributes, keyof DOMAttributes<HTMLInputElement>> {
    checked?: boolean;
    id?: string;
    label?: string;
  }

  export let checked: boolean = false;
  export let id: string = "checkbox";
  export let label: string = "";

  $: ({ class: containerClass, ...rest } = $$restProps);

  const dispatch = createEventDispatcher();
</script>

<div class="flex items-center gap-2">
  <input
    type="checkbox"
    bind:checked
    {id}
    class="cursor-pointer relative left-0 h-5 w-5 shrink-0 appearance-none rounded-0 border border-black outline-none
          after:absolute
          after:left-0
          after:top-0
          after:h-full
          after:w-full
          checked:after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwLDAsMjU2LDI1NiIgd2lkdGg9IjUwcHgiIGhlaWdodD0iNTBweCI+PGcgZmlsbD0iIzEzMTMxMyIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PGcgdHJhbnNmb3JtPSJzY2FsZSg1LjEyLDUuMTIpIj48cGF0aCBkPSJNNDEuOTM3NSw4LjYyNWMtMC42NjQwNiwwLjAyMzQ0IC0xLjI3MzQ0LDAuMzc1IC0xLjYyNSwwLjkzNzVsLTE4LjgxMjUsMjguNzgxMjVsLTEyLjE4NzUsLTEwLjUzMTI1Yy0wLjUyMzQ0LC0wLjU0Mjk3IC0xLjMwODU5LC0wLjc0NjA5IC0yLjAzMTI1LC0wLjUxOTUzYy0wLjcxODc1LDAuMjIyNjYgLTEuMjUzOTEsMC44MzIwMyAtMS4zNzg5MSwxLjU3NDIyYy0wLjEyNSwwLjc0NjA5IDAuMTc1NzgsMS40OTYwOSAwLjc4NTE2LDEuOTQ1MzFsMTMuOTM3NSwxMi4wNjI1YzAuNDM3NSwwLjM3MTA5IDEuMDE1NjMsMC41MzUxNiAxLjU4MjAzLDAuNDUzMTNjMC41NzAzMSwtMC4wODU5NCAxLjA3NDIyLC0wLjQxMDE2IDEuMzg2NzIsLTAuODkwNjJsMjAuMDkzNzUsLTMwLjY4NzVjMC40Mjk2OSwtMC42Mjg5MSAwLjQ2NDg0LC0xLjQ0MTQxIDAuMDkzNzUsLTIuMTA1NDdjLTAuMzcxMDksLTAuNjYwMTYgLTEuMDg1OTQsLTEuMDU0NjkgLTEuODQzNzUsLTEuMDE5NTN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=')]
          after:bg-[length:18px]
          after:bg-center
          after:bg-no-repeat
          after:content-['']"
    on:change={() => {
      dispatch("change", checked);
    }}
    {...rest}
  />
  <label for={id} class="inline-block cursor-pointer">
    {label}
  </label>
</div>
