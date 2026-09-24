<template>
  <section class="home">
    <h1>Zakarya Sabri</h1>
    <p class="tagline">Final Year Software Engineering Student</p>
    <p>
      I'm a student from London living in Bradford but I've lived in over 6 countries including
      Singapore, Malaysia and Egypt! I'm currently looking at gradute roles and masters programs as
      well as updating my <a href="https://neovim.io/"> neovim config!</a>
    </p>

    <div class="links">
      <a href="/cv.pdf" target="_blank" rel="noopener">CV</a>
      <a href="https://github.com/ZS-247" target="_blank" rel="noopener">GitHub</a>
      <a href="https://www.linkedin.com/in/zakarya-sabri-9b069a217/" target="_blank" rel="noopener"
        >LinkedIn</a
      >
      <a href="mailto:zakarya@zakarya.me">Email</a>
    </div>

    <h2>Skills</h2>
    <ul class="skills">
      <li v-for="skill in skills" :key="skill">{{ skill }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      skills: ['JavaScript', 'Java', 'Python', 'Linux', 'Nginx', 'Git'],
    }
  },
}
</script>

<style scoped>
.home {
  max-width: 700px;
  margin: 0 auto;
}
.tagline {
  color: #666;
  font-weight: 500;
}
.links {
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0;
}
.skills {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
}
.skills li {
  background: #f0f0f0;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.9rem;
}
</style>
