<template>
    <form class="form-wrapper" @submit.prevent.stop="updateUser" @reset="goToBack">
        <div class="form-container">
            <div class="form-column">
                <div class="form-field">
                    <label for="inName" class="form-label">
                        Name:
                    </label>

                    <div class="form-input-group">
                        <input type="text" name="name" id="inName" class="form-input" placeholder="Rafaela Santos" />
                    </div>
                </div>

                <div class="form-field">
                    <label for="inEmail" class="form-label">
                        E-mail:
                    </label>

                    <div class="form-input-group">
                        <input type="email" name="email" id="inEmail" class="form-input"
                            placeholder="rafaela@example.com" />
                    </div>
                </div>
            </div>

            <div class="form-column">
                <div class="form-field">
                    <label for="inNewPassword" class="form-label">
                        New Password:
                    </label>

                    <div class="form-input-group">
                        <input type="password" name="newPassword" id="inNewPassword" class="form-input"
                            placeholder="***************" />
                    </div>
                </div>

                <div class="form-field">
                    <label for="inConfirmNewPassword" class="form-label">
                        Confirm Password:
                    </label>

                    <div class="form-input-group">
                        <input type="password" name="confirmNewPassword" id="inConfirmNewPassword" class="form-input"
                            placeholder="***************" />
                    </div>
                </div>
            </div>
        </div>

        <div class="form-btn-wrapper">
            <button type="submit" class="btn-submit">Save</button>

            <button type="reset" class="btn-cancel">Cancel</button>
        </div>
    </form>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const updateUser = () => {
    console.log('Realizando update user');
    router.push({ name: 'dashboard' });
}

const goToBack = () => {
    router.go(-1);
}
</script>

<style scoped>
.form-field {
    margin: 0.3rem 0;
}
</style>