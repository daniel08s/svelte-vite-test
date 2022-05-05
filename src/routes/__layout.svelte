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

<div class="layout-container">
    <div class="side-line bg-base-300" />
    <div class="content">
        <Navbar />
        <main class="m-3 pb-12">
            <slot />
        </main>
        <Footer />
    </div>
    <div class="side-line bg-base-300" />
</div>

<style lang="postcss">
    .layout-container {
        display: flex;
        height: 100%;
    }

    .side-line {
        height: 100%;
        width: 6px;
    }

    .content {
        height: 100%;
        width: calc(100% - 6px);
    }
</style>
