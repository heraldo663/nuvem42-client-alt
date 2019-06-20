<script>
  export let items;
  import TableItem from "./TableItem.svelte";
</script>

<table class="table">
  <thead>
    <tr>
      <th>Arquivos</th>
      <th>Editar</th>
      <th>Deletar</th>
    </tr>
  </thead>
  <tbody>
    {#each items as { id, title } (id)}
      <TableItem {title} />
    {/each}
  </tbody>
</table>
