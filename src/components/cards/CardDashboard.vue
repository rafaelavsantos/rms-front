<template>
    <div class="card-dashboard-container" :style="{ backgroundColor: props.cardColor }">
        <section class="card-icon">
            <BookOpen color="#fff" />
        </section>

        <section class="card-info">
            <p>{{ props.quantidade }}</p>
            <p>{{ props.description }}</p>
        </section>
    </div>
</template>

<script setup>
import { BookOpen } from 'lucide-vue-next';

const props = defineProps(['cardColor', 'description', 'quantidade']);
</script>

<style scoped>
.card-dashboard-container {
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
}

.card-info {
    color: #fff;
    text-align: center;
}
</style>