import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { KenshoPairsComponents } from './components/index';

// services
import { KenshoPairsService } from './services/kensho-pairs.service';

@NgModule({
  declarations: [
    AppComponent,
    KenshoPairsComponents
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [KenshoPairsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
