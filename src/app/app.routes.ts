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

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'summary', component: SummaryComponent},
    {path: 'add-task', component: AddTaskComponent},
    {path: 'board', component: BoardComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'legal-notice', component: LegalNoticeComponent},
    {path: 'help-section', component: HelpSectionComponent}
];