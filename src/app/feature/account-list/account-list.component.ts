import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/model/account.class'
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts: Account[];
  title: string = 'Account-list'

  constructor(private accountSvc: AccountService) { }

  ngOnInit() {
    //populate accounts
    this.accountSvc.list().subscribe(
      jr => {
        this.accounts = jr.data as Account[];
        console.log(this.accounts); 
      }
    );
  }

}
