import { Routes } from "@angular/router";

const routers: Routes = [
    {
        path: "",
        loadComponent: () => import("./products")
    },
    {
        path: "create",
        loadComponent: () => import("./create/create")
    },
    {
        path: "edit/:id",
        loadComponent: () => import("./create/create")
    }
]

export default routers