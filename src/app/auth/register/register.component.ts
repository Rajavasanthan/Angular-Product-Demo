import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../user.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: this.fb.control("", [Validators.required]),
      email: this.fb.control("", [Validators.email, Validators.required]),
      password: this.fb.control("", [Validators.required]),
    });
  }

  registerUser() {
    if (this.registerForm.valid) {
      this.userService.registerUser(this.registerForm.value).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        }
      );
    }
  }
}
