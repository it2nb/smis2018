import { Component, OnInit, Input } from '@angular/core';
declare var jquery : any;
declare var $ : any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() loginMember: any;
  constructor() { 
    
  }

  ngOnInit() {
    $(document).ready(function(){
      $('[routerLink="/system"]').parent( 'li' ).addClass( 'active' );

      $( '.navbar-nav a' ).click(function () {
        $('.collapse').collapse('hide');
        console.log('close');
        $( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
        $( this ).parent( 'li' ).addClass( 'active' );
      });
    });
  }
}
