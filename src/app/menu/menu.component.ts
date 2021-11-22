import { Component, OnInit } from '@angular/core';
import { ContentService, IContent } from '../content/content.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  title = 'Star Wars';
  content: IContent | undefined;

  constructor(private contentService: ContentService) {}

  async ngOnInit() {
    this.content = await this.contentService.content;
  }
}
