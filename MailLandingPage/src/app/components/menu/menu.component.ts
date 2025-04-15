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


  // selected0 = '' ;
  // selected1 = 'Inbox' ;
  // selected2 = 'sentitem';
  // selected3 = 'draft';
  // selected4 = 'deleted-items';



  // selectItem(item: string){
  //   this.selected0 =item;
  //   this.selected1 =item;
  //   this.selected2 =item;
  //   this.selected3 =item;
  //   this.selected4 =item;


  // }
  

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


