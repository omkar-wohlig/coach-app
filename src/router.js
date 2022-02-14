import {createRouter,  createWebHistory} from 'vue-router';
import CoachDetails from '@/pages/coaches/CoachDetails.vue';
import CoachList from '@/pages/coaches/CoachList.vue';
import CoachRegister from '@/pages/coaches/CoachRegister.vue';
import ContactCoach from '@/pages/requests/ContactCoach.vue';
import NotFound from '@/pages/requests/NotFound.vue';
import RequestsReceived from '@/pages/requests/RequestsReceived.vue';





const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
        path: '/', redirect: '/coaches' 
    },
    {
        path: '/coaches', component: CoachList 
    },
    {
        path: '/coaches/:id', component: CoachDetails, children:[
            { path: 'contact', component: ContactCoach}
        ] 
    },
    {
        path: '/register', component: CoachRegister 
    },
    {
        path: '/requests', component: RequestsReceived 
    },
    {
        path: '/:notFound(.*)', component: NotFound 
    }
    
]
})


export default router;
