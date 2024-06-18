import { ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Recruiter } from '../../../models/recruiter.model';
import { Store } from '@ngrx/store';
import { RecruiterState } from '../../../ngrx/states/recruiter.state';
import * as RecruiterActions from '../../../ngrx/actions/recruiter.actions';
import { FieldState } from '../../../ngrx/states/field.state';
import { CompanyState } from '../../../ngrx/states/company.state';
import * as FieldActions from '../../../ngrx/actions/field.actions';
import * as CompanyActions from '../../../ngrx/actions/company.actions';
import { Field } from '../../../models/field.model';
import { TuiAlertService } from '@taiga-ui/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.less'
})
export class ProfileComponent implements OnDestroy{

  //variables
  token: string = '';
  userLogged: Recruiter = <Recruiter>{};
  fields: Field[] = [];
  fieldAsName: string = '';





  subscriptions: Subscription[] = [];

  //ngrx of recruiter
  recuriterTakenBy_id$ = this.store.select('recruiter', 'recruiterTakenBy_idAtProfile');
  recruiterUpdated$ = this.store.select('recruiter', 'recruiterUpdatedAtProfile');

  //ngrx of company
  companyUpdated$ = this.store.select('company', 'companyUpdatedByUpdateAtProfile');

  //ngrx of field
  fieldNoLimitAtProfileRecruiter$ = this.store.select('field', 'fieldNoLimitAtProfileRecruiter');


  constructor(
    private store: Store<{
      recruiter: RecruiterState,
      field: FieldState,
      company: CompanyState,
    }>,
    private readonly alerts: TuiAlertService,
  ) {
    let token = sessionStorage.getItem('tokenOfRecruiter');
    let userLogged = sessionStorage.getItem('recruiterLoged');
    if(userLogged){
      let userAfterParse = JSON.parse(userLogged) as Recruiter;
      if(userAfterParse?._id.length > 0 && userAfterParse?._id != ""){
        this.userLogged = userAfterParse;
      }}
    if(token){
      this.token = token;
      console.log(this.token);
      
    }
    this.store.dispatch(FieldActions.getAllNoLimitAtProfileRecruiter());
    this.store.dispatch(RecruiterActions.getBy_idAtProfile({id: this.userLogged._id}));

    this.subscriptions.push(
      this.recuriterTakenBy_id$.subscribe(recruiter => {
        if(recruiter._id){
          if(recruiter._id != "500"){
            this.userLogged = recruiter;
            console.log(this.userLogged.Company.Field.toString());
            this.profileForm.setValue({
              Name: this.userLogged.Name,
              Email: this.userLogged.Email,
              Phone: this.userLogged.Phone,
              Address: this.userLogged.Address,
            });
            this.companyForm.setValue({
              Name: this.userLogged.Company.Name,
              Email: this.userLogged.Company.Email,
              Phone: this.userLogged.Company.Phone,
              Address: this.userLogged.Company.Address,
              Field: this.fieldAsName,
              Description: this.userLogged.Company.Description,
            });
            const field = this.fields.find(field => field._id == this.userLogged.Company.Field.toString());
            if(field){
              this.fieldAsName = field.FieldName;
            }else{
              this.fieldAsName = 'Khác';
            }
            sessionStorage.setItem('recruiterLoged', JSON.stringify(recruiter));
          }
        }
      }),
      this.fieldNoLimitAtProfileRecruiter$.subscribe(fields => {
        if(fields.length){
          this.fields = fields;
        }
      }),
      this.companyUpdated$.subscribe(company => {
        if(company._id){
          if(company._id != "500"){
            this.store.dispatch(RecruiterActions.getBy_idAtProfile({id: this.userLogged._id}));
            this.alerts
            .open('', {label: 'Cập nhật thông tin công ty thành công !!!',status:'success'})
            .subscribe();
            this.closeCompanyDialog();
          }
        }
      }),
      this.recruiterUpdated$.subscribe(recruiter => {
        if(recruiter._id){
          if(recruiter._id != "500"){
            this.store.dispatch(RecruiterActions.getBy_idAtProfile({id: this.userLogged._id}));
            this.alerts
            .open('', {label: 'Cập nhật thông tin cá nhân thành công !!!',status:'success'})
            .subscribe();
            this.closeUserDialog();
          }
        }
      })


    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  
  profileForm = new FormGroup({
    Name: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.required),
    Phone: new FormControl('', Validators.required),
    Address: new FormControl('', Validators.required),
  });

  companyForm = new FormGroup({
    Name: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.required),
    Phone: new FormControl('', Validators.required),
    Address: new FormControl('', Validators.required),
    Field: new FormControl('', Validators.required),
    Description: new FormControl('', Validators.required),
  });

  updateProfile(){
    const recruiterToUpdate: any = {
      Name: this.profileForm.value.Name,
      Email: this.profileForm.value.Email,
      Phone: this.profileForm.value.Phone,
      Address: this.profileForm.value.Address,
    }
    console.log(this.token);
    
    console.log(recruiterToUpdate);
    this.store.dispatch(RecruiterActions.updateAtProfile({id: this.userLogged._id, newProfile: recruiterToUpdate,token: this.token}));
    
  }
  updateCompany(){
    const field = this.fields.find(field => field.FieldName == this.companyForm.value.Field);
    const companyToUpdate: any = {
      Name: this.companyForm.value.Name,
      Email: this.companyForm.value.Email,
      Phone: this.companyForm.value.Phone,
      Address: this.companyForm.value.Address,
      Field: field?._id,
      Description: this.companyForm.value.Description,
    }
    console.log(companyToUpdate);
    this.store.dispatch(CompanyActions.updateAtProfile({id: this.userLogged.Company._id, updateCompany: companyToUpdate,token: this.token}));
  }

  @ViewChild('userDialog', { static: true })
  userDialog!: ElementRef<HTMLDialogElement>;
  cdr1 = inject(ChangeDetectorRef);
  openUserDialog() {
    this.userDialog.nativeElement.showModal();
    this.cdr1.detectChanges();
  }
  closeUserDialog() {
    this.userDialog.nativeElement.close();
    this.cdr1.detectChanges();
    this.profileForm.setValue({
      Name: this.userLogged.Name,
      Email: this.userLogged.Email,
      Phone: this.userLogged.Phone,
      Address: this.userLogged.Address,
    });
  }

  @ViewChild('companyDialog', { static: true })
  companyDialog!: ElementRef<HTMLDialogElement>;
  cdr2 = inject(ChangeDetectorRef);
  openCompanyDialog() {
    this.companyDialog.nativeElement.showModal();
    this.cdr2.detectChanges();
  }
  closeCompanyDialog() {
    this.companyDialog.nativeElement.close();
    this.cdr2.detectChanges();
    this.companyForm.setValue({
      Name: this.userLogged.Company.Name,
      Email: this.userLogged.Company.Email,
      Phone: this.userLogged.Company.Phone,
      Address: this.userLogged.Company.Address,
      Field: this.fieldAsName,
      Description: this.userLogged.Company.Description,
    });
  }
}
