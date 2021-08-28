<script lang="ts">
  let items = ['taskA', 'taskB', 'taskC'];
  let input = ""
  const addItem = () => {
    items = [...items, input]
    input = ""
  }
  const deleteItem = (i) => {
    items.splice(i, 1)
    items = items
  }
</script>

{#each items as item, i}
  <div>{i} {item} <button on:click={() => deleteItem(i)}>x</button></div>
{/each}

{#if items.length === 0}
  done!
{/if}

<input bind:value={input}/><button on:click={addItem}>add</button>
