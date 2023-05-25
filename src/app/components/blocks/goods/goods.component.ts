import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TeaItemType} from "../../../types/tea-item.type";
import {TeaItemService} from "../../../services/tea-item.service";

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {
  public teaItems: TeaItemType[] = [];
  public isEmptyPage: boolean = false;

  constructor(
    private teaItemService: TeaItemService,
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
