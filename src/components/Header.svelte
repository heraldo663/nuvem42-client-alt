<script>
  import { Link } from "svero";
  import { user } from "../stores/user.js";

  function openMobileMenu(e) {
    const target = this.dataset.target;
    const $target = document.getElementById(target);

    this.classList.toggle("is-active");
    $target.classList.toggle("is-active");
  }
</script>

<style>
  .navbar {
    position: relative;
  }

  @media (max-width: 1023px) {
    .absolute {
      position: absolute;
      z-index: 6;
      width: 100%;
    }
  }
</style>

<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <Link class="navbar-item" href="/">Nuvem42</Link>

    <p
      on:click={openMobileMenu}
      role="button"
      class="navbar-burger burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasic">
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </p>
  </div>

  <div id="navbarBasic" class="navbar-menu absolute">

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          {#if !$user.isAuthenticated}
            <Link href="/register" class="button is-primary">
              <strong>Register</strong>
            </Link>
            <Link href="/" class="button is-warning">Login</Link>
          {/if}
        </div>
      </div>
    </div>
  </div>
</nav>
