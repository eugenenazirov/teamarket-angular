import { Injectable } from '@angular/core';
import {TeaItemType} from "../types/tea-item.type";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {OrderFormDataType} from "../types/order-form-data.type";
import {OrderResponseType} from "../types/order-response.type";

@Injectable()
export class TeaItemService {
  constructor(
    private http: HttpClient,
  ) { }

  public getTeaItems(search?: string): Observable<TeaItemType[]> {
    if (search) {
      return this.http.get<TeaItemType[]>('https://testologia.site/tea', {params: {search: search}})
        .pipe(
          map(this.checkResponseTypeAndReturnArray),
        );
    }

    return this.http.get<TeaItemType[]>('https://testologia.site/tea');
  }

  public getTeaItem(id: number): Observable<TeaItemType> {
    return this.http.get<TeaItemType>('https://testologia.site/tea', {params: {id: id.toString()}});
  }

  public orderTeaItem(orderFormData: OrderFormDataType): Observable<OrderResponseType> {
    return this.http.post<OrderResponseType>('https://testologia.sites/order-tea', orderFormData);
  }

  public checkResponseTypeAndReturnArray(teaItem: TeaItemType[]): TeaItemType[] {
      if (Array.isArray(teaItem)) {
        return teaItem
      } else if (typeof teaItem === 'object' && Object.keys(teaItem).length === 1) {
        const indexKey = Object.keys(teaItem)[0];
        return [teaItem[indexKey]];
      } else {
        throw new Error('Invalid response format');
      }
    }
}
