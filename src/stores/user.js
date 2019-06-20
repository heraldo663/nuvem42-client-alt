import { writable } from "svelte/store";
import { setToken, unsetToken, isAuthenticated } from "../services/auth";
import { navigateTo } from "svero";
import api from "../services/api";

function createUserStore() {
  const { subscribe, set, update } = writable({
    loading: false,
    username: "",
    isAuthenticated: isAuthenticated(),
    errors: []
  });

  return {
    subscribe,
    login: async (email, password) => {
      try {
        update(state => ({ ...state, loading: true }));
        const res = await api.post("/sessions", {
          email,
          password
        });

        const { data } = res.data;
        update(state => ({ ...state, username: data.username }));
        setToken(data.token);
        update(state => {
          return { ...state, loading: false, isAuthenticated: true };
        });
        navigateTo("/");
      } catch (err) {
        update(state => ({
          ...state,
          loading: false,
          errors: err.response.data.errors
        }));
      }
    },
    logout: () => {
      unsetToken();
      navigateTo("/login");
    },
    register: async (email, password, username) => {
      try {
        update(state => ({ ...state, loading: true }));
        const res = await api.post("/users", {
          email,
          password,
          username
        });
        update(state => ({ ...state, loading: false }));
        navigateTo("/login");
      } catch (err) {
        console.log(err.response);
        update(state => ({
          ...state,
          loading: false,
          errors: err.response.data.errors
        }));
      }
    }
  };
}

export const user = createUserStore();
