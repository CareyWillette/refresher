import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { InitialScreenComponent } from "./initial-screen/initial-screen.component";
import { SignUpComponent } from "./auth/sign-up/sign-up.component";
import { LoginComponent } from "./auth/login/login.component";
import { TrainingComponent } from "./training/training.component";

const routes: Routes = [
  { path: '', component: InitialScreenComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'training', component: TrainingComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}