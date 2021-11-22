import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'character/:id', component: CharacterComponent },
  { path: '', pathMatch: 'full', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
