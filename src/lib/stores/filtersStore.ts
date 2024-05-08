import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export interface FiltersStoreInterface {
    filters: FiltersInterface[];
}

export interface FiltersInterface {
    id: string;
    value: any;
}

const STORAGE_KEY = 'filtersStore';

// Load the initial state from localStorage if available
let storedState: any = null;

if (browser) {
    storedState = localStorage.getItem(STORAGE_KEY);
}
const initialState: FiltersStoreInterface = storedState
    ? JSON.parse(storedState)
    : {
        filters: [],
    };

export const filtersStore = writable<FiltersStoreInterface>(initialState);

if (browser) {
    filtersStore.subscribe(($filtersStore) => {
        // Update localStorage whenever the store changes
        localStorage.setItem(STORAGE_KEY, JSON.stringify($filtersStore));
    });
}

// Function to set filter value by ID
export function setFilterValueById(id: string, value: any): void {
    filtersStore.update((state) => {
        const filterIndex = state.filters.findIndex((filter) => filter.id === id);

        if (filterIndex !== -1) {
            // Filter with the given ID exists, update its value
            const updatedFilters = state.filters.map((filter) =>
                filter.id === id ? { ...filter, value } : filter
            );

            return {
                ...state,
                filters: updatedFilters,
            };
        } else {
            // Filter with the given ID doesn't exist, push a new filter
            return {
                ...state,
                filters: [...state.filters, { id, value }],
            };
        }
    });
}

// Function to get filter value by ID
export function getFilterValueById(id: string): any | undefined {
    let filterValue: any | undefined;

    const unsubscribe = filtersStore.subscribe(($filtersStore) => {
        const filter = $filtersStore.filters.find((f) => f.id === id);
        filterValue = filter ? filter.value : undefined;
    });

    // Unsubscribe to avoid memory leaks
    unsubscribe();

    return filterValue;
}