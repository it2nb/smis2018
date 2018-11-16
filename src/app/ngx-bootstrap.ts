import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  imports:[
    AlertModule.forRoot(),
  ],
  exports:[
    AlertModule,
  ]
})
export class NgxBootstrapModule { }
