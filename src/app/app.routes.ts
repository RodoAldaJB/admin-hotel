import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [
            {
                path: 'reservaciones',
                title: 'Reservaciones',
                loadComponent: () => import('./dashboard/pages/reservation/reservation.component')
            },
            {
                path: 'habitaciones',
                title: 'Habitaciones',
                loadComponent: () => import('./dashboard/pages/room/room.component')
            },
            {
                path: 'trabajadores',
                title: 'Trabajadores',
                loadComponent: () => import('./dashboard/pages/workers/workers.component')
            },
            {
                path: 'trabajador/:id',
                title: 'Trabajador View',
                loadComponent: () => import('./dashboard/pages/worker/worker.component')
            },
            {
                path: 'historial',
                title: 'Historial',
                loadComponent: () => import('./dashboard/pages/history/history.component')
            }
        ]
    },
    {
        path: '',
        redirectTo: '/dashboard/reservaciones',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/dashboard/reservaciones',
        pathMatch: 'full'
    },
];
