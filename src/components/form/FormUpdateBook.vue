<template>
    <form class="form-wrapper" @submit.prevent.stop="updateUser" @reset="goToBook">
        <div class="form-container">
            <div class="form-column">
                <div class="form-field">
                    <label for="inTitle" class="form-label">
                        Title: <span class="required-indicator">*</span>
                    </label>

                    <div class="form-input-group">
                        <input type="text" name="title" id="inTitle" class="form-input" placeholder="Enter the title of the book"
                            required />
                    </div>
                </div>

                <div class="form-field">
                    <label for="inAuthor" class="form-label">
                        Author 
                    </label>

                    <div class="form-input-group">
                        <input type="text" name="author" id="inAuthor" class="form-input"
                            placeholder="Enter the author of the book" />
                    </div>
                </div>

                <div class="form-field">
                    <label for="inQtdPage" class="form-label">
                        Number of pages 
                    </label>

                    <div class="form-input-group">
                        <input type="number" name="qtdPage" id="inQtdPage" class="form-input"
                            placeholder="Enter the number of pages of the book" step="1" min="0" />
                    </div>
                </div>
            </div>

            <div class="form-column">
                <div class="form-field">
                    <label for="inFormatBook" class="form-label">
                        Format Book
                    </label>

                    <div class="form-input-group">
                        <input type="password" name="formatBook" id="inFormatBook" class="form-input"
                            placeholder="Enter the format book"  />
                    </div>
                </div>

                <div class="form-field">
                    <label for="inStartDate" class="form-label">
                        Start Date
                    </label>

                    <div class="form-input-group">
                        <input type="date" name="startDate" id="inStartDate" class="form-input"
                         />
                    </div>
                </div>

                <div class="form-field" v-if="!readingMoment">
                    <label for="inEndDate" class="form-label">
                        End Date
                    </label>

                    <div class="form-input-group">
                        <input type="date" name="endDate" id="inEndDate" class="form-input"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="container-switch">
            <input class="switch switch--shadow" type="checkbox" name="switch-shadow" id="switch-shadow" v-model="readingMoment" />
            <label for="switch-shadow"></label>
            <p>Reading at the moment</p>
        </div>

        <div class="form-btn-wrapper">
            <button type="submit" class="btn-submit">Save</button>

            <button type="reset" class="btn-cancel" >Cancel</button>
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const readingMoment = ref(false);

const updateUser = () => {
    console.log('Realizando update user');
    router.push({ name: 'dashboard' });
}

const goToBook = () => {
    router.push({ name: 'books' });
}

</script>

<style scoped>
.form-field {
    margin: 0.3rem 0;
}

.container-switch {
    display: flex;
    align-items: center;
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

</style>