<script context="module">
    import { getProducts } from '../../lib/shopifyStore';
    export async function load(ctx) {
        const products = await getProducts();
        return { props: { products } };
    }
</script>

<script>
    export let products;
</script>

<div class="container mx-auto">
    <div class="columns-3">
        {#each products as product (product.node.id)}
            <div class="card bg-neutral shadow-xl mb-4">
                <figure class="px-10 pt-10">
                    <img
                        src={product.node.images.edges[0].node.src}
                        alt="{product.node.title}-picture"
                        class="rounded-xl w-25 h-25"
                    />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{product.node.title}</h2>
                    <p>{product.node.description}</p>
                    <div class="card-actions">
                        <button class="btn btn-secondary">
                            <a href={`/product/${product.node.id}`}>Buy</a>
                        </button>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
