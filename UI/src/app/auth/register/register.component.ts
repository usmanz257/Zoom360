import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RouterModule, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { StorageService } from 'src/app/services/storage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyHelper } from 'src/app/utils/myHelper';
import { MustMatch } from 'src/app/utils/must-match.validator';
import { SignUpModel } from 'src/app/models/common/SignupModel.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public serverValidationErrors: any = {};
  public env = environment;
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  isAlert = false;
  public myHelper: MyHelper;

  constructor(
    private router: Router,
    private userService: UserService,
    private storageService: StorageService,
    private formBuilder: FormBuilder,
  ) {
    this.myHelper = new MyHelper();
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
     //  userName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
  //     confirmPassword: ['', Validators.required],
  //   } , {
  //     validator: MustMatch('password', 'confirmPassword')
   });
  }
  get registerFormControlles() { return this.registerForm.controls; }
  ngOnInit() {
  }

  register(userdata:SignUpModel) {
    debugger
    this.submitted = true;
    this.loading = true;
    userdata.userName = userdata.email
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.loading = false;
      return;
    }
    //let adminData: any;
    //adminData = this.myHelper.getFormsControlValues(this.registerFormControlles);
    //adminData = this.myHelper.getFormsControlValues(userdata);
    //userdata.roles[0] = this.env.adminRole;
    userdata["roles"] = ["Manager"] ;

    this.userService.adminRegister(userdata).subscribe(
      res => {
        debugger
        this.router.navigate(["/auth/login"]);
      },
      err => {
        debugger
        if(err.error){
          let errors = err.error.errors;
          for(let i = 0 ; i< errors.length ; i ++){
            this.serverValidationErrors[errors[i].param] = errors[i].msg;
            this.registerFormControlles[errors[i].param]['serverError'] =  errors[i].msg;
          }
          console.log(this.registerFormControlles);
        }
        console.log(err)
        this.isAlert = true;
        setTimeout(() => {
          this.isAlert = false;
        }, 5000)
        this.loading = false;
      }
    );;
  }

}
