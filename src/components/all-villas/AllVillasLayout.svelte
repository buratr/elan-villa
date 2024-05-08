<script>
    import BgBeige from "@assets/background/BackgroundBeige.webp"
</script>

<div class="flex flex-col pt-[99px]" style="background-image: url({BgBeige});">
    <div class="flex">
        <slot name="search"/>
    </div>
    <div class="flex">
        <div class="w-1/3 2xl:w-1/4 lg:block hidden">
            <slot name="filters"/>
        </div>
        <div class="2xl:w-3/4 lg:w-2/3 w-full">
            <slot name="villas"/>
        </div>
    </div>
</div>