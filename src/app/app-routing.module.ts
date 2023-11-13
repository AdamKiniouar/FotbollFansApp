import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TeamnewsComponent } from './teamnews/teamnews.component';
import { AikComponent } from './teamnews/Teams/aik/aik.component';
import { BrommapojkarnaComponent } from './teamnews/Teams/brommapojkarna/brommapojkarna.component';
import { DegerforsComponent } from './teamnews/Teams/degerfors/degerfors.component';
import { ElfsborgComponent } from './teamnews/Teams/elfsborg/elfsborg.component';
import { DjurgardenComponent } from './teamnews/Teams/djurgarden/djurgarden.component';
import { GoteborgComponent } from './teamnews/Teams/goteborg/goteborg.component';
import { HackenComponent } from './teamnews/Teams/hacken/hacken.component';
import { HalmstadComponent } from './teamnews/Teams/halmstad/halmstad.component';
import { HammarbyComponent } from './teamnews/Teams/hammarby/hammarby.component';
import { KalmarComponent } from './teamnews/Teams/kalmar/kalmar.component';
import { MalmoComponent } from './teamnews/Teams/malmo/malmo.component';
import { NorrkopingComponent } from './teamnews/Teams/norrkoping/norrkoping.component';
import { OrebroComponent } from './teamnews/Teams/orebro/orebro.component';
import { SiriusComponent } from './teamnews/Teams/sirius/sirius.component';
import { VarnamoComponent } from './teamnews/Teams/varnamo/varnamo.component';
import { VarbergComponent } from './teamnews/Teams/varberg/varberg.component';


const routes: Routes = [
  { path: '', component: TopheadingComponent }, // home
  { path: 'teamnews', component: TeamnewsComponent }, // path for TeamnewsComponent
  { path: 'aik', component: AikComponent }, // path for TeamnewsComponent
  { path: 'brommapojkarna', component: BrommapojkarnaComponent }, // path for TeamnewsComponent
  { path: 'degerfors', component: DegerforsComponent }, // path for TeamnewsComponent
  { path: 'djurgarden', component: DjurgardenComponent }, // path for TeamnewsComponent
  { path: 'elfsborg', component: ElfsborgComponent }, // path for TeamnewsComponent
  { path: 'goteborg', component: GoteborgComponent }, // path for TeamnewsComponent
  { path: 'hacken', component: HackenComponent }, // path for TeamnewsComponent
  { path: 'halmstad', component: HalmstadComponent }, // path for TeamnewsComponent
  { path: 'hammarby', component: HammarbyComponent }, // path for TeamnewsComponent
  { path: 'kalmar', component: KalmarComponent }, // path for TeamnewsComponent
  { path: 'malmo', component: MalmoComponent }, // path for TeamnewsComponent
  { path: 'norrkoping', component: NorrkopingComponent }, // path for TeamnewsComponent
  { path: 'orebro', component: OrebroComponent }, // path for TeamnewsComponent
  { path: 'varberg', component: VarbergComponent }, // path for TeamnewsComponent
  { path: 'sirius', component: SiriusComponent }, // path for TeamnewsComponent
  { path: 'varnamo', component: VarnamoComponent }, // path for TeamnewsComponent

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
