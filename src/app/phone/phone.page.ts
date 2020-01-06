import { Component, OnInit } from '@angular/core';
import Data from '../../assets/phone-data.json';

@Component({
  selector: 'app-list',
  templateUrl: 'phone.page.html',
  styleUrls: ['phone.page.scss']
})
export class PhonePage implements OnInit {
  items: IData[];
  segment = 'all';

  ngOnInit() {
    this.items = Data;
  }
}

interface IData {
  id: number;
  name: string;
  city: string;
  state: string;
  date: string;
  missed: boolean;
  missed_amount: number;
}
