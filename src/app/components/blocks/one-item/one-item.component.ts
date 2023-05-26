import {Component, OnInit} from '@angular/core';
import {TeaItemType} from "../../../types/tea-item.type";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {TeaItemService} from "../../../services/tea-item.service";

@Component({
  selector: 'app-one-item',
  templateUrl: './one-item.component.html',
  styleUrls: ['./one-item.component.scss']
})
export class OneItemComponent implements OnInit {
  public isEmptyPage: boolean = false;
  public teaItem: TeaItemType = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    image: ''
  }
  constructor(
    private teaItemService: TeaItemService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.showTeaItem();
  }

  private showTeaItem(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params['id'];
      if (id) {
        this.teaItemService.getTeaItem(id)
          .subscribe({
            next: (teaItem) => {
              this.teaItem = teaItem;
            },
            error: (err) => {
              console.error(err);
              this.isEmptyPage = true;
            }
          });
      } else {
        this.router.navigate(['/catalog']);
      }
    });
  }

  public buyItem(): void {
    this.router.navigate(['/order'], {queryParams: {item: this.teaItem.title}});
  }
}
