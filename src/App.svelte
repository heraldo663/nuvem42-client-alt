<script>
  import { Router, Route } from "svero";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Routes from "./Routes.svelte";

  export let name;
</script>

<style>
  .site {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .wrapper {
    flex: 1;
  }
</style>

<div class="site">
  <Header />
  <main class="wrapper">
    <Routes />
  </main>
  <Footer />
</div>
