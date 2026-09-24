<template>
  <section v-if="post">
    <router-link to="/blog">&larr; Back to blog</router-link>
    <h1>{{ post.title }}</h1>
    <p class="date">{{ post.date }}</p>
    <div class="content" v-html="post.html"></div>
  </section>
  <section v-else>
    <p>Post not found.</p>
    <router-link to="/blog">&larr; Back to blog</router-link>
  </section>
</template>

<script>
import posts from '../utils/loadPosts.js'

export default {
  name: 'BlogPostView',
  props: ['slug'],
  computed: {
    post() {
      return posts.find((p) => p.slug === this.slug)
    },
  },
}
</script>

<style scoped>
.date {
  color: #888;
  font-size: 0.85rem;
  margin-bottom: 1.5rem;
}
.content :deep(h2) {
  margin-top: 1.5rem;
}
.content :deep(p) {
  line-height: 1.6;
}
</style>
