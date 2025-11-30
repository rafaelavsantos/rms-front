<template>
    <aside class="sidebar">
        <h4 class="sidebar-title">RMS</h4>

        <nav class="sidebar-nav">
            <router-link :to="{name: 'dashboard'}" class="nav-item">
                <LayoutDashboard />
                Dashboard
            </router-link>

            <router-link :to="{name: 'books'}" class="nav-item">
                <BookMarked />
                Books
            </router-link>
        </nav>
    </aside>
</template>

<script setup>
import { BookMarked, LayoutDashboard } from 'lucide-vue-next';

</script>

<style scoped>
.sidebar {
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.sidebar-title {
    font-size: 1.1rem;
    color: #222;
}

.sidebar-nav {
    display: flex;
    flex-direction: column;
}

.nav-item {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: #222;
    transition: all 0.5s ease;
    padding: 0.3rem 0rem;
    font-weight: 500;
    text-decoration: none;
}

.nav-item:hover {
    background-color: rgba(189, 139, 2, 0.253);
}
</style>