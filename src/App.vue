<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/blog">Blog</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <a href="https://github.com/ZS-247" target="_blank" rel="noopener">GitHub</a>
      <a href="https://discord.com/users/1213462649325617154" target="_blank" rel="noopener"
        >Discord</a
      >
      <a href="mailto:zakarya@zakarya.me">Email</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  color: #222;
}
#app {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

nav {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid #eee;
}
nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}
nav a.router-link-active {
  color: #2563eb;
}

main {
  padding: 2rem 0;
  min-height: 60vh;
}

footer {
  display: flex;
  gap: 1rem;
  padding: 1.5rem 0;
  border-top: 1px solid #eee;
  font-size: 0.9rem;
}
footer a {
  color: #555;
  text-decoration: none;
}
</style>
