import Home from "./components/Home.vue"
import SignUp from "./components/SignUp.vue"
import Update from './components/Update.vue'
import Add from './components/Add.vue'
import {
    createRouter,
    createWebHistory
} from "vue-router";
import Login from './components/Login.vue'


const routes = [{
        name: "Home",
        component: Home,
        path: "/",
    },
    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up",
    },
    {
        name: "Login",
        component: Login,
        path: "/login"
    },
    {
        name: "Update",
        component: Update,
        path: "/update/:id",
    },
    {
        name: "Add",
        component: Add,
        path: "/add",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;