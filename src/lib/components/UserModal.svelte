<script>
    import { getUserById } from '../../api/users';

    export let userId;
    let user = undefined;
    let loaded = false;
    let open = false;

    $: if (open && !loaded) {
        loaded = true;
    }

    async function getUser() {
        if (loaded && user.id === userId) return;
        console.log(userId);
        user = await getUserById(userId);
    }
</script>

<!-- The button to open modal -->
<label for="user-modal" class="btn btn btn-secondary modal-button">Details</label>
<input type="checkbox" id="user-modal" class="modal-toggle" bind:value={open} on:click={getUser} />

<!-- The modal -->
<div class="modal">
    {#if user}
        <div class="modal-box">
            <h3 class="font-bold text-lg">{user.firstName} {user.lastName}</h3>
            <pre>{JSON.stringify(user, null, 4)}</pre>
            <div class="modal-action">
                <label for="user-modal" class="btn">Close</label>
            </div>
        </div>
    {/if}
</div>
