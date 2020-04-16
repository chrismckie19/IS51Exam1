import { Component, OnInit } from '@angular/core';
import { FlexModalService } from './shared-components/flex-modal/flex-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'final';
  aboutText: string = 'This application is designed by Chris McKie. (C) 2018';
  constructor(private flexModal: FlexModalService) {

  }

  ngOnInit() {
  }

  showHelpText() {
    this.flexModal.openDialog('about-modal');
  }
  
}