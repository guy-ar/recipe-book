import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() private componenttoShow: String = "Recipes";
  onComponenetSelected(value: String) {
    this.componenttoShow = value;
  }

}