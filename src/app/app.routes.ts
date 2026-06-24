import { Routes } from '@angular/router';
import { AutenticarUsuario } from './autenticar-usuario/autenticar-usuario';
import { CriarUsuario } from './criar-usuario/criar-usuario';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
    {
        path: 'pages/autenticar', //Rota de navegação
        component: AutenticarUsuario //Componente renderizado
    },
    {
        path: 'pages/criar-usuario', //Rota de navegação
        component: CriarUsuario //Componente renderizado
    },
    {
        path: 'app/dashboard', //Rota de navegação
        component: Dashboard //Componente renderizado
    },
    {
        path: '', pathMatch: 'full', //Rota raiz do projeto
        redirectTo: 'pages/autenticar' //Redireciona para a rota de autenticação
    }
];
