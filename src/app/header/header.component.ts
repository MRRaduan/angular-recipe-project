import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  @Output() pageRoute = new EventEmitter<string>();

  changeView(path: string) {
    this.pageRoute.emit(path);
  }

}
