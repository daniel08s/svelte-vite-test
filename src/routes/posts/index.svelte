<script>
    export let posts;
</script>

<div class="container mx-auto">
    <div class="grid grid-cols-2 gap-4">
        {#each posts as post, idx (post.id)}
            <div class="card card-side bg-neutral shadow-xl mb-4 h-[20rem]">
                <figure><img src={post.image} alt="post" class="w-[30rem] h-[20rem]" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        <p>Post #{posts.length - idx}</p>
                    </h2>
                    <div class="flex items-baseline justify-between">
                        <span class="text-sm">{new Date(post.publishDate).toLocaleString('pt-PT').slice(0, 10)}</span>

                        <span class="badge badge-sm">{post.likes} likes <span class="pb-1 pl-0.5">👍</span></span>
                    </div>
                    <p>{post.text}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-secondary">Read</button>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
