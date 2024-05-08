import { writable } from 'svelte/store';

export const menuStore = writable(false);

export function openMenu() {
  menuStore.set(true);
}

export function closeMenu() {
  menuStore.set(false);
}
