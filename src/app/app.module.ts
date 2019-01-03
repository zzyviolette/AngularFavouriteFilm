import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { FavorisComponent } from './page/favoris/favoris.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { FilmDetailModalComponent } from './component/film-detail-modal/film-detail-modal.component';
import { NgxSmartModalModule} from 'ngx-smart-modal';
import { FilmListComponent } from './component/film-list/film-list.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FavorisComponent,
    NotFoundComponent,
    FilmDetailModalComponent,
    FilmListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiSwitchModule,
    NgxSmartModalModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
