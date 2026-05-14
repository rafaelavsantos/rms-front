<template>
    <form class="form-wrapper" @submit.prevent.stop="addBook">
        <div class="form-container">
            <div class="form-field">
                <label for="inTitle" class="form-label">
                    Title: <span class="required-indicator">*</span>
                </label>

                <div class="form-input-group">
                    <input v-model="book.title" type="text" name="title" id="inTitle" class="form-input"
                        placeholder="Enter the title of the book" />
                </div>

                <div v-if="errors.title" class="required-field">
                    <p>Please fill in the field correctly!</p>
                </div>
            </div>

            <div class="form-field">
                <label for="inAuthor" class="form-label">
                    Author
                </label>

                <div class="form-input-group">
                    <input v-model="book.author" type="text" name="author" id="inAuthor" class="form-input"
                        placeholder="Enter the author of the book" />
                </div>
            </div>

            <div class="form-field">
                <label for="inStartDate" class="form-label">
                    Start Date
                </label>

                <div class="form-input-group">
                    <input v-model="book.startDate" type="date" name="startDate" id="inStartDate" class="form-input" />
                </div>
            </div>

            <div class="form-field" v-if="!isReadingNow">
                <label for="inEndDate" class="form-label">
                    End Date
                </label>

                <div class="form-input-group">
                    <input v-model="book.endDate" type="date" name="endDate" id="inEndDate" class="form-input" />
                </div>
            </div>

            <div class="form-field"></div>
        </div>

        <div class="container-switch">
            <input class="switch switch--shadow" type="checkbox" name="switch-shadow" id="switch-shadow"
                v-model="isReadingNow" />
            <label for="switch-shadow"></label>
            <p>Reading at the moment</p>
        </div>

        <div class="form-btn-wrapper">
            <button type="submit" class="btn-submit">Save</button>

            <button type="reset" class="btn-cancel" @click="handleCancel">Cancel</button>
        </div>
    </form>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const isReadingNow = ref(false);

const book = ref({
    title: '', 
    author: '', 
    startDate: '', 
    endDate: '',
});

const errors = ref({
    title: false,
});

const resetForm = () => {
    book.value = {
        title: '', 
        author: '', 
        startDate: '', 
        endDate: '',
    }
    
    isReadingNow.value = false;
}

const validate = () => {
    errors.value.title = !book.value.title;
    return !errors.value.title;
}

const addBook = () => {
    if(!validate()) return;

    console.log('Book to save: ', book.value);

    // Exemplo:
    // await api.post('/books', book.value)
    resetForm();

    router.push({ name: 'books' });
}

const handleCancel = () => {
    resetForm();

    router.push({ name: 'books' });
}

watch(() => book.value.title, () => {
    errors.value.title = false;
});

watch(isReadingNow, (value) => {
    if(value) {
        book.value.endDate = '';
    }
});

</script>

<style scoped>
.container-switch {
    display: flex;
    align-items: center;
    margin-top: 1rem;
}

.container-switch p {
    font-size: 16px;
    align-items: center;
    padding: 2px 0 0 5px;
}

.switch {
    position: absolute;
    visibility: hidden;
}

.switch+label {
    display: block;
    position: relative;
    cursor: pointer;
    outline: none;
    user-select: none;
}

.switch--shadow+label {
    padding: 2px;
    width: 40px;
    height: 20px;
    background-color: #dddddd;
    border-radius: 30px;
}

.switch--shadow+label::before,
.switch--shadow+label::after {
    display: block;
    position: absolute;
    top: 1px;
    left: 1px;
    bottom: 1px;
    content: "";
}

.switch--shadow+label::before {
    right: 1px;
    background-color: #f1f1f1;
    border-radius: 3cm;
    transition: 0.4s;
}

.switch--shadow+label::after {
    width: 20px;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.4s;
}

.switch--shadow:checked+label::before {
    background-color: #8ce196;
}

.switch--shadow:checked+label::after {
    transform: translateX(20px);
}

.inactiveButton {
    background-color: #ffd35b;
}

.required-field {
    font-size: 0.8em;
    color: #ff0000;
    margin-top: 2px;
}
</style>