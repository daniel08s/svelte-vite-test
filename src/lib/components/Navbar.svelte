<nav class="">
    <div class="flex" style="width: 60px; height: 60px;"><img src="static/logo.svg" alt="logo" /></div>
    <div class="links base-content font-bold underline">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/users">Users</a>
        <a href="/posts">Posts</a>
    </div>
</nav>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        margin-bottom: 15px;
    }

    nav a {
        text-decoration: none;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.2em;
    }

    .links {
        display: flex;
        margin: 0 1em;
    }

    .links a {
        display: inline-block;
        margin: 0 1em;
    }
</style>
