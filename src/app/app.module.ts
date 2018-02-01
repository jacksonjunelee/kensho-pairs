import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { KenshoPairsComponents } from './components/index';

// services
import { KenshoPairsService } from './services/kensho-pairs.service';

// imports
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    KenshoPairsComponents
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    Angular2FontawesomeModule
  ],
  providers: [KenshoPairsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
