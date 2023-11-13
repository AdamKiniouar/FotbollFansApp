import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';

import { HttpClientModule } from '@angular/common/http';
import { NewsapiservicesService } from './service/newsapiservices.service';
import { TeamnewsComponent } from './teamnews/teamnews.component';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { AikComponent } from './teamnews/Teams/aik/aik.component';
import { HackenComponent } from './teamnews/Teams/hacken/hacken.component';
import { DegerforsComponent } from './teamnews/Teams/degerfors/degerfors.component';
import { DjurgardenComponent } from './teamnews/Teams/djurgarden/djurgarden.component';
import { HammarbyComponent } from './teamnews/Teams/hammarby/hammarby.component';
import { HalmstadComponent } from './teamnews/Teams/halmstad/halmstad.component';
import { BrommapojkarnaComponent } from './teamnews/Teams/brommapojkarna/brommapojkarna.component';
import { ElfsborgComponent } from './teamnews/Teams/elfsborg/elfsborg.component';
import { GoteborgComponent } from './teamnews/Teams/goteborg/goteborg.component';
import { NorrkopingComponent } from './teamnews/Teams/norrkoping/norrkoping.component';
import { VarnamoComponent } from './teamnews/Teams/varnamo/varnamo.component';
import { SiriusComponent } from './teamnews/Teams/sirius/sirius.component';
import { KalmarComponent } from './teamnews/Teams/kalmar/kalmar.component';
import { MalmoComponent } from './teamnews/Teams/malmo/malmo.component';
import { OrebroComponent } from './teamnews/Teams/orebro/orebro.component';
import { VarbergComponent } from './teamnews/Teams/varberg/varberg.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TeamnewsComponent,
    AikComponent,
    HackenComponent,
    DegerforsComponent,
    DjurgardenComponent,
    HammarbyComponent,
    HalmstadComponent,
    BrommapojkarnaComponent,
    ElfsborgComponent,
    GoteborgComponent,
    NorrkopingComponent,
    VarnamoComponent,
    SiriusComponent,
    KalmarComponent,
    MalmoComponent,
    OrebroComponent,
    VarbergComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
