<template>
    <div>
        <header class="header-wrapper">
            <div class="header-brand">
                <button class="brand-toggle" @click="toggleAside" aria-label="Abrir menu lateral">
                    <Menu />
                </button>

                <img src="../../assets/logo.png" alt="Lâmpada feliz" class="brand-logo">

                <div class="brand-text">
                    <p class="brand-name">Reading Management System</p>
                    <p class="brand-acronym">RMS</p>
                </div>
            </div>

            <div class="header-user">
                <button @click="toggleSelectVisibility" class="user-button">
                    User
                    <ChevronDown class="user-icon" />
                </button>

                <div class="user-dropdown" v-if="isSelectVisible">
                    <p @click="goToProfile" class="dropdown-item">Profile</p>
                    <p @click="toggleModalVisibility" class="dropdown-item">Logout</p>
                </div>
            </div>
        </header>

        <div class="logout-wrapper" v-if="isModalVisible">
            <div class="logout-container">
                <h4 class="logout-title">Logout</h4>
                <p class="logout-text">Are you sure you want to leave? </p>
                <div class="buttons">
                    <button type="button" class="btn-logout" @click="backToLogin()">Logout</button>
                    <button type="reset" class="btn-cancel" @click="toggleModalVisibility">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ChevronDown, Menu } from 'lucide-vue-next';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const emit = defineEmits();
const router = useRouter();
const isSelectVisible = ref(false);
const isModalVisible = ref(false);

const goToProfile = () => {
    router.push({name: 'profile'});
    
    toggleSelectVisibility();
}

const toggleSelectVisibility = () => {
    isSelectVisible.value = !isSelectVisible.value;
}

const toggleModalVisibility = () => {
    isModalVisible.value = !isModalVisible.value;
    toggleSelectVisibility();
}

function toggleAside() {
    emit('activeAside');
}

const backToLogin = () => {
    router.push('/');
}

</script>

<style scoped>
.header-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
}

.header-brand {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.brand-toggle {
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 50%;
    padding: 5px;
    transition: background-color 0.5s ease;
}

.brand-toggle:hover {
    background-color: rgba(189, 139, 2, 0.253);
}

.brand-logo {
    width: 40px;
    height: auto;
}

.brand-text {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
}

.brand-name {
    text-transform: uppercase;
}

.brand-acronym {
    display: none;
}

.header-user {
    background-color: #FFE082;
    padding: 5px 15px;
    border-radius: 4px;
    position: relative;
}

.user-button {
    border: none;
    background-color: transparent;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
}

.user-icon {
    transition: transform 0.8s ease;
}

.user-button:hover .user-icon {
    transform: rotate(180deg);
}

.user-dropdown {
    background-color: #FFE082;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 10;
    border-radius: 4px;
}

.dropdown-item {
    font-size: 13px;
    padding: 5px 15px;
    cursor: pointer;
    border-top: 1px solid #FCBA03;
}

.logout-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.logout-container {
    background-color: #fff;
    padding: 15px;
    width: 350px;
    border-radius: 4px;
}

.logout-title {
    border-bottom: 1px solid #ccc;
    margin-bottom: 15px;
    font-size: 1.5em;
}

.logout-text {
    margin-bottom: 15px;
    font-size: 1em;
    color: #919191;
}

.buttons {
    display: flex;
    justify-content: end;
}

.btn-logout {
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
}

.btn-cancel {
    background-color: transparent;
    color: #000;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}

/* ====== RESPONSIVIDADE ====== */
@media (max-width: 768px) {
    .brand-name {
        display: none;
    }

    .brand-acronym {
        display: block;
    }
}

@media (max-width: 475px) {
    .brand-logo {
        display: none;
    }

    .header-brand {
        margin-right: 1rem;
    }
}
</style>