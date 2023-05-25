import { Injectable } from '@angular/core';
import {TeaItemType} from "../types/tea-item.type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrderFormDataType} from "../types/order-form-data.type";
import {OrderResponseType} from "../types/order-response.type";

@Injectable()
export class TeaItemService {
  constructor(
    private http: HttpClient,
  ) { }

  public getTeaItems(): Observable<TeaItemType[]> {
    return this.http.get<TeaItemType[]>('https://testologia.site/tea');
  }

  public getTeaItem(id: number): Observable<TeaItemType> {
    return this.http.get<TeaItemType>('https://testologia.site/tea', {params: {id: id.toString()}});
  }

  public orderTeaItem(orderFormData: OrderFormDataType): Observable<OrderResponseType> {
    return this.http.post<OrderResponseType>('https://testologia.site/order-tea', orderFormData);
  }
}
