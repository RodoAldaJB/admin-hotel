import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [
            {
                path: 'reservaciones',
                title: 'Reservaciones',
                loadComponent: () => import('./dashboard/pages/reservation/reservation.component'),
                children: [
                    {
                        path: 'pendientes',
                        title: 'Pendientes',
                        loadComponent: () => import('./dashboard/pages/reservation/pending/pending.component')
                    },
                    {
                        path: 'confirmadas',
                        title: 'Confirmadas',
                        loadComponent: () => import('./dashboard/pages/reservation/confirmed/confirmed.component')
                    },
                    {
                        path: 'activas',
                        title: 'Activas',
                        loadComponent: () => import('./dashboard/pages/reservation/active/active.component')
                    },
                    {
                        path: '',
                        redirectTo: '/dashboard/reservaciones/pendientes',
                        pathMatch: 'full'
                    }
                ]
            },
            {
                path: 'habitaciones',
                title: 'Habitaciones',
                loadComponent: () => import('./dashboard/pages/room/room.component'),
                children: [
                    {
                        path: '',
                        title: 'Lista de Habitaciones',
                        loadComponent: () => import('./dashboard/pages/room/list-room/list-room.component')
                    },
                    {
                        path: 'crear',
                        title: 'Agregar Habitación',
                        loadComponent: () => import('./dashboard/pages/room/new-room/new-room.component')
                    }
                ]
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
        path: 'login',
        loadComponent: () => import('./auth/auth.component'),
        children: [
            {
                path: '',
                loadComponent: () => import('./auth/login/login.component')
            },
            {
                path: 'identify',
                loadComponent: () => import('./auth/identify/identify.component')
            }
        ]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/dashboard/reservaciones',
        pathMatch: 'full'
    },
];
