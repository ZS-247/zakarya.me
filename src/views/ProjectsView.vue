<template>
  <section>
    <h1>Projects</h1>
    <div class="grid">
      <article v-for="project in projects" :key="project.title" class="card">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <ul class="tech">
          <li v-for="t in project.tech" :key="t">{{ t }}</li>
        </ul>
        <div class="links">
          <a :href="project.github" target="_blank" rel="noopener">GitHub</a>
          <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener">Demo</a>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import projects from '../data/projects.js'

export default {
  name: 'ProjectsView',
  data() {
    return { projects }
  },
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}
.card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.25rem;
}
.tech {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding: 0;
  margin: 0.75rem 0;
}
.tech li {
  background: #f0f0f0;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}
.links {
  display: flex;
  gap: 1rem;
}
</style>
