<script lang="ts">
import LordIcon from "@components/atoms/LordIcon.svelte";

export let iconName: string
export let featureName:string

</script>

<div class="flex items-center justify-start gap-4">
    <LordIcon name="{iconName}" size="60" class="text-purple" />
    <span class="text-white font-medium">{featureName}</span>
</div>