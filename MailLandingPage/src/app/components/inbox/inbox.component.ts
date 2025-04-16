import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderInboxComponent } from '../header-inbox/header-inbox.component';

@Component({
  selector: 'app-inbox',
  imports: [
    CommonModule,
    HeaderInboxComponent

  ],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.scss'
})
export class InboxComponent {

  inboxValue=[
    {email:"pms@sysarcinformatix...", sub:"PMS - TimeSheet Reminder:In...",msg:"Hi, Karthick D"},
    {email:"pms@sysarcinformatix...", sub:"PMS - TimeSheet Reminder:In...",msg:"Hi, Karthick D"},
    {email:"pms@sysarcinformatix...", sub:"PMS - TimeSheet Reminder:In...",msg:"Hi, Karthick D"},
    {email:"pms@sysarcinformatix...", sub:"PMS - TimeSheet Reminder:In...",msg:"Hi, Karthick D"},
    {email:"pms@sysarcinformatix...", sub:"PMS - TimeSheet Reminder:In...",msg:"Hi, Karthick D"},
    {email:"pms@sysarcinformatix...", sub:"PMS - TimeSheet Reminder:In...",msg:"Hi, Karthick D"},
    {email:"pms@sysarcinformatix...", sub:"PMS - TimeSheet Reminder:In...",msg:"Hi, Karthick D"},
    {email:"pms@sysarcinformatix...", sub:"PMS - TimeSheet Reminder:In...",msg:"Hi, Karthick D"},
    {email:"pms@sysarcinformatix...", sub:"PMS - TimeSheet Reminder:In...",msg:"Hi, Karthick D"}

  ]

}
