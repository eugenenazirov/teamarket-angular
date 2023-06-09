import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  public sliderInterval: number = 3000;
  public pauseOnHover: boolean = false;
  public pauseOnFocus: boolean = true;
}
