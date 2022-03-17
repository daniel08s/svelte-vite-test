<script>
    import '$lib/global.css';

    import Footer from '$lib/components/Footer.svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    /* import { theme } from '$lib/stores'; */
</script>

<!-- Handmade theme -->
<!-- <svelte:head>
    <meta name="color-scheme" content={$theme == 'system' ? 'light dark' : $theme} />
    <link rel="stylesheet" href={`/theme/${$theme}.css`} />
</svelte:head> -->

<Navbar />

<main class="m-3 pb-12">
    <slot />
</main>

<Footer />
