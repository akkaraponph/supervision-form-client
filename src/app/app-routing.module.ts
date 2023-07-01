import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AboutComponent } from './modules/about/about.component';
import { ManageNewsComponent } from './modules/manage-news/manage-news.component';
import { ManagePersonnelComponent } from './modules/manage-personnel/manage-personnel.component';
import { ManageSchoolComponent } from './modules/manage-school/manage-school.component';
import { ManageSummaryReportComponent } from './modules/manage-summary-report/manage-summary-report.component';
import { ManageWorkGroupComponent } from './modules/manage-work-group/manage-work-group.component';
import { ManageUsersComponent } from './modules/manage-users/manage-users.component';
import { LoginComponent } from './modules/login/login.component';
import { DetailPersonnelComponent } from './modules/detail-personnel/detail-personnel.component';
import { SchoolComponent } from './modules/school/school.component';
import { ManageSchoolEditComponent } from './modules/manage-school-edit/manage-school-edit.component';
import { ManageSchoolViewComponent } from './modules/manage-school-view/manage-school-view.component';
import { ManageWorkGroupOneComponent } from './modules/manage-work-group-one/manage-work-group-one.component';
import { ManageWorkGroupTwoComponent } from './modules/manage-work-group-two/manage-work-group-two.component';
import { HomepageAdminComponent } from './modules/homepage-admin/homepage-admin.component';
import { ManageFormsComponent } from './modules/manage-forms/manage-forms.component';
import { MnfFirstComponent } from './modules/mnf-first/mnf-first.component';
import { MnfSpvsComponent } from './modules/mnf-spvs/mnf-spvs.component';
import { MnfTkComponent } from './modules/mnf-tk/mnf-tk.component';
import { MnfSpvsFirstComponent } from './modules/mnf-spvs-first/mnf-spvs-first.component';
import { MnfSpvsSecondComponent } from './modules/mnf-spvs-second/mnf-spvs-second.component';
import { MnfSpvsThirdComponent } from './modules/mnf-spvs-third/mnf-spvs-third.component';
import { MnfSpvsFourthComponent } from './modules/mnf-spvs-fourth/mnf-spvs-fourth.component';
import { MnfSpvsFifthComponent } from './modules/mnf-spvs-fifth/mnf-spvs-fifth.component';
import { MnfSpvsSixthComponent } from './modules/mnf-spvs-sixth/mnf-spvs-sixth.component';
import { MnfSpvsSeventhComponent } from './modules/mnf-spvs-seventh/mnf-spvs-seventh.component';
import { MnfSpvsEighthComponent } from './modules/mnf-spvs-eighth/mnf-spvs-eighth.component';
import { MnfSpvsNinthComponent } from './modules/mnf-spvs-ninth/mnf-spvs-ninth.component';
import { MnfSpvsTenthComponent } from './modules/mnf-spvs-tenth/mnf-spvs-tenth.component';
import { MnfSpvsEleventhComponent } from './modules/mnf-spvs-eleventh/mnf-spvs-eleventh.component';
import { MnfSpvsTwelfthComponent } from './modules/mnf-spvs-twelfth/mnf-spvs-twelfth.component';
import { MnfTkFristComponent } from './modules/mnf-tk-frist/mnf-tk-frist.component';
import { MnfTkSecondComponent } from './modules/mnf-tk-second/mnf-tk-second.component';
import { MnfTkThirdComponent } from './modules/mnf-tk-third/mnf-tk-third.component';
import { MnfTkFourthComponent } from './modules/mnf-tk-fourth/mnf-tk-fourth.component';
import { AboutPersonnelComponent } from './modules/about-personnel/about-personnel.component';
import { PersonneldataComponent } from './modules/personneldata/personneldata.component';
import { NewsComponent } from './modules/news/news.component';
import { SummaryReportUserComponent } from './modules/summary-report-user/summary-report-user.component';
import { NewsDetailComponent } from './modules/news-detail/news-detail.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent,
  }, {
    path: 'about',
    component: AboutComponent,
  }, {
    path: 'about-personnel',
    component: AboutPersonnelComponent,
  }, {
    path: 'news',
    component: NewsComponent,
  }, {
    path: 'homepage-admin',
    component: HomepageAdminComponent,
  }, {
    path: 'manage-news',
    component: ManageNewsComponent,
  }, {
    path: 'personneldata',
    component: PersonneldataComponent,
  }, {
    path: 'manage-personnel',
    component: ManagePersonnelComponent,
  }, {
    path: 'manage-school',
    component: ManageSchoolComponent,
  }, {
    path: 'manage-summary-report',
    component: ManageSummaryReportComponent,
  }, {
    path: 'manage-work-group',
    component: ManageWorkGroupComponent,
  },{
    path: 'manage-users',
    component: ManageUsersComponent,
  },{
    path: 'login',
    component: LoginComponent,
  },{
    path: 'detail-personnel',
    component: DetailPersonnelComponent,
  },{
    path: 'manage-school-view',
    component: ManageSchoolViewComponent,
  },{
    path: 'manage-work-group-one',
    component: ManageWorkGroupOneComponent,
  },{
    path: 'manage-work-group-two',
    component: ManageWorkGroupTwoComponent,
  },{
    path: 'manage-forms',
    component: ManageFormsComponent,
  },{
    path: 'mnf-first',
    component: MnfFirstComponent,
  },{
    path: 'mnf-spvs',
    component: MnfSpvsComponent,
  },{
    path: 'mnf-tk',
    component: MnfTkComponent,
  },{
    path: 'mnf-spvs-first',
    component: MnfSpvsFirstComponent,
  },{
    path: 'mnf-spvs-second',
    component: MnfSpvsSecondComponent,
  },{
    path: 'mnf-spvs-third',
    component: MnfSpvsThirdComponent,
  },{
    path: 'mnf-spvs-fourth',
    component: MnfSpvsFourthComponent,
  },{
    path: 'mnf-spvs-fifth',
    component: MnfSpvsFifthComponent,
  },{
    path: 'mnf-spvs-sixth',
    component: MnfSpvsSixthComponent,
  },{
    path: 'mnf-spvs-seventh',
    component: MnfSpvsSeventhComponent,
  },{
    path: 'mnf-spvs-eighth',
    component: MnfSpvsEighthComponent,
  },{
    path: 'mnf-spvs-ninth',
    component: MnfSpvsNinthComponent,
  },{
    path: 'mnf-spvs-tenth',
    component: MnfSpvsTenthComponent,
  },{
    path: 'mnf-spvs-eleventh',
    component: MnfSpvsEleventhComponent,
  },{
    path: 'mnf-spvs-twelfth',
    component: MnfSpvsTwelfthComponent,
  },{
    path: 'mnf-tk-frist',
    component: MnfTkFristComponent,
  },{
    path: 'mnf-tk-second',
    component: MnfTkSecondComponent,
  },{
    path: 'mnf-tk-third',
    component: MnfTkThirdComponent,
  },{
    path: 'mnf-tk-fourth',
    component: MnfTkFourthComponent,
  },{
    path: 'summary-report-user',
    component: SummaryReportUserComponent,
  },{
    path: 'news-detail',
    component: NewsDetailComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
}
