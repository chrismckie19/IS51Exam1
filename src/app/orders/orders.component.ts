import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlexModalService } from '../shared-components/flex-modal/flex-modal.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {

  orders: Array<any> = [];
  name: string = '';
  errorMessage = '';

  constructor(
    private router: Router,
    private flexModal: FlexModalService,
    private http: Http
  ) {
  }

  async ngOnInit() {
    this.loadSavedItems();
  }

  loadSavedItems(){
    this.orders = [{
      'pid': '1',
      'image':'assets/sm_android.jpeg',
      'description': 'Android',
      'price': 150.00,
      'quantity': 2
    }, {
      'pid': '2',
      'image':'assets/sm_iphone.jpeg',
      'description': 'IPhone',
      'price': 200.00,
      'quantity': 1
    }, {
      'pid': '3',
      'image':'assets/sm_windows.jpeg',
      'description': 'Windows Phone',
      'price': 110.00,
      'quantity': 2
    }];
  }

  delete(index: number) {
    this.orders.splice(index, 1);
  }

  addItem(item: string) {
    switch(item) {
      case 'Android':
        this.orders.unshift({
          'pid': '1',
          'image':'assets/sm_android.jpeg',
          'description': 'Android',
          'price': 150.00,
          'quantity': 1
        });
        break;

      case 'Iphone':
        this.orders.unshift({
          'pid': '2',
          'image':'assets/sm_iphone.jpeg',
          'description': 'IPhone',
          'price': 200.00,
          'quantity': 1
        });
        break;
          
      case 'Windows Phone':
        this.orders.unshift({
          'pid': '3',
          'image':'assets/sm_windows.jpeg',
          'description': 'Windows Phone',
          'price': 110.00,
          'quantity': 1
        });
        break;
    }
  }
  submit() {
    const commaIndex = this.name.indexOf(', ');
    
    let error = false;
    
    if (this.name === '') {
      this.errorMessage = 'Name must not be empty!';
      error = true;
    }
    else if(commaIndex === -1) {
      this.errorMessage = 'Name must have a comma!';
      error = true;
    }
    if (!error) {
      const firstName = this.name.slice(commaIndex + 1, this.name.length);
      const lastName = this.name.slice(0, commaIndex);
      const fullName = firstName + ' ' + lastName;
    }
    else {
      this.flexModal.openDialog('error-modal');
    }
  }
    


}

