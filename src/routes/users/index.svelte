<script>
    export let users;
</script>

<div class="container mx-auto">
    <div class="columns-3">
        {#each users as user (user.id)}
            <div class="card bg-neutral w-90 shadow-xl mb-4">
                <figure class="px-10 pt-10">
                    <img src={user.picture} alt="{user.firstName}-picture" class="rounded-xl aspect-square w-20 h-20" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{`${user.firstName} ${user.lastName}`}</h2>
                    <p>No description available for the time being...</p>
                    <div class="card-actions">
                        <button class="btn btn-secondary">
                            <a href={`/users/${user.id}`}>Details</a>
                        </button>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
