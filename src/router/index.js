import { createWebHistory, createRouter } from "vue-router";
import Beranda from "../views/Beranda.vue";
import Arsip from "../views/Arsip.vue";
import Masuk from "../views/Masuk.vue";
import Keluar from "../views/Keluar.vue";
import Disposisi from "../views/Disposisi.vue";

const routes = [ 
    {
        path: "/",
        name: "Beranda",
        component: Beranda,
    },
    {
        path: "/arsip",
        name: "Arsip",
        component: Arsip,
    },
    {
        path: "/masuk",
        name: "Masuk",
        component: Masuk,
    },
    {
        path: "/keluar",
        name: "Keluar",
        component: Keluar,
    },
    {
        path: "/disposisi",
        name: "disposisi",
        component: Disposisi,
    },
];

const router = createRouter({
    history: createWebHistory(), 
    routes,
});


// router.beforeEach((to, from, next) => {
//     if (to.meta.requiresGuest && store.getters["auth/isAuthenticated"]) {
//         next("/");
//     } else{
//         next();
//     }
// });

// router.beforeEach((to, from, next) => {
//     if (to.meta.requiresLogin && !store.getters["auth/isAuthenticated"]) {
//         next("/login");
//     } else{
//         next();
//     }
// });

// function cekToken(to, from, next) {
//     var isAuthenticated = false;
//     if (localStorage.getItem("token")) isAuthenticated = true;
//     else isAuthenticated = false;
//     if (isAuthenticated) {
//       next();
//     } else {
//       next("/login");
//     }
//   }




export default router;