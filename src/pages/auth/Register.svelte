<script>
  import { user } from "../../stores/user.js";
  let email = "",
    password = "",
    username = "";

  function handleSubmit(e) {
    e.preventDefault();
    user.register(email, password, username);
  }
</script>

<section class="section card-wrapper">
  <div class="login card">
    <div class="card-content">
      <form on:submit={handleSubmit}>
        <h1 class="title title--form">Registro</h1>

        <div class="field">
          <label class="label">Nome</label>
          <div class="control">
            <input
              bind:value={username}
              class="input"
              type="text"
              placeholder="João..." />
          </div>
        </div>

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
            <button type="submit" class="button button--block is-link">
              Enviar
            </button>
          </div>
        </div>
      </form>

    </div>
  </div>

</section>
