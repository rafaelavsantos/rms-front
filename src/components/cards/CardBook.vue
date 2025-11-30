<template>
    <div class="card-book-container">
        <section class="card-book-img">
            <div>
                <label for="fileInput">
                    <img :src="props.img ? props.img : defaultImage" alt="Default Image" style="cursor: pointer;" />
                </label>

                <input type="file" name="fileInput" id="fileInput" style="display: none;" accept="image/*" @change="handleFileUpload">
            </div>
        </section>

        <section class="card-book-information">
            <h1>{{ props.title }}</h1>

            <p><strong>Author:</strong> {{ props.author }}</p>
            <p><strong>Number of pages:</strong> {{ props.numberPages }}</p>
            <p><strong>Format:</strong> {{ props.formart }}</p>
            <p><strong>Status:</strong> <span class="card-status" :style="{backgroundColor: changeColorStatus()}">{{ props.status }}</span></p>

            <div class="card-book-icon">
                <router-link :to="{name: 'edit-book'}" class="card-book-icon-button">
                    <Pencil color="#008000" />
                </router-link>

                <button @click="removeBook" class="card-book-icon-button">
                    <Trash2 color="#EA0000" />
                </button>
            </div>
        </section>
    </div>
</template>

<script setup>
import { Pencil, Trash2 } from 'lucide-vue-next';
import defaultImage from '../../assets/img/default-img.svg'
import { ref } from 'vue';

const props = defineProps(
    {
        title: {
            type: String, 
            default: 'teste',
            require: true,
        },
        author: {
            type: String, 
            default: 'Test',
        }, 
        numberPages: {
            type: Number, 
            default: 0,
        },
        status: {
            type: String, 
            default: 'Test',
        },
        formart: {
            type: String, 
            default: 'Test',
        },
        img: {
            type: String, 
            default: null,
        },
    }
);

console.log(props)

const statusColor = ref('');

const handleFileUpload = (event) => {
    const file = event.target.files[0];

    console.log(file);
}

const changeColorStatus = () => {
    if(props.status === 'read'){
        return statusColor.value = '#3B49E7';
    } else if(props.status === 'reading') {
        return statusColor.value = '#FCBA03';
    } else {
        return statusColor.value = '#22C55E';
    }
}
</script>

<style scoped>
.card-book-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem;
    padding: 1rem;
    border-radius: 4px;
    box-shadow: -1px -1px 8px rgba(0, 0, 0, 0.2);
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
    max-width: 350px;
}

.card-book-img {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-book-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-book-information {
    border-left: 1px solid #ccc;
    padding-left: 1rem;
}

.card-book-information h1 {
    text-align: center;
    font-size: 1.5rem;
}

.card-book-icon {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 0.2rem;
    margin-top: 0.5rem;
}

.card-book-icon-button {
    border: none;
    background-color: transparent;
    cursor: pointer;
}

.card-status {
  background-color: #3B49E7;
  color: #fff;
  padding: 2px 15px;
  border-radius: 20px;
}
</style>