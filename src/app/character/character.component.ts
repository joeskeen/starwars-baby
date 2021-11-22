import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService, ICharacter } from '../content/content.service';

import SwiperCore, { Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  characterId: string | undefined;
  character: ICharacter | undefined;
  videos: SafeResourceUrl[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private content: ContentService,
    private sanitizer: DomSanitizer
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.characterId = params.get('id')!;
      this.loadCharacter();
    });
  }

  async loadCharacter() {
    const content = await this.content.content;
    this.character = content.characters.find(
      (c) => c.name === this.characterId
    );
    this.videos = (this.character?.videos || [])
      .map(
        (v) =>
          `https://www.youtube.com/embed/${v}?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://localhost:4200`
      )
      .map((v) => this.sanitizer.bypassSecurityTrustResourceUrl(v));
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
