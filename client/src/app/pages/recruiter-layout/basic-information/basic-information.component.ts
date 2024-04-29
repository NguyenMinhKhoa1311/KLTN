import { Component } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-information',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './basic-information.component.html',
  styleUrl: './basic-information.component.less'
})
export class BasicInformationComponent {
  recruiterRegisterForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Phone: new FormControl('', [Validators.required]),
    Address: new FormControl('', [Validators.required]),
  });
}
