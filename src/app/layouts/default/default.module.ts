import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/modules/about/about.component';
import { ManageNewsComponent } from 'src/app/modules/manage-news/manage-news.component';
import { ManagePersonnelComponent } from 'src/app/modules/manage-personnel/manage-personnel.component';
import { ManageSchoolComponent } from 'src/app/modules/manage-school/manage-school.component';
import { ManageSummaryReportComponent } from 'src/app/modules/manage-summary-report/manage-summary-report.component';
import { ManageWorkGroupComponent } from 'src/app/modules/manage-work-group/manage-work-group.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { ManageUsersComponent } from 'src/app/modules/manage-users/manage-users.component';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { NewsComponent } from 'src/app/modules/news/news.component';
import { PersonneldataComponent } from 'src/app/modules/personneldata/personneldata.component';
import { SchoolComponent } from 'src/app/modules/school/school.component';
import { WorkgroupComponent } from 'src/app/modules/workgroup/workgroup.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { AgregarAdduserComponent } from 'src/app/modules/agregar-adduser/agregar-adduser.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AgregarAddpersonnelComponent } from 'src/app/modules/agregar-addpersonnel/agregar-addpersonnel.component';
import { DetailPersonnelComponent } from 'src/app/modules/detail-personnel/detail-personnel.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { ManageSchoolEditComponent } from 'src/app/modules/manage-school-edit/manage-school-edit.component';
import { ManageSchoolViewComponent } from 'src/app/modules/manage-school-view/manage-school-view.component';
import { ManageWorkGroupOneComponent } from 'src/app/modules/manage-work-group-one/manage-work-group-one.component';
import { ManageWorkGroupTwoComponent } from 'src/app/modules/manage-work-group-two/manage-work-group-two.component';
import { ToastrModule } from 'ngx-toastr';
import { AgregarAddschoolComponent } from 'src/app/modules/agregar-addschool/agregar-addschool.component';
import { DetailSchoolComponent } from 'src/app/modules/detail-school/detail-school.component';
import { AgregarNewsComponent } from 'src/app/modules/agregar-news/agregar-news.component';
import { DetailNewsComponent } from 'src/app/modules/detail-news/detail-news.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HomepageAdminComponent } from 'src/app/modules/homepage-admin/homepage-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageFormsComponent } from 'src/app/modules/manage-forms/manage-forms.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MnfFirstComponent } from 'src/app/modules/mnf-first/mnf-first.component';
import { MnfSpvsComponent } from 'src/app/modules/mnf-spvs/mnf-spvs.component';
import { MnfTkComponent } from 'src/app/modules/mnf-tk/mnf-tk.component';
import { MnfSpvsFirstComponent } from 'src/app/modules/mnf-spvs-first/mnf-spvs-first.component';
import { MnfSpvsSecondComponent } from 'src/app/modules/mnf-spvs-second/mnf-spvs-second.component';
import { MnfSpvsThirdComponent } from 'src/app/modules/mnf-spvs-third/mnf-spvs-third.component';
import { MnfSpvsFourthComponent } from 'src/app/modules/mnf-spvs-fourth/mnf-spvs-fourth.component';
import { MnfSpvsFifthComponent } from 'src/app/modules/mnf-spvs-fifth/mnf-spvs-fifth.component';
import { MnfSpvsSixthComponent } from 'src/app/modules/mnf-spvs-sixth/mnf-spvs-sixth.component';
import { MnfSpvsSeventhComponent } from 'src/app/modules/mnf-spvs-seventh/mnf-spvs-seventh.component';
import { MnfSpvsEighthComponent } from 'src/app/modules/mnf-spvs-eighth/mnf-spvs-eighth.component';
import { MnfSpvsNinthComponent } from 'src/app/modules/mnf-spvs-ninth/mnf-spvs-ninth.component';
import { MnfSpvsTenthComponent } from 'src/app/modules/mnf-spvs-tenth/mnf-spvs-tenth.component';
import { MnfSpvsEleventhComponent } from 'src/app/modules/mnf-spvs-eleventh/mnf-spvs-eleventh.component';
import { MnfSpvsTwelfthComponent } from 'src/app/modules/mnf-spvs-twelfth/mnf-spvs-twelfth.component';
import { MnfTkFristComponent } from 'src/app/modules/mnf-tk-frist/mnf-tk-frist.component';
import { MnfTkSecondComponent } from 'src/app/modules/mnf-tk-second/mnf-tk-second.component';
import { MnfTkThirdComponent } from 'src/app/modules/mnf-tk-third/mnf-tk-third.component';
import { MnfTkFourthComponent } from 'src/app/modules/mnf-tk-fourth/mnf-tk-fourth.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { AboutPersonnelComponent } from 'src/app/modules/about-personnel/about-personnel.component';
import { SummaryReportUserComponent } from 'src/app/modules/summary-report-user/summary-report-user.component';
import { NewsDetailComponent } from 'src/app/modules/news-detail/news-detail.component';
import { ConfirmDialogComponent } from 'src/app/modules/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogLogoutComponent } from 'src/app/modules/confirm-dialog-logout/confirm-dialog-logout.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    AboutComponent,
    ManageNewsComponent,
    ManagePersonnelComponent,
    ManageSchoolComponent,
    ManageSummaryReportComponent,
    ManageWorkGroupComponent,
    ManageUsersComponent,
    LoginComponent,
    NewsComponent,
    PersonneldataComponent,
    SchoolComponent,
    WorkgroupComponent,
    AgregarAdduserComponent,
    AgregarAddpersonnelComponent,
    DetailPersonnelComponent,
    ManageSchoolEditComponent,
    ManageSchoolViewComponent,
    ManageWorkGroupOneComponent,
    ManageWorkGroupTwoComponent,
    AgregarAddschoolComponent,
    DetailSchoolComponent,
    AgregarNewsComponent,
    DetailNewsComponent,
    HomepageAdminComponent,
    ManageFormsComponent,
    MnfFirstComponent,
    MnfSpvsComponent,
    MnfTkComponent,
    MnfSpvsFirstComponent,
    MnfSpvsSecondComponent,
    MnfSpvsThirdComponent,
    MnfSpvsFourthComponent,
    MnfSpvsFifthComponent,
    MnfSpvsSixthComponent,
    MnfSpvsSeventhComponent,
    MnfSpvsEighthComponent,
    MnfSpvsNinthComponent,
    MnfSpvsTenthComponent,
    MnfSpvsEleventhComponent,
    MnfSpvsTwelfthComponent,
    MnfTkFristComponent,
    MnfTkSecondComponent,
    MnfTkThirdComponent,
    MnfTkFourthComponent,
    AboutPersonnelComponent,
    SummaryReportUserComponent,
    NewsDetailComponent,
    ConfirmDialogComponent,
    ConfirmDialogLogoutComponent

   
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatSortModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
    MatMenuModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTabsModule,
    MatBottomSheetModule
  ],
  
  entryComponents: [ManageUsersComponent]
})
export class DefaultModule { }
