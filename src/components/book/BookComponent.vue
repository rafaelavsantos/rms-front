<template>
    <section class="card-wrapper">
        <header class="card-header">
            <h3 class="card-title">My book collection</h3>

            <div class="search-add-container">
                <div class="form-input-group">
                    <input type="search" id="search" placeholder="Search book" class="form-input" />
                    <Search color="#ccc" />
                </div>

                <router-link :to="{ name: 'create-book' }" class="btn-add-book">
                    <span class="btn-add-text">Add book</span>
                    <span class="btn-add-icon">+</span>
                </router-link>
            </div>
        </header>

        <section v-if="books.length === 0" class="collection-empty">
            <p class="empty-description">Your list is empty, click the register button to start filling your list.</p>

            <router-link :to="{ name: 'create-book' }" class="btn-add-book">Add book</router-link>
        </section>

        <section v-else class="collection-container">
            <div v-for="(book, index) in books" :key="index" class="collection-list">
                <CardBook :title="book.title" :author="book.author" :number-pages="book.numberPages"
                    :status="book.status" :formart="book.formart" :img="book.img" />
            </div>
        </section>
    </section>
</template>

<script setup>
import { Search } from 'lucide-vue-next';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import CardBook from '../cards/CardBook.vue';

const books = ref([
    {
        id: 0,
        title: "Teste",
        author: "Teste",
        numberPages: 20,
        status: "read",
        formart: "fisic",
        img: ""
    },
    {
        id: 1,
        title: "Teste",
        author: "Teste",
        numberPages: 20,
        status: "reading",
        formart: "digital",
        img: "src/assets/logo.png"
    },
    {
        id: 2,
        title: "Teste",
        author: "Teste",
        numberPages: 20,
        status: "finished",
        formart: "fisic",
        img: "src/assets/logo.png"
    }
]);
</script>

<style scoped>
.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row wrap;
    padding: 0.75rem 0;

}

.form-input-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 0.5rem;
}

.form-input {
    outline: none;
}

.collection-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.btn-add-book {
    background-color: #4311d2;
    color: #fff;
    box-shadow: 0px 8px 12px rgba(67, 17, 210, 0.3);
    transition: background-color 0.5s ease, color 0.5s ease;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 0.5rem 0.75rem;
    text-decoration: none;
}

.btn-add-book:hover {
    background-color: rgba(67, 17, 210, 0.863);
}

.collection-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

.collection-list {
    width: 350px;
}

.search-add-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.btn-add-icon {
    display: none;
}

@media (max-width: 850px) {
    .card-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}

@media (max-width: 500px) {
    .btn-add-icon {
        display: block;
    }

    .btn-add-text {
        display: none;
    }
}
</style>