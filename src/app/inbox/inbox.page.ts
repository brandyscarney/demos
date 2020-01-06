import { Component, OnInit } from '@angular/core';
import Data from '../../assets/inbox-data.json';

@Component({
  selector: 'app-inbox',
  templateUrl: 'inbox.page.html',
  styleUrls: ['inbox.page.scss'],
})
export class InboxPage implements OnInit {
  items: IData[];

  constructor() { }

  ngOnInit() {
    console.log('Reading local json files');
    console.log(Data);
    this.items = Data;
  }

}

interface IData {
  id: number;
  date: string;
  time: string;
  company_name: string;
  title: string;
  content: string;
  read: boolean;
}
