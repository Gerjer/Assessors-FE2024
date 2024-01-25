import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ComponentEventDispatcherService } from 'src/app/common/services';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ComponentEventDispatcherService]
})
export class IndexComponent implements OnInit {

  constructor(private ceds: ComponentEventDispatcherService) { }

  ngOnInit(): void {
  }

}
