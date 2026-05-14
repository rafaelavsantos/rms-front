export default {
    path: '/',
    component: () => import('../views/LoginView.vue'),
    children: [
        {
            path: '',
            name: 'login',
            component: () => import('../components/form/auth/FormLogin.vue'),
        },
        {
            path: '/create-user',
            name: 'create-user',
            component: () => import('../components/form/auth/FormCreateUser.vue'),
        },
        {
            path: '/forgot-password',
            name: 'forgot-password',
            component: () => import('../components/form/auth/FormForgotPassword.vue'),
        }
    ]
}
