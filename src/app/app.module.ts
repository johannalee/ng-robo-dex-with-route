import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './store/reducers';
import { SearchPageComponent } from './search-page/search-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box.component';
import { CardListComponent } from './components/card-list.component';
import { CardComponent } from './components/card.component';
import { AppStore } from './store/app.store';
import { SearchStoreService } from './store/search/search.store.service';
import { RobotStoreService } from './store/robot/robot.store.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    HttpClientModule
  ],
  providers: [
    AppStore,
    RobotStoreService,
    SearchStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
