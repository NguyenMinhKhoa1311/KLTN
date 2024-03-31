import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import {tuiInputDateOptionsProvider} from '@taiga-ui/kit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [TaigaModule,ShareModule],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.less',
  providers: [tuiInputDateOptionsProvider({nativePicker: true})],
})
export class PersonalInformationComponent {
  readonly items = [
    {
        name: 'Simple',
        description: 'Something usual',
    },
    {
        name: 'Advanced',
        description: 'Something better',
    },
    {
        name: 'PRO',
        description: 'Something cool',
    },
  ];

  constructor(    private router: Router){
    
  }

  readonly personalForm = new FormGroup({
    Datetime: new FormControl(new TuiDay(2017, 2, 15)),
    Phone: new FormControl('', [Validators.required]),
    Address: new FormControl('', [Validators.required]),
    Render: new FormControl('', [Validators.required]),
});

nextStep(){
  console.log(this.personalForm.value);
  this.router.navigate(['createProfile/basic-information']);
}
  

}
