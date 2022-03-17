<script lang="ts">
    let clicked = 0;
    function handleClick(event: CustomEvent | MouseEvent) {
        event = event as MouseEvent;
        if (event.button === 0) {
            clicked++;
        } else if (event.button === 1) {
            clicked = 0;
        }
    }
</script>

<svelte:head>
    <title>Welcome</title>
</svelte:head>

<button on:mousedown={handleClick} class="btn btn-primary">
    <span>Click Me</span>
</button>
<p class="mdc-typography--body1">
    {#if clicked}
        You've clicked the button {clicked} time{clicked === 1 ? '' : 's'}. Middle click the button to reset.
    {:else}
        <span class="grayed">You haven't clicked the button.</span>
    {/if}
</p>

<style>
    .grayed {
        opacity: 0.6;
    }
</style>
