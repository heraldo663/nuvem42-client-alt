import { writable } from "svelte/store";
import api from "../services/api";

function createCount() {
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    get: async () => {}
  };
}

export const files = createCount();
