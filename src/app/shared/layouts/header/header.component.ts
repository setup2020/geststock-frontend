import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/auth/account.service';
import { Account } from 'src/app/core/models/account.model';

@Component({
  selector: 'png-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements OnInit {
  account!: Account | null;

  constructor(private accountService:AccountService){}
  ngOnInit(): void {
  
    this.accountService.identity().subscribe(account=>{
      this.account=account;
      
    })
  }

 
}
