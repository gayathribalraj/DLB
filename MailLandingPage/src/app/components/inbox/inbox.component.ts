import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-inbox',
  imports: [MenuComponent],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.scss'
})
export class InboxComponent {

}
