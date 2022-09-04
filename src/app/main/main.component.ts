import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  imagesArray:Card[] =[]
  selectedTab:string = 'images';
  @ViewChild('url') url!:ElementRef;
  @ViewChild('name') name!:ElementRef;

  ngOnInit(): void {

  }

  addImage(name:HTMLInputElement,url:HTMLInputElement) {

    this.imagesArray.push(new Card(name.value,url.value));
    name.value = ''
    url.value = ''
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

}
