import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';
import { DescTodosPipe } from './desc-todos.pipe';
import { FilterTodosPipe } from './filter-todos.pipe';
import { ApiService } from './api.service';
import { NotifyService } from './notify.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ItemComponent,
    DescTodosPipe,
    FilterTodosPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    NotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
