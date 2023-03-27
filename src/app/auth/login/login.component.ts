import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/core/auth/account.service';
import { Account } from 'src/app/core/models/account.model';
import { ToastrService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: 'png-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{
  submitted = false;
  editForm = this.fb.group({
    password: ['', Validators.required],
    username: ['', Validators.required],
  });
  loading = false;
  returnUrl="/dashboard";
  constructor(
    private router:Router,
    private fb:UntypedFormBuilder,
    private accountService:AccountService,
    private toarst:ToastrService
     ){}
  ngOnInit(): void {
     localStorage.clear();
  }


     get f(): any {
      return this.editForm?.controls;
    }

    save(): void {
      this.submitted = true;
      if (this.editForm.invalid) {
        return;
      }
      this.loading = true;
      const { username, password } = this.editForm.value;
  
      this.accountService
        .login({ username, password ,grantType:'password'})
        
        .subscribe({
          next: (res:any) => {
            if (!res) {
              this.toarst.showError('Une erreur c est producte');
              return;
            } else {
              localStorage.setItem("token",res.accessToken)
                this.accountService.identity(true).subscribe({
                  next: (account: Account | null) => {
                    if (account) {
                      this.router.navigate([this.returnUrl]).then(() => {
                        this.loading = false;
                        this.toarst.showSuccess('login.notification.success');
                      });
                    } else {
                      this.loading = false;
                      this.toarst.showError('login.notification.error');
                    }
                  },
                });
            //  }
            }
          },
          error: (err: { message: string; status: number }) => {
            this.loading = false;
            if(err.message){
              this.toarst.showError(err.message);
            }else{
              this.toarst.showError('login.notification.error');
  
            }
           
          },
        });
    }
}
