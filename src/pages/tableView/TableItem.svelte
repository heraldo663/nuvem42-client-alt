<script>
  export let title;
</script>

<style>
  .fa-edit,
  .fa-trash-alt {
    cursor: pointer;
  }

  .fa-trash-alt {
    color: lightcoral;
  }

  .fa-edit {
    color: cyan;
  }

  .dir {
    width: 100%;
  }
</style>

<tr>
  <td class="dir">{title}</td>
  <td>
    <i class="far fa-edit" />
  </td>
  <td>
    <i class="far fa-trash-alt" />
  </td>
</tr>
