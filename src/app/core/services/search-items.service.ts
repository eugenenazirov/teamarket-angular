import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class SearchItemsService {
  public searchItemName: string = '';
  public search$: Subject<string> = new Subject<string>();
  constructor() { }

  public submitSearch(search: string): void {
    this.searchItemName = search;
    this.search$.next(search);
  }

  public clearSearch(): void {
    this.searchItemName = ''
    this.search$.next('');
  }
}
