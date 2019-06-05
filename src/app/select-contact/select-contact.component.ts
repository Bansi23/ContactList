import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-select-contact',
  templateUrl: './select-contact.component.html',
  styleUrls: ['./select-contact.component.css']
})
export class SelectContactComponent implements OnInit {
  @Input() selected;
  NoSelected = "No Selected";

  constructor() { }

  ngOnInit() {
    this.selected = "";
  }

}
