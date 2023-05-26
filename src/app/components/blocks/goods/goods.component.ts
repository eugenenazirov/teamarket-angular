import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TeaItemType} from "../../../types/tea-item.type";
import {TeaItemService} from "../../../services/tea-item.service";
import {finalize, tap} from "rxjs";

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {
  public teaItems: TeaItemType[] = [];
  public isEmptyPage: boolean = false;
  public loading: boolean = false;

  constructor(
    private teaItemService: TeaItemService,
  ) {
  }

  ngOnInit(): void {
    this.loading = true
    this.teaItemService.getTeaItems()
      .pipe(
        finalize(() => this.loading = false)
      )
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
