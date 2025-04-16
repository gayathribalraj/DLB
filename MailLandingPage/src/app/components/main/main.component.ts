import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { HeaderInboxComponent } from '../header-inbox/header-inbox.component';
import { InboxComponent } from '../inbox/inbox.component';

@Component({
  selector: 'app-main',
  imports: [
    MenuComponent,
    HeaderInboxComponent,
    InboxComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
