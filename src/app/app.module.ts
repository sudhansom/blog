import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogCreateComponent } from './components/blog-create/blog-create.component';
import { BlogEditComponent } from './components/blog-edit/blog-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CanDeactivateGuard } from './components/blog-create/can-deactivate-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: BlogListComponent,
  },
  {
    path: 'create',
    canActivate: [AuthGuard],
    canDeactivate: [CanDeactivateGuard],
    component: BlogCreateComponent,
  },
  {
    path: 'create/:id',
    canActivate: [AuthGuard],
    canDeactivate: [CanDeactivateGuard],
    component: BlogCreateComponent,
  },
  {
    path: 'detail/:id',
    canActivate: [AuthGuard],
    component: BlogDetailComponent,
  },
  {
    path: 'edit',
    component: BlogEditComponent,
    canDeactivate: [CanDeactivateGuard],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogDetailComponent,
    BlogCreateComponent,
    BlogEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [AuthGuard, AuthService, CanDeactivateGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
