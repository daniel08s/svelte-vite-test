<!-- <script lang="ts">
    import { theme } from '$lib/stores';
</script>

<select bind:value={$theme}>
    <option value="system">System</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
</select>
 -->
<script>
    import { onMount } from 'svelte';
    import { themeChange } from 'theme-change';

    // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
    onMount(() => {
        themeChange(false);
        // 👆 false parameter is required for svelte
    });
</script>

<!-- Handmade theme at the start of file -->

<select data-choose-theme class="focus:outline-none h-7 rounded-full px-3 border bg-base-100 mr-0.5">
    <option value="synthwave">Synthwave</option>
    <option value="cupcake">Cupcake</option>
    <option value="night">Dark</option>
    <option value="mytheme">My Theme</option>
    <option value="chalk">Chalk</option>
</select>
