import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  declarations: [LoginComponent, SignUpComponent],
  exports: [LoginComponent, SignUpComponent],
})
export class AuthModule {}
