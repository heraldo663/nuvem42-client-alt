<script>
  import api from "../../services/api.js";
  import { user } from "../../stores/user.js";
  let email = "",
    password = "",
    rememberMe = false,
    showErrors = false;

  async function handleSubmit(e) {
    e.preventDefault();
    user.login(email, password);
    showErrors = true;
    setTimeout(() => {
      showErrors = false;
    }, 4000);
  }
</script>

<style>
  .toast {
    position: absolute;
    z-index: 5;
    width: 316px;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

{#if $user.errors.length >= 1 && showErrors}
  <div class="notification toast is-danger">
    <p>Email ou senha incorreto.</p>
  </div>
{/if}
<section class="section card-wrapper">
  <div class="login card">
    <div class="card-content">
      <form on:submit={handleSubmit}>
        <h1 class="title title--form">login</h1>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              bind:value={email}
              class="input"
              type="email"
              placeholder="exemple@exemple.com" />
          </div>
        </div>

        <div class="field">
          <label class="label">Senha</label>
          <div class="control">
            <input bind:value={password} class="input" type="password" />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input bind:value={rememberMe} type="checkbox" />
              Lembre-se de min
            </label>
          </div>
        </div>

        <div class="field">
          <div class="control is-flex">
            <button type="submit" class="button button--block is-link">
              Entrar
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>

</section>
