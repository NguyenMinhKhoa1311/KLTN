import { ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ShareModule } from '../../../shared/shared.module';
import { TaigaModule } from '../../../shared/taiga.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {TUI_DEFAULT_MATCHER, TuiDay, TuiTime, tuiPure} from '@taiga-ui/cdk';
import { Store } from '@ngrx/store';
import { jobState } from '../../../ngrx/states/job.state';
import * as JobActions from '../../../ngrx/actions/job.actions';
import { Subscription } from 'rxjs';
import { Job } from '../../../models/job.model';
import { extractNumbersRegex, parseDate } from '../../../../environments/environments';
import { FieldState } from '../../../ngrx/states/field.state';
import { CareerState } from '../../../ngrx/states/career.state';
import * as FieldActions from '../../../ngrx/actions/field.actions';
import * as CareerActions from '../../../ngrx/actions/career.actions';
import { Field } from '../../../models/field.model';
import { Career } from '../../../models/career.model';
import { Recruiter } from '../../../models/recruiter.model';
import { TuiAlertService } from '@taiga-ui/core';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [ShareModule,TaigaModule],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.less'
})
export class JobDetailComponent implements OnDestroy {
  @ViewChild('jobDialog', { static: true })
  jobDialog!: ElementRef<HTMLDialogElement>;
  cdr1 = inject(ChangeDetectorRef);
  //variable
  jobToUpdate:Job = <Job>{};
  listJobs: Job[] = [];
  subscriptions: Subscription[] = [];
  careerList: Career[]=[];
  fieldList: Field[] = [];
  careerName: string = '';
  fieldName: string = '';
  isAgreeToRender: boolean = false;
  salaryStart: number = 0;
  salaryEnd: number = 0;
  name: string = '';
  description: string = '';
  location: string[] = [];
  address: string = '';
  requirement: string = '';
  dateEnd: string = '';
  dateStart: string = '';
  token: string = '';
  userLogged: Recruiter = <Recruiter>{};
  isLogin: boolean = false;

  parseDateInComponent(date: Date) {
    return parseDate(date);
  }

  //variables
  page: number = 0;
  isGetByRecruiterAtJobDetailSuccess: boolean = false;
  jobToPayment: Job = <Job>{};


  //ngrx of job

  jobGetByRecruiterATJobDetail$ = this.store.select('job','jobsTakenByRecruiterAtJobDetail')
  jobUpdatedAtJobDetail$ = this.store.select('job','jobUpdatedAtJobDetail');
  isDeletedJobAtJobDetail$ = this.store.select('job','isDeleteAtJobDetailfRecruiterSuccess');
  isGetByRecruiterAtJobDetailSuccess$ = this.store.select('job','isGetByRecruiterAtJobDetailSuccess');

  //ngrx of field
  fieldNoLimitAtJobDetail$ = this.store.select('field', 'fieldNoLimitAtJobDetail');


  //ngrx of career
  careersTakenByGetAllAtJobDetail$ = this.store.select('career', 'careersTakenByGetAllAtJobDetail');
  careersTakenByGetByFieldAtJobDetail$ = this.store.select('career', 'careersTakenByGetByFieldAtJobDetail');



  constructor(
    private store: Store<{job: jobState, field: FieldState, career: CareerState}>,
    private readonly alerts: TuiAlertService,
    private router: Router,

  ){
    let token = sessionStorage.getItem('tokenOfRecruiter');
    let userLogged = sessionStorage.getItem('recruiterLoged');
    if(userLogged){
      this.isLogin = true;
      let userAfterParse = JSON.parse(userLogged) as Recruiter;
      if(userAfterParse?._id.length > 0 && userAfterParse?._id != ""){
        this.userLogged = userAfterParse;
      }}
    if(token){
      this.token = token;
    }
    //get job theo recruiter
    this.store.dispatch(JobActions.getJobByRecruiterAtJobDetail({recruiter: this.userLogged._id,page: 0, limit: 6}) );

    //getAll field
    this.store.dispatch(FieldActions.getAllNoLimitAtJobDetail());

    //getAll carrer
    this.store.dispatch(CareerActions.getAllAtJobDetail());


    //theo dõi ngrx
    this.subscriptions.push(
          //is get job by recruiter success
    this.isGetByRecruiterAtJobDetailSuccess$.subscribe(result => {
      this.isGetByRecruiterAtJobDetailSuccess = result;
    }),

      //theo dõi job lấy bởi recruiter
      this.jobGetByRecruiterATJobDetail$.subscribe(jobs => {
        if(jobs.length){
          console.log(jobs);
          this.listJobs = jobs;
        }else if(this.isGetByRecruiterAtJobDetailSuccess){
          this.page--;
          this.alerts
          .open('', {label: 'Không có công việc nào !!!',status:'info'})
          .subscribe();
        }
      }),
      //theo dõi field dc getAll
      this.fieldNoLimitAtJobDetail$.subscribe(fields => {
        console.log(fields);
        if(fields.length > 0){
          this.fieldList = fields;
        }
      }),
      //theo dõi career dc getAll
      this.careersTakenByGetAllAtJobDetail$.subscribe(careers => {
        console.log(careers);
        if(careers.length > 0){
          this.careerList = careers;
        }
      }),
      //theo dõi career dc lấy bởi field
      this.careersTakenByGetByFieldAtJobDetail$.subscribe(careers => {
        console.log(careers);
        if(careers.length > 0){
          this.careerList = careers;
        }
      }),
      //theo dõi job dc update
      this.jobUpdatedAtJobDetail$.subscribe(job => {
        console.log(job);
        if(job._id!='500'){
          this.store.dispatch(JobActions.getJobByRecruiterAtJobDetail({recruiter: this.userLogged._id,page: 0, limit: 6}) );
          this.closeJobDialog();
          this.alerts
          .open('', {label: 'Cập nhật công việc thành công !!!',status:'success'})
          .subscribe();
        }
      }),
      //theo dõi job dc xóa
      this.isDeletedJobAtJobDetail$.subscribe(result => {
        if(result){
          this.store.dispatch(JobActions.getJobByRecruiterAtJobDetail({recruiter: this.userLogged._id,page: 0, limit: 6}) );
          this.alerts
          .open('', {label: 'Xóa công việc thành công !!!',status:'success'})
          .subscribe();
        }
      })
    )
  }
  ngOnDestroy(): void {
    this.store.dispatch(JobActions.resetState());
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  onFieldChange(event: any) {
    const field_id = this.jobForm.value.Field;
    console.log(field_id);
    this.store.dispatch(CareerActions.getByFieldAtJobDetail({field: field_id??""}));
    
  }

  updateJob(){
    let jobData = {
      Name: this.jobForm.value.Name,
      Description: this.jobForm.value.Description,
      Location: this.addressList,
      Address: this.jobForm.value.Location,
      Salary: this.jobForm.value.Salary,
      Requirement: this.jobForm.value.Requirement,
      Career: this.jobForm.value.Career,
      Field: this.jobForm.value.Field,
      Welfare: this.welfareList,
      Tags: this.tagsList,
      StartDate: this.jobForm.value.DateStart,
      EndDate: this.jobForm.value.DateEnd,
    }
    console.log(jobData);
    console.log(this.jobToUpdate._id);
    
    this.store.dispatch(JobActions.updateJobAtJobDetail({job: jobData, id: this.jobToUpdate._id,token:this.token}));
    

  }
  openJobDialog(job: Job) {
    console.log(job);
    this.jobToUpdate = job;
    let [startSalary, endSalary] =[0,0]
    if(job.Salary != "Thỏa thuận"){
      [startSalary, endSalary] = extractNumbersRegex(job.Salary);
    }
    this.jobDialog.nativeElement.showModal();
    this.cdr1.detectChanges();
    this.jobForm.controls.Name.setValue(job.Name);
    this.jobForm.controls.Description.setValue(job.Description);
    //this.jobForm.controls.Location.setValue(job.Location);
    this.jobForm.controls.Address.setValue(job.Address);
    this.jobForm.controls.Salary.setValue(job.Salary);
    this.jobForm.controls.SalaryStart.setValue(startSalary.toString());
    this.jobForm.controls.SalaryEnd.setValue(endSalary.toString());
    this.jobForm.controls.Requirement.setValue(job.Requirement);
    this.jobForm.controls.Career.setValue(job.Career._id);
    this.jobForm.controls.Field.setValue(job.Field._id);
    job.Location.forEach(element => {
      this.addressList.push(element);
    });
    job.Welfare.forEach(element => {
      this.welfareList.push(element);
    });
    job.Tags.forEach(element => {
      this.tagsList.push(element);
    });
  }
  closeJobDialog() {
    this.jobDialog.nativeElement.close();
    this.cdr1.detectChanges();
    this.addressList = [];
    this.welfareList = [];
    this.tagsList = [];
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
    
    Welfare: new FormControl('', [Validators.required]),
    Tag: new FormControl('', [Validators.required]),
    ServicePakage: new FormControl('', [Validators.required]),

  });

  
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
    const newLocation = this.jobForm.value.Location;
    if(newLocation){
      this.addressList.push(newLocation);
      this.jobForm.controls.Location.setValue('');
    }
    console.log(this.addressList);
  }
  removeAddress(index: number){
    this.addressList.splice(index, 1);
    console.log(this.addressList);
  }

  
  welfareList : string[] = [];
  addWelfare(){
    const newWelfare = this.jobForm.value.Welfare;
    if(newWelfare){
      this.welfareList.push(newWelfare);
      this.jobForm.controls.Welfare.setValue('');
    }
    console.log(this.welfareList);
  }
  removeWelfare(index: number){
    this.welfareList.splice(index, 1);
    console.log(this.welfareList);
  }

  @ViewChild('paymentDialog', { static: true })
  paymentDialog!: ElementRef<HTMLDialogElement>;
  cdr3 = inject(ChangeDetectorRef);
  openPaymentDialog(job:Job) {
    this.jobToPayment = job;
    this.paymentDialog.nativeElement.showModal();
    this.cdr3.detectChanges();
  }
  closePaymentDialog() {
    this.paymentDialog.nativeElement.close();
    this.cdr3.detectChanges();
  }
  

  @ViewChild('visibilityDialog', { static: true })
  visibilityDialog!: ElementRef<HTMLDialogElement>;
  cdr2 = inject(ChangeDetectorRef);
  openreVisibilityDialog(job:Job) {
    console.log(job);
    this.jobToUpdate = job;
    let [startSalary, endSalary] =[0,0]
    if(job.Salary != "Thỏa thuận"){
      [startSalary, endSalary] = extractNumbersRegex(job.Salary);
    }
    this.fieldName = job.Field.FieldName;
    this.careerName = job.Career.Name;
    this.salaryStart = startSalary;
    this.salaryEnd = endSalary;
    this.name = job.Name;
    this.description = job.Description;
    this.location = job.Location;
    this.address = job.Address;
    this.requirement = job.Requirement;
    this.dateStart = parseDate(job.StartDate);
    this.dateEnd = parseDate(job.EndDate);
    this.welfareList = [];
    this.tagsList = [];
    this.addressList = [];

    if(job.Salary == "Thỏa thuận"){
      this.isAgreeToRender = true;
    }

    this.visibilityDialog.nativeElement.showModal();
    this.cdr2.detectChanges();
    this.jobForm.controls.Name.setValue(job.Name);
    this.jobForm.controls.Description.setValue(job.Description);
    //this.jobForm.controls.Location.setValue(job.Location);
    this.jobForm.controls.Address.setValue(job.Address);
    this.jobForm.controls.Salary.setValue(job.Salary);
    this.jobForm.controls.SalaryStart.setValue(startSalary.toString());
    this.jobForm.controls.SalaryEnd.setValue(endSalary.toString());
    this.jobForm.controls.Requirement.setValue(job.Requirement);
    this.jobForm.controls.Career.setValue(job.Career._id);
    this.jobForm.controls.Field.setValue(job.Field.FieldName);
    job.Location.forEach(element => {
      this.addressList.push(element);
    });
    job.Welfare.forEach(element => {
      this.welfareList.push(element);
    });
    job.Tags.forEach(element => {
      this.tagsList.push(element);
    });
  }
  closeVisibilityDialog() {
    this.visibilityDialog.nativeElement.close();
    this.cdr2.detectChanges();
    this.welfareList = [];
    this.tagsList = [];
    this.addressList = [];
  }

  nextPage(){
    this.page++;
    this.store.dispatch(JobActions.getJobByRecruiterAtJobDetail({recruiter: this.userLogged._id,page: this.page, limit: 6}));
  }
  prevPage(){
    if(this.page > 0){
      this.page--;
    this.store.dispatch(JobActions.getJobByRecruiterAtJobDetail({recruiter: this.userLogged._id,page: this.page, limit: 6}));
    }
  }


  //delete job
  deleteJob(job: Job) {
    this.store.dispatch(JobActions.deleteAtJobDetailOfRecruiter({id: job._id,careerId: job.Career._id, companyId:job.Company._id,fieldId: job.Field._id,token: this.token}));
  }

  //payment
  payment(){
    this.router.navigate(['recruiterLayout/payment'], {
      queryParams: { job: this.jobToPayment.JobId }
    });
  }
}

