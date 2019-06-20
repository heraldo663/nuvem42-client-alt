<script>
  import { Router, Route } from "svero";
  import Login from "./pages/auth/Login.svelte";
  import Register from "./pages/auth/Register.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import { user } from "./stores/user.js";

  let isAuthenticated;
  const unsubscribe = user.subscribe(state => {
    isAuthenticated = state.isAuthenticated;
  });
</script>

<Router>
  <Route
    path="*"
    component={Dashboard}
    condition={isAuthenticated}
    redirect="/login" />
  <Route path="/login" component={Login} />
  <Route path="/register" component={Register} />
</Router>
