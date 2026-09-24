<template>
  <div class="center-screen">
    <section class="intro-card">
      <div class="avatar" aria-hidden="true">ZS</div>

      <div class="content">
        <p class="eyebrow">Hello, I'm</p>
        <h1>Zakarya Sabri</h1>

        <p class="bio">
          I'm a developer who enjoys building thoughtful, accessible, and enjoyable digital
          experiences.
        </p>

        <div class="links">
          <a href="#projects">View my work</a>
          <a href="mailto:zakarya@zakarya.me">Get in touch</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.center-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}

.intro-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  max-width: 650px;
  padding: 2rem;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  background: #ffffff;
  color: #111827;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
}

.avatar {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #111827;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.eyebrow {
  margin: 0 0 0.25rem;
  color: #6b7280;
  font-size: 0.9rem;
}

h1 {
  margin: 0;
  font-size: 2rem;
  letter-spacing: -0.03em;
}

.bio {
  margin: 0.75rem 0 1.25rem;
  color: #4b5563;
  line-height: 1.6;
}

.links {
  display: flex;
  gap: 1rem;
}

.links a {
  color: #111827;
  font-weight: 600;
  text-decoration: none;
  border-radius: 4px;
}

.links a:hover {
  text-decoration: underline;
}

.links a:focus-visible {
  outline: 2px solid #111827;
  outline-offset: 3px;
}

@media (max-width: 500px) {
  .intro-card {
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
  }

  .content {
    text-align: center;
  }
}
</style>
