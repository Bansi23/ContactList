import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../service/common.service';
import { AddChangeContactComponent } from '../add-change-contact/add-change-contact.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  lstContact = [];
  selected: any;
  NoSelected: any;
  @ViewChild(AddChangeContactComponent) private resetForm: AddChangeContactComponent;


  onSelect(selected): void {
    this.selected = selected;
    console.log('row', selected);
  }

  addRecord() {
    this.selected = "";
    this.resetForm.contactForm.reset();
  }

  constructor(private _cS: CommonService) { }

  ngOnInit() {
    this.lstContact = this._cS.contactData();
    this.lstContact.map(x => {
      x.short = x.name
      var spaceCount = (x.short.split(" ").length - 1);
      if (spaceCount == 1) {
        var matches = x.short.match(/\b(\w)/g); //["A"], ["B"]
        x.short = matches.join('');
      }
      else if (spaceCount >= 2) {
        let index = x.short.indexOf(" ");
        let abc = x.short.charAt(index + 1);
        x.short = x.short[0] + abc;
      }
      else {
        let abc = x.short = x.short[0] + "" + x.short[1];
        x.short = abc.trim();
      }
    });
  }
}










