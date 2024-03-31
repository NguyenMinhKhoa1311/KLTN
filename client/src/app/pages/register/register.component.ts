import { Component } from '@angular/core';
import { TaigaModule } from '../../shared/taiga.module';
import { ShareModule } from '../../shared/shared.module';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.less'
})
export class RegisterComponent {

  constructor(private router: Router) { }

  readonly regisForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required]),
    ConfirmPassword: new FormControl('', [Validators.required]),
  });
  
  login(){
    this.router.navigate(['/login']);
  }

}
