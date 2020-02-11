import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  title:string = 'Account-Detail';
  account:Account;
  id:number;

  constructor(private accountSvc:AccountService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    //get account id from the url called by the service 
    //to populate account properties
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.accountSvc.get(this.id).subscribe(jr =>{
      this.account= jr.data as Account
    });
  }

  delete() {
    this.accountSvc.delete(this.id).subscribe(jr => {
      console.log("account delete jr:",jr);
      // Sean owes fix here to jr.  we will assume delete was successful
      if (jr.errors != null) {
        console.log("Error deleting account: "+jr.errors);
      }
      this.router.navigateByUrl("account/list");
    });
  }

}
