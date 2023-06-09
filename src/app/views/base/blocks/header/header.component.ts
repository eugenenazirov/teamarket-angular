import { Component } from '@angular/core';
import {SearchItemsService} from "../../../../core/services/search-items.service";
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public searchBarControl = new FormControl('');
  constructor(
    private searchItemsService: SearchItemsService,
    private router: Router
    ) {
  }

  public clearSearchItem(): void {
    this.searchItemsService.searchItemName = '';
  }

  public onSubmit(): void {
    if (this.router.url !== '/catalog') {
      this.router.navigate(['/catalog']);
    }

    let search: string | null = this.searchBarControl.value;
    if (!search) {
      this.searchItemsService.clearSearch();
      return;
    }

    this.searchItemsService.submitSearch(search);
  }
}
