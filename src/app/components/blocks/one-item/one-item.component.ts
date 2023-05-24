import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TeaItem} from "../../types/tea-item";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-one-item',
  templateUrl: './one-item.component.html',
  styleUrls: ['./one-item.component.scss']
})
export class OneItemComponent implements OnInit {
  public isEmptyPage: boolean = false;
  public teaItem: TeaItem = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    image: ''
  }
  constructor(
    private router: Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params['id'];
      if (id) {
        this.http.get<TeaItem>('https://testologia.site/tea', {params: {id: id}})
          .subscribe({
            next: (teaItem) => {
              this.teaItem = teaItem;
            },
            error: (err) => {
              console.log(err);
              this.isEmptyPage = true;
            }
          });
      } else {
        this.router.navigate(['/catalog']);
      }
    });
  }
}
