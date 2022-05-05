<script lang="ts">
    import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
</script>

<!-- <div class="footer">
    <div class="container bg-primary-focus">
        <ul>
            <li class="underline"><a href="https://github.com/iskilled">Github</a></li>
            <li><ThemeSwitch /></li>
            <li class="hand">👋</li>
        </ul>
    </div>
</div> -->

<div class="footer">
    <div class="left-container bg-base-300">
        <span>
            🐱‍👓
            <a href="https://github.com/iskilled">
                <span class="underline">Github</span>
            </a>
            🐱‍👓
        </span>
    </div>

    <div class="middle-container bg-base-300">
        <span class="hand hover:animate-wiggle">👋👋👋</span>
    </div>

    <div class="right-container bg-base-300">
        <ThemeSwitch />
    </div>
</div>

<style>
    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
    }

    div.footer {
        display: flex;
        height: 5vh;
        justify-content: space-between;
        padding-bottom: 10px;
        line-height: 2;
        font-family: Menlo, monospace;
    }

    .footer > div {
        width: 10vw;
        height: 7vh;
    }

    .left-container {
        justify-content: flex-start;
        align-self: center;
        align-content: center;
        padding-left: 15px;
        border-top-right-radius: 4vw;
    }

    .middle-container {
        width: 9vw !important;
        justify-content: center;
        align-self: baseline;
        align-content: center;
        border-top-left-radius: 4vw;
        border-top-right-radius: 4vw;
    }

    .right-container {
        justify-content: flex-end;
        align-content: center;
        align-self: center;
        padding-right: 15px;
        border-top-left-radius: 4vw;
    }

    ul {
        display: inline-grid;
        grid-auto-flow: row;
        grid-gap: 24px;
        justify-items: center;
        margin: auto;
    }

    li {
        list-style-type: none;
    }

    @media (min-width: 500px) {
        ul {
            grid-auto-flow: column;
        }
    }

    a {
        text-decoration: none;
        box-shadow: inset 0 -1px 0 hsla(0, 0%, 100%, 0.4);
    }

    a:hover {
        box-shadow: inset 0 -1.2em 0 hsla(0, 0%, 100%, 0.4);
    }

    li:last-child {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
    }

    /* li.hand:hover {
        animation: wave-animation 0.3s infinite;
    }

    @keyframes wave-animation {
        0%,
        100% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(20deg);
        }
        75% {
            transform: rotate(-15deg);
        }
    } */
</style>
