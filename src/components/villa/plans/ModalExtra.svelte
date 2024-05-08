<script lang="ts">
  import LordIcon from "@components/atoms/LordIcon.svelte";
  import CloseIcon from "@assets/svgs/icons/cross-svgrepo-com.svg?component";
  import { modal } from "@components/Modal.svelte";
  export let features: any;
</script>

<div class="bg-white p-6">
  <button on:click={() => modal.close()} class="hover:scale-110 transition-all">
    <CloseIcon
          width="16"
          height="16"
          class="stroke-6 stroke-black fill-black "
        />
  </button>

  <div>
    <p class="font-bold pb-4 pt-8">
      {features.title}
    </p>
    <div class="flex flex-col gap-10">
      {#each features.group as group}
        <div>
          <p class="font-medium pb-2">{group.title}</p>
          {#each group.features as feature}
            <div class="flex flex-col gap-10">
              <div class="flex gap-8 items-center">
                <LordIcon src={feature.icon} size="32" class="text-black" />
                <span>{feature.name}</span>
              </div>
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</div>
