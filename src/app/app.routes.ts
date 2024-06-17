import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PetRegistryComponent } from './components/pet-registry/pet-registry.component';
import { UserRegistryComponent } from './components/user-registry/user-registry.component';
import { AdoptionComponent } from './components/adoption/adoption.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'pet-registry',
        component: PetRegistryComponent
    },
    {
        path: 'user-registry',
        component: UserRegistryComponent
    },
    {
        path: 'adoption',
        component: AdoptionComponent
    },
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'register',
        component: UserRegistryComponent
    }
];
