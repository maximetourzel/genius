import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BestScoreManager } from './app.storage.service';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { GameComponent } from './game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared-modules/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    BestScoreManager
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
