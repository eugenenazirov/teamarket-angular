import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TeaItem} from "./types/tea-item";

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {
  teaItems: TeaItem[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<TeaItem[]>('https://testologia.site/tea')
      .subscribe((teaItems) => {
        this.teaItems = teaItems;
      });
  }
}
