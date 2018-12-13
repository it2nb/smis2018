import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports:[
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
  ],
  exports:[
    AlertModule,
    BsDropdownModule,
    ModalModule
  ]
})
export class NgxBootstrapModule { }
