import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { DetailsComponent } from './components/details/details.component';
import { NgModule } from '@angular/core';
import { SentItemComponent } from './components/sent-item/sent-item.component';
import { DraftsComponent } from './components/drafts/drafts.component';
import { DeletedItemsComponent } from './components/deleted-items/deleted-items.component';
export const routes: Routes = [

    {
        path:'',
        redirectTo:'inbox',
        pathMatch:'full'
    },
    {
        path:'menu',
        component:MenuComponent
    },
    {
        path:'inbox',
        component:InboxComponent
    },
    {
        path:'details',
        component:DetailsComponent
    },
    {
        path:'sent-item',
        component:SentItemComponent
    },
    {
        path:'draft',
        component:DraftsComponent
    },
    {
        path:'deleted-items',
        component:DeletedItemsComponent
    },
    

];

NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
