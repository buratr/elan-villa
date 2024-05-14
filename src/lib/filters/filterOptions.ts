export type FilterOption = {
    label: string;
    value: string;
}

export type Filter = {
    id: string;
    selectedValue: number;
    options?: FilterOption[];
}

const guests: Filter = {
    id: 'guests',
    selectedValue: 0
}

const area: Filter = {
    id: 'area',
    selectedValue: 0,
    options: [
        { label: "All the Island", value: "all-the-island" },
        { label: "Anse des Cayes", value: "anse-des-Cayes" },
        { label: "Anse des Lézards", value: "anse-des-lezards" },
        { label: "Camaruche", value: "camaruche" },

        { label: "Colombier", value: "colombier" },
        { label: "Corossol", value: "corossol" },
        { label: "Deve", value: "deve" },
        { label: "Flamands", value: "flamands" },

        { label: "Gouverneur", value: "gouverneur" },
        { label: "Grand Cul-de-Sac", value: "grand-cul-de-Sac" },
        { label: "Grand Fond", value: "grand-Fond" },
        { label: "Gustavia", value: "gustavia" },

        { label: "Lorient", value: "lorient" },
        { label: "Lurin", value: "lurin" },
        { label: "Marigot", value: "marigot" },
        { label: "Merlette", value: "merlette" },

        { label: "Petit Cul-de-Sac", value: "petit-cul-de-Sac" },
        { label: "Petite Saline", value: "petite-saline" },
        { label: "Pointe Milou", value: "pointe-milou" },
        { label: "Public", value: "public" },

        { label: "Saline", value: "saline" },
        { label: "Saint Jean", value: "saint-jean" },
        { label: "Toiny", value: "toiny" },
        { label: "Vitet", value: "vitet" },
    ]
}

const collection: Filter = {
    id: 'collection',
    selectedValue: 0,
    options: [
        { label: "Luxury", value: "luxury" },
        { label: "Contemporary", value: "contemporary" },
        { label: "Caribbean", value: "caribbean" },
        { label: "Family and Friends", value: "family-and-Friends" },
        { label: "Honey Moon", value: "honey-Moon" },
        { label: "On the Beach", value: "on-the-beach" },
        { label: "On the Cliff", value: "on-the-cliff" },
        { label: "On the Hills", value: "on-the-cills" },
    ]
}

const specific: Filter = {
    id: 'specific',
    selectedValue: 0,
    options: [
        { label: "Gated property", value: "gated-property" },
        { label: "Infinity Pool", value: "infinity-pool" },
        { label: "Heated pool", value: "heated-pool" },
        { label: "Hot Tub", value: "hot-tub" },

        { label: "Fully A/C house", value: "fully-ac-house" },
        { label: "Smart TV", value: "Smart-tv" },
        { label: "Dish Network", value: "dish-network" },
        { label: "Sound System", value: "sound-system" },
    ]
}

const orientation: Filter = {
    id: 'orientation',
    selectedValue: 0,
    options: [
        { label: "North (Rise/Set or None)", value: "north" },
        { label: "Northeast (Sunrise)", value: "northeast" },
        { label: "East (Sunrise)", value: "east" },
        { label: "Southeast (Sunrise)", value: "southeast" },
        { label: "South (Rise/Set or None) ", value: "south" },
        { label: "West (Sunset)", value: "west" },
        { label: "Northwest (Sunset)", value: "northwest" },
        { label: "None", value: "none" },
    ]
}

export const filterOptions =
    [
        guests,
        area,
        collection,
        specific,
        orientation
    ]