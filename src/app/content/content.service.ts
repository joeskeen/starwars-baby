import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private _content: IContent | undefined;
  get content(): Promise<IContent> {
    if (this._content) {
      return Promise.resolve(this._content);
    }
    return this.load();
  }

  constructor(private http: HttpClient) {}

  async load() {
    const content = await firstValueFrom(
      this.http.get<IContent>('assets/content.json')
    );
    this._content = content;
    return content;
  }
}

export interface IContent {
  characters: ICharacter[];
}

export interface ICharacter {
  name: string;
  profile: string;
  pictures: string[];
  videos?: string[];
}
