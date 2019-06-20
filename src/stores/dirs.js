import { writable } from "svelte/store";
import { navigateTo } from "svero";
import { unsetToken } from "../services/auth";
import api from "../services/api";

function createCount() {
  const { subscribe, set, update } = writable([
    {
      id: "",
      root: "",
      owner: "",
      title: ""
    }
  ]);

  return {
    subscribe,
    getRoot: async () => {
      try {
        const res = await api.get("/dirs");
        const { data } = res.data;
        set(data.dir);
      } catch (error) {
        console.log(error);
        if (error.response.status === 401) {
          navigateTo("/login");
          unsetToken();
        } else {
          console.log(error.response);
        }
      }
    },
    get: async () => {},
    create: async title => {
      try {
        const res = await api.post("/dirs", {
          title
        });
        console.log(res);
      } catch (error) {}
    },
    update: async () => {},
    delete: async () => {}
  };
}

export const dirs = createCount();
