import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-add-change-contact',
  templateUrl: './add-change-contact.component.html',
  styleUrls: ['./add-change-contact.component.css']
})
export class AddChangeContactComponent implements OnInit {

  @Input()

  private _selected;
  get selected() {
    return this._selected;
  }

  @Input()
  set selected(val) {
    console.log('val', val)
    this._selected = val;
    this.getRec(val);
  }

  @Input() lstContact;

  NoSelected = "No Selected";
  clicked = false;
  contactForm: FormGroup;

  fbContact() {
    this.contactForm = this.contactForm;
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      mono: ['', Validators.required],
    });
  }
  addRecord() {
    for (let val in this.contactForm.controls) {
      this.contactForm.controls[val].markAsTouched();
    };
    if (this.contactForm.valid) {
      let StudentForm = this.contactForm.value;
      const index = this.lstContact.findIndex(x => x.id == StudentForm.id);
      if (index > -1) {
        this.lstContact.splice(index, 1, StudentForm);
      } else {
        StudentForm.id = (new Date()).getTime();
        this.lstContact.push(StudentForm);
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
      this.contactForm.reset();
    }
  }
  editIndex: any;

  getRec(row) {
    if (row) {
      this.contactForm.patchValue({
        name: row.name ? row.name : null,
        email: row.email ? row.email : null,
        mono: row.mono ? row.mono : null,
      });
    }
  }

  editRec(row) {
    if (this.contactForm.valid) {
      let body = {
        id: row.id,
        name: row.name = this.contactForm.value.name,
        email: row.email = this.contactForm.value.email,
        mono: row.mono = this.contactForm.value.mono,
      };
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
        else if (spaceCount == 0) {
          let abc = x.short = x.short[0] + "" + x.short[1];
          x.short = abc.trim();
        }
      });
    }
  }

  deleteRec(index) {
    if (confirm(" Are you sure you want to delete this record?")) {
      const _index: number = this.lstContact.indexOf(index);
      this.lstContact.splice(_index, 1);
      this.selected = "";
    }
    this.contactForm.reset();
  }
  constructor(private fb: FormBuilder, private _cS: CommonService) { }
  ngOnInit() {
    this.fbContact();
  }

}
