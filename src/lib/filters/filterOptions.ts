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
        { label: "Lorient", value: "lorient" },
        { label: "St Jean", value: "stjean" },
        { label: "Anse des Lézards", value: "ansedeslezards" },
        { label: "Pointe Milou", value: "pointemilou" },
    ]
}

const collection: Filter = {
    id: 'collection',
    selectedValue: 0,
    options: [
        { label: "Ultra luxurious", value: "ultraluxurious" },
        { label: "On the beach", value: "onthebeach" },
        { label: "Creole", value: "creole" },
    ]
}

const specific: Filter = {
    id: 'specific',
    selectedValue: 0,
    options: [
        { label: "Heated swimming pool", value: "heatedswimmingpool" },
        { label: "View on the sea", value: "viewonthesea" },
        { label: "Pets friendly", value: "petsfriendly" },
    ]
}

const orientation: Filter = {
    id: 'orientation',
    selectedValue: 0,
    options: [
        { label: "Heated swimming pool", value: "heatedswimmingpool" },
        { label: "View on the sea", value: "viewonthesea" },
        { label: "Pets friendly", value: "petsfriendly" },
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