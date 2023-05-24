import { Injectable } from '@angular/core';
import {TeaItem} from "../components/types/tea-item";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class TeaItemService {
  constructor(
    private http: HttpClient,
  ) { }

  public getTeaItems(): Observable<TeaItem[]> {
    return this.http.get<TeaItem[]>('https://testologia.site/tea');
  }

  public getTeaItem(id: number): Observable<TeaItem> {
    return this.http.get<TeaItem>('https://testologia.site/tea', {params: {id: id.toString()}});
  }
}
