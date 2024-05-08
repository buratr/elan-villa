<script lang="ts">
    import Radio from "@components/atoms/Radio.svelte";
    type Option = { label: string; value: string };

    export let options: Option[] = [];
    export let selectedOption: Option | undefined= undefined;
</script>

<div>
    {#each options as option}
    <Radio/>
    {/each}
</div>