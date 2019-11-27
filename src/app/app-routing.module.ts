import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulaireComponent } from "./formulaire/formulaire.component";
import { GameComponent } from "./game/game.component";
import { EndComponent } from './end/end.component';


const routes: Routes = [
    { path: '', redirectTo: 'formulaire', pathMatch: 'full' },
    { path: 'formulaire', component: FormulaireComponent },
    { path: 'game', component: GameComponent },
    { path: 'end', component: EndComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }