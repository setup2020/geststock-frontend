import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'png-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    let $slimScrolls = $('.slimscroll');
    if ($slimScrolls.length > 0) {
      $slimScrolls.slimScroll(
        {
          height: 'auto', width: '100%',
          position: 'right', size: '7px',
          color: '#ccc',
          wheelStep: 10,
          touchScrollStep: 100
        }
      );
      var wHeight = $(window).height() - 60;
      $slimScrolls.height(wHeight); $('.sidebar .slimScrollDiv').height(wHeight);

      $(window).resize(function () {
        var rHeight = $(window).height() - 60;
        $slimScrolls.height(rHeight); $('.sidebar .slimScrollDiv').height(rHeight);
      });
    }


    this.init();
  }

  init(): void {

    let menu = $('#sidebar-menu a');
    $('#sidebar-menu a').on('click', (e: Event) => {
     
      if ($(e.target).parent().hasClass('submenu')) {
        e.preventDefault();
      }
      if (!$(e.target).hasClass('subdrop')) {
        $('ul', $(e.target).parents('ul:first')).slideUp(250);
        $('a', $(e.target).parents('ul:first')).removeClass('subdrop');
        $(e.target).next('ul').slideDown(350); $(e.target).addClass('subdrop');

      } else if ($(e.target).hasClass('subdrop')) {
        $(e.target).removeClass('subdrop');
        $(e.target).addClass('active');
        $(e.target).next('ul').slideUp(350);
      }
    });
     $('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
  }
}
