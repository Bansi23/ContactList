import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  //contactForm: FormGroup;
  lstdata :any;
  contactData() {
    return   [
      { id: 1, name: 'Bansi Vasoya BB', age: 22, mono: 7521458716, email: 'bansi@gmail.com' },
      { id: 2, name: 'Banny Patel', age: 23, mono: 7021788716, email: 'Banny@gmail.com' },
      { id: 3, name: 'Shushma Tivari', age: 21, mono: 9521445716, email: 'Shushma@gmail.com' },
      { id: 4, name: 'Kiran Togadiya', age: 24, mono: 1234567890, email: 'Kiran@gmail.com' },
      { id: 5, name: 'Shashi Devani', age: 25, mono: 3258741036, email: 'Shashi@gmail.com' },
      { id: 6, name: 'Ashish Chaniara', age: 23, mono: 5478501245, email: 'Ashish@gmail.com' },
      { id: 7, name: 'Chirag Gohel', age: 23, mono: 5241789630, email: 'Chirag@gmail.com' },
      { id: 8, name: 'Virendra Maheta', age: 24, mono: 1475268542, email: 'Virendra@gmail.com' }
    ]
  }
  constructor() { }
}
