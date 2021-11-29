import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { ContentService } from './content/content.service';
import { MenuComponent } from './menu/menu.component';
import { SwiperModule } from 'swiper/angular';
import { CashmereModule } from './cashmere.module';

@NgModule({
  declarations: [AppComponent, CharacterComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SwiperModule, CashmereModule],
  providers: [ContentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
