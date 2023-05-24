import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TeaItem} from "../../types/tea-item";
import {TeaItemService} from "../../../services/tea-item.service";

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {
  public teaItems: TeaItem[] = [];
  public isEmptyPage: boolean = false;

  constructor(
    private teaItemService: TeaItemService,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.teaItemService.getTeaItems()
      .subscribe({
        next: (teaItems) => {
          this.teaItems = teaItems;
        },
        error: (err) => {
          console.log(err);
          this.isEmptyPage = true;
        }
      });
  }
}
