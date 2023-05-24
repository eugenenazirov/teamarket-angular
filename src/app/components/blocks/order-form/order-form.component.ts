import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  public itemTitle: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    const itemTitle = this.activatedRoute.snapshot.queryParams['item'];

    if (itemTitle) {
      this.itemTitle = itemTitle;
    } else {
      this.router.navigate(['/catalog']);
    }
  }
}
