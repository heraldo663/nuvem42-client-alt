<script>
  import TableView from "./tableView/TableView.svelte";
  import { onMount, createEventDispatcher } from "svelte";
  import { dirs } from "../stores/dirs.js";
  import { files } from "../stores/files.js";

  let items;
  let scale = 0;
  let contextTop = 0;
  let contextLeft = 0;

  onMount(async () => {
    dirs.getRoot();
  });
  const unsubscribeDirs = dirs.subscribe(state => {
    items = [...state];
  });
  function toggleContextMenu(e) {
    e.preventDefault();
    if (scale == 0) {
      scale = 1;
      contextTop = e.clientY;
      contextLeft = e.clientX;
    } else {
      scale = 0;
    }
  }

  function closeContextMenu(e) {
    scale = 0;
  }
</script>

<style>
  .contextmenu {
    box-shadow: 0 0 5px #ccc;
    position: absolute;
    width: 240px;
    transition: 0.1s;
    transform-origin: top left;
    transform: scale(0, 0);
    background-color: #fff;
  }

  .container {
    height: 100%;
  }
  .context__item:hover {
    cursor: pointer;
    border-left: solid 5px lightgreen;
    padding-left: 8px;
  }

  .new-dir,
  .new-file {
    position: fixed;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .new-dir {
    color: #fff;
    background-color: green;
    bottom: 40px;
    right: 95px;
  }
  .new-file {
    color: #fff;
    background-color: green;
    bottom: 110px;
    right: 40px;
  }
</style>

<div class="container" on:click={closeContextMenu}>
  <section class="section" on:contextmenu={toggleContextMenu}>
    <TableView {items} />
  </section>

</div>
<ul
  class="contextmenu panel"
  style="transform: scale({scale},{scale}); top: {contextTop}px; left: {contextLeft}px">
  <li class="context__item panel-block">Nova pasta</li>
</ul>

<div class="new-dir">
  <i class="fas fa-plus" />
</div>

<div class="new-file">
  <i class="fas fa-upload" />
</div>
