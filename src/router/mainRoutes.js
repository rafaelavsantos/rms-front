export default {
    path: '/',
    component: () => import('../views/BookView.vue'),
    children: [
        {
            path: 'dashboard',
            name: 'dashboard',
            component: () => import('../components/content/DashboardComponent.vue'),
        }, 
        {
            path: 'profile',
            name: 'profile',
            component: () => import('../components/user/ProfileComponent.vue'),
        },
        {
            path: 'books',
            name: 'books',
            component: () => import('../components/book/BookComponent.vue'),
        }, 
        {
            path: 'create-book',
            name: 'create-book',
            component: () => import('../components/book/CreateBook.vue'),
        },
        {
            path: 'edit-book',
            name: 'edit-book',
            component: () => import('../components/book/EditBook.vue'),
        }
    ]
}
