import { ChangeDetectorRef, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ShareModule } from '../../../shared/shared.module';
import { TaigaModule } from '../../../shared/taiga.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {TUI_DEFAULT_MATCHER, TuiDay, TuiTime, tuiPure} from '@taiga-ui/cdk';

const ITEMS: readonly string[] = [
  'Luke Skywalker',
  'Leia Organa Solo',
  'Darth Vader',
  'Han Solo',
  'Obi-Wan Kenobi',
  'Yoda',
];

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [ShareModule,TaigaModule],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.less'
})
export class JobDetailComponent {
  @ViewChild('jobDialog', { static: true })
  jobDialog!: ElementRef<HTMLDialogElement>;
  cdr1 = inject(ChangeDetectorRef);
  openJobDialog() {
    this.jobDialog.nativeElement.showModal();
    this.cdr1.detectChanges();
  }
  closeJobDialog() {
    this.jobDialog.nativeElement.close();
    this.cdr1.detectChanges();
  }

  // Lấy timestamp hiện tại
  timestamp = Date.now();

  // Khởi tạo Date object từ timestamp
  date = new Date(this.timestamp);

  // Lấy ngày, tháng, năm từ Date object
  day = this.date.getDate();
  month = this.date.getMonth(); 
  year = this.date.getFullYear();

  jobForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required]),
    Location: new FormControl('', [Validators.required]),
    Address: new FormControl('', [Validators.required]),

    Salary: new FormControl('', [Validators.required]),
    SalaryStart: new FormControl('', [Validators.required]),
    SalaryEnd: new FormControl('', [Validators.required]),
    Negotiate: new FormControl(false),

    Requirement: new FormControl('', [Validators.required]),
    Career: new FormControl('', [Validators.required]),
    Field: new FormControl('', [Validators.required]),
    DateStart: new FormControl(new TuiDay(this.year, this.month, this.day)),
    DateEnd: new FormControl(new TuiDay(this.year, this.month, this.day)),
    
    Walfare: new FormControl('', [Validators.required]),
    Tag: new FormControl('', [Validators.required]),
    ServicePakage: new FormControl('', [Validators.required]),

  });

  

  careerList=[
    {_id: 1, name: 'career1'},
    {_id: 2, name: 'career2'},
    {_id: 3, name: 'career3'},
    {_id: 4, name: 'career4'},
    {_id: 5, name: 'career5'},
  ];

  tagsList : string[] = [];
  addTag(){
    const newTag = this.jobForm.value.Tag;
    if(newTag){
      this.tagsList.push(newTag);
      this.jobForm.controls.Tag.setValue('');
    }
    console.log(this.tagsList);
  }
  removeTag(index: number){
    this.tagsList.splice(index, 1);
    console.log(this.tagsList);
  }

  addressList:string[]=[];
  addAddress(){
    const newLocation = this.jobForm.value.Address;
    if(newLocation){
      this.addressList.push(newLocation);
      this.jobForm.controls.Address.setValue('');
    }
    console.log(this.addressList);
  }
  removeAddress(index: number){
    this.addressList.splice(index, 1);
    console.log(this.addressList);
  }

  //Phúc lợi
  search: string | null = '';
  readonly Welfare = new FormControl([ITEMS[0]]);
  @tuiPure
  filter(search: string | null): readonly string[] {
      return ITEMS.filter(item => TUI_DEFAULT_MATCHER(item, search || ''));
  }
  //
}
