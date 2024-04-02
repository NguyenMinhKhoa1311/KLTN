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

  // Lấy timestamp hiện tại
  timestamp = Date.now();

  // Khởi tạo Date object từ timestamp
  date = new Date(this.timestamp);

  // Lấy ngày, tháng, năm từ Date object
  day = this.date.getDate();
  month = this.date.getMonth(); 
  year = this.date.getFullYear();
  readonly personalForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Datetime: new FormControl(new TuiDay(this.year, this.month, this.day)),
    Phone: new FormControl('', [Validators.required]),
    Address: new FormControl('', [Validators.required]),
    Gender: new FormControl('', [Validators.required]),
  });

  nextStep(){
    console.log(this.personalForm.value);
    const candidate = {
      Name: this.personalForm.value.Name,
      DateOfBirth: this.personalForm.value.Datetime,
      Phone: this.personalForm.value.Phone,
      Address: this.personalForm.value.Address,
      Gender: this.personalForm.value.Gender
    }
    this.router.navigate(['createProfile/basic-information']);
    const cadidateAsJson = JSON.stringify(candidate);
    sessionStorage.setItem('candidate', cadidateAsJson);
    
  }
  

}
