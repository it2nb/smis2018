import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports:[
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  exports:[
    AlertModule,
    BsDropdownModule
  ]
})
export class NgxBootstrapModule { }
