<template>
    <div class="dashboard-layout">
        <div class="aside-container" :class="toggleAsideActive ? 'asideActive' : 'asideHidden'">
            <essencial-links />
        </div>

        <div class="content-dashboard-layout">
            <div class="header-container">
                <HeaderComponent @activeAside="activeAside" />
            </div>

            <div class="main-container">
                <RouterView />
            </div>

            <div class="footer-container">
                <FooterComponent />
            </div>
        </div>
    </div>
</template>

<script setup>
import EssencialLinks from '@/components/aside/EssencialLinks.vue';
import FooterComponent from '@/components/footer/FooterComponent.vue';
import HeaderComponent from '@/components/header/HeaderComponent.vue';
import { ref } from 'vue';
import { RouterView } from 'vue-router';

const toggleAsideActive = ref(false);

function activeAside() {
    toggleAsideActive.value = !toggleAsideActive.value;
}

</script>

<style scoped>
.dashboard-layout {
    display: flex;
    min-height: 100vh;
}

.content-dashboard-layout {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.aside-container {
    background-color: #FFE082;
    width: 250px;
    transition: all 0.3s ease;
}

.header-container {
    background-color: #FCBA03;
    color: #000;
    flex-shrink: 0;
}

.main-container {
    background-color: #FFF8E1;
    padding: 1rem;
    flex: 1;
    overflow: auto;
}

.footer-container {
    background-color: #222;
    color: #fff;
    text-align: center;
    flex-shrink: 0;
}

.asideHidden {
    display: none;
}

.asideActive {
    display: block;
}

@media (max-width: 610px) {
    .main-container {
        height: 150vh;
    }
}
</style>