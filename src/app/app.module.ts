import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { SearchPageComponent } from './search-page/search-page.component';
import { HomeComponent } from './home/home.component';
import { SearchBoxComponent } from './components/search-box.component';
import { CardListComponent } from './components/card-list.component';
import { CardComponent } from './components/card.component';
import { AppStore } from './store/app.store';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    HomeComponent,
    SearchBoxComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [
    AppStore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
