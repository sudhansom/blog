import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogCreateComponent } from './components/blog-create/blog-create.component';
import { BlogEditComponent } from './components/blog-edit/blog-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogDetailComponent,
    BlogCreateComponent,
    BlogEditComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
