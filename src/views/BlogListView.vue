<template>
  <section>
    <h1>Blog</h1>
    <p v-if="posts.length === 0">No posts yet.</p>
    <article v-for="post in posts" :key="post.slug" class="post-preview">
      <h2>
        <router-link :to="{ name: 'blog-post', params: { slug: post.slug } }">
          {{ post.title }}
        </router-link>
      </h2>
      <p class="date">{{ post.date }}</p>
      <p>{{ post.excerpt }}</p>
    </article>
  </section>
</template>

<script>
import posts from '../utils/loadPosts.js'

export default {
  name: 'BlogListView',
  data() {
    return { posts }
  },
}
</script>

<style scoped>
.post-preview {
  margin-bottom: 2rem;
}
.date {
  color: #888;
  font-size: 0.85rem;
}
</style>
