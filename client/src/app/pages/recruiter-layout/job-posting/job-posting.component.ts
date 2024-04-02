import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {TUI_DEFAULT_MATCHER, TuiBooleanHandler, tuiPure} from '@taiga-ui/cdk';

const ITEMS: readonly string[] = [
  'Luke Skywalker',
  'Leia Organa Solo',
  'Darth Vader',
  'Han Solo',
  'Obi-Wan Kenobi',
  'Yoda',
];
@Component({
  selector: 'app-job-posting',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './job-posting.component.html',
  styleUrl: './job-posting.component.less'
})
export class JobPostingComponent {

  // salaryStart: number = 0;
  // salaryEnd: number = 0;
  // ThuongLuong: boolean = false;


  jobPostForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required]),
    
    Salary: new FormControl('', [Validators.required]),
    SalaryStart: new FormControl('', [Validators.required]),
    SalaryEnd: new FormControl('', [Validators.required]),
    ThuongLuong: new FormControl(false),

    Requirement: new FormControl('', [Validators.required]),
    Career: new FormControl('', [Validators.required]),
    Field: new FormControl('', [Validators.required]),
    DateStart: new FormControl(new TuiDay(2017, 2, 15)),
    DateEnd: new FormControl(new TuiDay(2017, 2, 15)),
    
    Walfare: new FormControl('', [Validators.required]),
    Tag: new FormControl('', [Validators.required]),
    ServicePakage: new FormControl('', [Validators.required]),

  });

  careerValue:any;
  onCareerValueChange(){
    console.log("Giá trị đã chọn là: ", this.careerValue);
  }

  careerList = [
    'IT',
    'Marketing',
    'Sales',
  ];

  fieldValue:any;
  onFieldValueChange(){
    console.log("Giá trị đã chọn là: ", this.fieldValue);
  }

  fieldList = [
    'Software',
    'Hardware',
    'Network',
  ];

  tagsList : string[] = [];
  addTag(){
    const newTag = this.jobPostForm.value.Tag;
    if(newTag){
      this.tagsList.push(newTag);
      this.jobPostForm.controls.Tag.setValue('');
    }
    console.log(this.tagsList);
  }
  removeTag(index: number){
    this.tagsList.splice(index, 1);
    console.log(this.tagsList);
  }

  servicePakageValue : any;
  onServicePakageChange(){
    console.log("Giá trị đã chọn là: ", this.servicePakageValue);
  }
  servicePakageList = [
    'Software',
    'Hardware',
    'Network',
  ];



  //Phúc lợi
  search: string | null = '';
  readonly control = new FormControl([ITEMS[0]]);
  @tuiPure
  filter(search: string | null): readonly string[] {
      return ITEMS.filter(item => TUI_DEFAULT_MATCHER(item, search || ''));
  }
  //

}


