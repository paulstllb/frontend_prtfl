import { writable } from 'svelte/store';

export const email = writable('');
export const password = writable('');
export const h = writable(500);
export const w = writable(800);