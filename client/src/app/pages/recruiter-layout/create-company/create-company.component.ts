import { Component } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-company',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './create-company.component.html',
  styleUrl: './create-company.component.less'
})
export class CreateCompanyComponent {
    createCompanyForm = new FormGroup({
      CompanyName: new FormControl('', [Validators.required]),
      CompanyAddress: new FormControl('', [Validators.required]),
      CompanyField: new FormControl('', [Validators.required]),
      CompanyCareer: new FormControl('', [Validators.required]),
    });
}
