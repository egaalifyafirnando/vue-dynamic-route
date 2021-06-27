import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () =>
            import(
                /* webpackChunkName: "home" */ '../components/pages/Home.vue'
            ),
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import(
                /* webpackChunkName: "about" */ '../components/pages/About.vue'
            ),
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () =>
            import(
                /* webpackChunkName: "contact" */ '../components/pages/Contact.vue'
            ),
    },
    {
        path: '/users',
        name: 'Users',
        component: () =>
            import(
                /* webpackChunkName: "users" */ '../components/pages/Users.vue'
            ),
    },
    {
        path: '/users/:id',
        name: 'User',
        component: () =>
            import(
                /* webpackChunkName: "user" */ '../components/pages/User.vue'
            ),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
