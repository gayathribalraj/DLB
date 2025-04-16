import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {


  constructor(public router: Router) {

  }

  selectItem1(){

   this.router.navigateByUrl('inbox')
  }
  selectItem2(){

    this.router.navigateByUrl('sent-item')
   }
   selectItem3(){

    this.router.navigateByUrl('draft')
   }
   selectItem4(){

    this.router.navigateByUrl('deleted-items')
   }




}


