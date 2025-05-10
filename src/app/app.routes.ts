import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { SummaryComponent } from './summary/summary.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { BoardComponent } from './board/board.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { HelpSectionComponent } from './help-section/help-section.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},

    // Geschützte Routen mit Guard
    {path: 'summary', component: SummaryComponent, canActivate: [authGuard]},
    {path: 'add-task', component: AddTaskComponent, canActivate: [authGuard]},
    {path: 'board', component: BoardComponent, canActivate: [authGuard]},
    {path: 'contact', component: ContactComponent, canActivate: [authGuard]},

    // Öffentlich zugängliche Seiten
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'legal-notice', component: LegalNoticeComponent},
    {path: 'help-section', component: HelpSectionComponent}
];