export async function get({ params }) {
    // `params.id` comes from [id].js
    const res = await fetch(`https://randomfox.ca/floof/?i=${params.id}`);
    const item = await res.json();

    if (item) {
        return {
            body: { item }
        };
    }

    return {
        status: 404
    };
};