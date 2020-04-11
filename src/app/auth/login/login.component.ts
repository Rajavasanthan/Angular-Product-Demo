import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../user.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,private userService:UserService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control("", [Validators.required, Validators.email]),
      password: this.fb.control("", Validators.required),
    });
  }

  userLogin() {
    if (this.loginForm.valid) {
      this.userService.loginUser(this.loginForm.value).subscribe((tokenData) => {
        console.log(tokenData)
        window.localStorage.setItem('blog_key',tokenData.token);
      },(err) => {
        console.log(err);
      })
    }
  }
}
