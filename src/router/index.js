import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import BlogListView from '../views/BlogListView.vue'
import BlogPostView from '../views/BlogPostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/projects', name: 'projects', component: ProjectsView },
    { path: '/blog', name: 'blog', component: BlogListView },
    { path: '/blog/:slug', name: 'blog-post', component: BlogPostView, props: true },
  ],
})

export default router
