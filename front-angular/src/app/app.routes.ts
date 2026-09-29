import { Routes } from '@angular/router';
import { DashboardPage } from './features/dashboard/dashboard';
import { ModulePlaceholderPage } from './features/module-placeholder/module-placeholder';

export const routes: Routes = [
  { path: '', component: DashboardPage, title: 'Visão geral | Gestão Edu' },
  { path: 'pessoas', component: ModulePlaceholderPage, data: { title: 'Pessoas' }, title: 'Pessoas | Gestão Edu' },
  { path: 'escolas', component: ModulePlaceholderPage, data: { title: 'Escolas e CMEIs' }, title: 'Escolas | Gestão Edu' },
  { path: 'turmas', component: ModulePlaceholderPage, data: { title: 'Turmas e alunos' }, title: 'Turmas | Gestão Edu' },
  { path: 'avaliacoes', component: ModulePlaceholderPage, data: { title: 'Avaliações' }, title: 'Avaliações | Gestão Edu' },
  { path: '**', redirectTo: '' },
];
