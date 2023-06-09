import {Component, OnDestroy, OnInit} from '@angular/core';
import {TeaItemType} from "../../../../types/tea-item.type";
import {TeaItemService} from "../../../../core/services/tea-item.service";
import {finalize, Subscription} from "rxjs";
import {SearchItemsService} from "../../../../core/services/search-items.service";

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit, OnDestroy {
  public teaItems: TeaItemType[] = [];
  public isEmptyPage: boolean = false;
  public isErrorPage: boolean = false;
  public loading: boolean = false;
  private searchSubscription: Subscription | null = null;

  constructor(
    private teaItemService: TeaItemService,
    private searchItemsService: SearchItemsService,
  ) {
  }

  ngOnInit(): void {
    const searchItemName = this.searchItemsService.searchItemName;
    if (searchItemName === '') {
      this.fetchDefaultCatalogue();
    } else {
      this.fetchSearchResults(searchItemName);
    }
    this.subscribeOnSearch();
  }

  ngOnDestroy(): void {
    this.searchSubscription?.unsubscribe();
  }

  private subscribeOnSearch() {
    this.searchSubscription = this.searchItemsService.search$.subscribe({
      next: (search) => {
        if (search === '') {
          this.fetchDefaultCatalogue();
          return;
        }
        this.fetchSearchResults(search);
      }
    });
  }

  private fetchDefaultCatalogue() {
    this.loading = true
    this.teaItemService.getTeaItems()
      .pipe(
        finalize(() => {
          this.loading = false;
          this.checkEmptyPage();
        })
      )
      .subscribe({
        next: (teaItems) => {
          this.teaItems = teaItems;
        },
        error: (err) => {
          console.error(err);
          this.isErrorPage = true;
        }
      });
  }

  public fetchSearchResults(search: string): void {
    this.loading = true;
    this.teaItemService.getTeaItems(search)
      .pipe(
        finalize(() => {
          this.loading = false;
          this.checkEmptyPage();
        })
      )
      .subscribe({
        next: (teaItems) => {
          this.teaItems = teaItems;
        },
        error: (err) => {
          console.error(err);
          this.isErrorPage = true;
        }
      });
  }

  private checkEmptyPage(): void {
    this.isEmptyPage = this.teaItems.length === 0;
  }
}
