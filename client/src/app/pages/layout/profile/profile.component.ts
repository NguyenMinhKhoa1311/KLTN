import { ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { ShareModule } from '../../../shared/shared.module';
import { TaigaModule } from '../../../shared/taiga.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { candidateState } from '../../../ngrx/states/candidate.state';
import { convertStringToDate, generateUuid } from '../../../../environments/environments';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as CandidateActions from '../../../ngrx/actions/candidate.actions';
import { Subscription } from 'rxjs';
import { Candidate } from '../../../models/candidate.model';
import { StorageState } from '../../../ngrx/states/storage.state';
import * as StorageActions from '../../../ngrx/actions/storage.actions';
import { CareerState } from '../../../ngrx/states/career.state';
import { FieldState } from '../../../ngrx/states/field.state';
import * as FieldActions from '../../../ngrx/actions/field.actions';
import * as CareerActions from '../../../ngrx/actions/career.actions';
import { Career } from '../../../models/career.model';
import { Field } from '../../../models/field.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ShareModule, TaigaModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.less'
})
export class ProfileComponent implements OnDestroy {
  constructor(
    private store: Store<{
      candidate: candidateState,
      storage: StorageState,
      career: CareerState,
      field: FieldState

    }>
  ) {
    //lấy user đã login và dùng
    let userLogged = sessionStorage.getItem('userLogged');
    if(userLogged){
      let userAfterParse = JSON.parse(userLogged) as Candidate;
      if(userAfterParse?._id.length > 0 && userAfterParse?._id != ""){
        
        this.candidateToRender = userAfterParse;
        console.log(this.candidateToRender);
        this.profileForm.controls.Name.setValue(this.candidateToRender.Name);
        this.profileForm.controls.Email.setValue(this.candidateToRender.Email);
        this.profileForm.controls.Phone.setValue(this.candidateToRender.Phone);
        this.profileForm.controls.Address.setValue(this.candidateToRender.Address);
        this.profileForm.controls.Experience.setValue(this.candidateToRender.Experience.toString());
        this.profileForm.controls.Career.setValue(this.candidateToRender.Career._id);
        this.profileForm.controls.Field.setValue(this.candidateToRender.Field._id);
        this.profileForm.controls.Image.setValue(this.candidateToRender.Avatar);
        this.profileForm.controls.Position.setValue(this.candidateToRender.Position);
        
        // this.profileForm.controls.Location.setValue(this.candidateToRender.DesiredJob.Location);
        // this.profileForm.controls.Salary.setValue(this.candidateToRender.DesiredJob.Salary.toString());
        
      }
    }
    //lấy carrer và field
    this.store.dispatch(CareerActions.getAllAtProfile());
    this.store.dispatch(FieldActions.getAllNoLimitAtProfile());

    // theo dõi các ngrx
    this.subscriptions.push(
      // theo dõi candidate dc cập nhật education
      this.candidateupdatedEducationAtProfile$.subscribe((candidate) => {
        if(this.isUpdateEducation){
            if(candidate._id!="500"){
              console.log(candidate);
              this.candidateToRender = candidate;
              sessionStorage.setItem('userLogged', JSON.stringify(candidate));
              this.learnDialog.nativeElement.close();
              this.cdr2.detectChanges();
            }
        }
      }),
      // theo dõi candidate dc cập nhật work experience
      this.candidateupdatedWorkExperienceAtProfile$.subscribe((candidate) => {
        if(this.isUpdateWorkExperience){
            if(candidate._id!="500"){
              console.log(candidate);
              this.candidateToRender = candidate;
              sessionStorage.setItem('userLogged', JSON.stringify(candidate));
              this.exprienceDialog.nativeElement.close();
              this.cdr1.detectChanges();
            }
        }
      }),
      // theo dõi candidate dc cập nhật language
      this.candidateupdatedLanguageAtProfile$.subscribe((candidate) => {
        if(this.isUpdateLanguage){
            if(candidate._id!="500"){
              console.log(candidate);
              this.candidateToRender = candidate;
              sessionStorage.setItem('userLogged', JSON.stringify(candidate));
              this.languageDialog.nativeElement.close();
              this.cdr4.detectChanges();
            }
        }
      }),
      // theo dõi candidate dc cập nhật desired job
      this.candidateupdatedDesiredJobAtProfile$.subscribe((candidate) => {
        if(this.isUpdateDesiredJob){
            if(candidate._id!="500"){
              console.log(candidate);
              this.candidateToRender = candidate;
              sessionStorage.setItem('userLogged', JSON.stringify(candidate));
              this.desiredDialog.nativeElement.close();
              this.cdr5.detectChanges();
            }
        }
      }),
      //theo dõi storage dc create
      this.isCreateAtProfileSuccess$.subscribe((isSuccess) => {
        if(isSuccess){
          if(!this.isGetFileByFolderName){
            this.isGetFileByFolderName = true;
          }

          this.store.dispatch(StorageActions.getByFolderNameAtProfile({folderName:this.foldernameCreatedAtProfile}));
        }
      }),
      //lấy ra file theo folder name
      this.fileTakenByFolderNameAtProfile$.subscribe((file) => {
        if(this.isGetFileByFolderName){
          if(file._id.length > 0){
            console.log(file);
          }
        }
      }),
      //theo dõi career dc lấy ra từ getAll
      this.careerTakenByGetAllAtProfile$.subscribe((careers) => {
        if(careers.length > 0){
          console.log(careers);
          this.careerList= careers
        }
      }),
      //theo dõi field dc lấy ra từ getAllNoLimit
      this.fieldTakenByGetAllAtProfile$.subscribe((fields) => {
        if(fields.length > 0){
          console.log(fields);
          this.fieldList = fields;
        }
      }),
      //theo dõi career dc lấy ra từ getByField
      this.careerTakenByGetByFieldAtProfile$.subscribe((careers) => {
        if(careers.length > 0){
          console.log(careers);
          this.careerList= careers
        }
      }),
      //theo dõi candidate dc update basic info
      this.candidateUpdateBasicInfoAtProfile$.subscribe((candidate) => {
        if(this.isUpdateBasicInfo){
            if(candidate._id!="500"){
              console.log(candidate);
              this.candidateToRender = candidate;
              sessionStorage.setItem('userLogged', JSON.stringify(candidate));
              this.userDialog.nativeElement.close();
              this.cdr6.detectChanges();
              this.profileForm.controls.Name.setValue(this.candidateToRender.Name);
              this.profileForm.controls.Email.setValue(this.candidateToRender.Email);
              this.profileForm.controls.Phone.setValue(this.candidateToRender.Phone);
              this.profileForm.controls.Address.setValue(this.candidateToRender.Address);
              this.profileForm.controls.Experience.setValue(this.candidateToRender.Experience.toString());
              this.profileForm.controls.Career.setValue(this.candidateToRender.Career._id);
              this.profileForm.controls.Field.setValue(this.candidateToRender.Field._id);
              this.profileForm.controls.Position.setValue(this.candidateToRender.Position);

            }
        }
      })
    )

    
   }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  //variables
  isUpdateEducation: boolean = false;
  isUpdateWorkExperience: boolean = false;
  isUpdateLanguage: boolean = false;
  isUpdateDesiredJob: boolean = false;
  isGetFileByFolderName: boolean = false;
  isUpdateBasicInfo: boolean = false;
  subscriptions: Subscription[] = [];
  candidateToRender: Candidate=<Candidate>{} ;
  foldernameCreatedAtProfile: string = "";
  careerList: Career[] = [];
  fieldList: Field[] = [];

  levelList=[
    {_id: 1, name: 'level1'},
    {_id: 2, name: 'level2'},
    {_id: 3, name: 'level3'},
    {_id: 4, name: 'level4'},
    {_id: 5, name: 'level5'},
  ];

  //ngrx of candidate
  candidateupdatedEducationAtProfile$ = this.store.select('candidate','candidateUpdatedEducationAtProfile');
  candidateupdatedWorkExperienceAtProfile$ = this.store.select('candidate','candidateUpdatedWorkExperienceAtProfile');
  candidateupdatedLanguageAtProfile$ = this.store.select('candidate','candidateUpdatedLanguageAtProfile');
  candidateupdatedDesiredJobAtProfile$ = this.store.select('candidate','candidateUpdatedDesiredJobAtProfile');
  candidateUpdateBasicInfoAtProfile$ = this.store.select('candidate','candidateUpdatedBasicInfoAtProfile');


  //ngrx of storage
  isCreateAtProfileSuccess$ = this.store.select('storage','isCreateAtProfileSuccess');
  fileTakenByFolderNameAtProfile$ = this.store.select('storage','fileTakenByFolderNameAtProfile');

  //ngrx of career
  careerTakenByGetAllAtProfile$ = this.store.select('career','careersTakenByGetAllAtProfile');
  careerTakenByGetByFieldAtProfile$ = this.store.select('career','careersTakenByGetByFieldAtProfile');

  //ngrx of field
  fieldTakenByGetAllAtProfile$ = this.store.select('field','fieldNoLimitAtProfile');


  profileForm = new FormGroup({
    Name: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Phone: new FormControl('', Validators.required),
    Address: new FormControl('', Validators.required),
    Experience: new FormControl('', Validators.required),
    Career: new FormControl('', Validators.required),
    Field: new FormControl('', Validators.required),
    Image: new FormControl('', Validators.required),

    Position: new FormControl('', Validators.required),
    Company: new FormControl('', Validators.required),
    StartDay: new FormControl('', Validators.required),
    EndDay: new FormControl('', Validators.required),
    Description: new FormControl('', Validators.required),

    Major: new FormControl('', Validators.required),
    Degree: new FormControl('', Validators.required),
    Skill: new FormControl(''),
    Language: new FormControl(''),

    Location: new FormControl('', Validators.required),
    Salary: new FormControl('', Validators.required),
    Level: new FormControl('', Validators.required),

    JobTitle: new FormControl('', Validators.required),
  });

  onFieldChange(event: any) {
    const field_id = this.profileForm.value.Field;
    console.log(field_id);
    this.store.dispatch(CareerActions.getByFieldAtUpdateProfile({field: field_id??""}));
    
  }

  updateEducation(){
    let educationData = {
      EducationId: generateUuid(),
      Major: this.profileForm.value.Major,
      Degree: this.profileForm.value.Degree,
      School:"Đại Học Hoa Sen",
      StartDate: convertStringToDate(this.profileForm.value.StartDay??""),
      EndDate: convertStringToDate(this.profileForm.value.EndDay??""),
    }
    // níu dữ liệu lỗi thì cook
    if(educationData.StartDate==null || educationData.EndDate ==null|| educationData.Major==""||educationData.Degree==""){
      alert('Invalid date');
    }else{
      if(!this.isUpdateEducation){
        this.isUpdateEducation = true;
      }
      this.store.dispatch(CandidateActions.updateEducationAtProfile({education: educationData, id: '6610f3b7dc62116473071b2e'}));
      this.profileForm.controls.Major.setValue('');
      this.profileForm.controls.Degree.setValue('');
      this.profileForm.controls.StartDay.setValue('');
      this.profileForm.controls.EndDay.setValue('');
    }
  }

  updateWorkExperience(){
    let workExperienceData = {
      WorkExperienceId: generateUuid(),
      JobTitle: this.profileForm.value.JobTitle,
      CompanyName: this.profileForm.value.Company,
      StartDate: convertStringToDate(this.profileForm.value.StartDay??""),
      EndDate: convertStringToDate(this.profileForm.value.EndDay??""),
      Description: this.profileForm.value.Description,
    }
    // níu dữ liệu lỗi thì cook
    if(workExperienceData.StartDate==null || workExperienceData.EndDate ==null|| workExperienceData.JobTitle==""||workExperienceData.CompanyName==""||workExperienceData.Description==""){
      alert('Invalid date');
    }else{
      if(!this.isUpdateWorkExperience){
        this.isUpdateWorkExperience = true;
      }
      this.store.dispatch(CandidateActions.updateWorkExperienceAtProfile({workExperience: workExperienceData, id:'6610f3b7dc62116473071b2e'}));
      this.profileForm.controls.JobTitle.setValue('');
      this.profileForm.controls.Company.setValue('');
      this.profileForm.controls.StartDay.setValue('');
      this.profileForm.controls.EndDay.setValue('');
      this.profileForm.controls.Description.setValue('');
    }
  }

  updateLanguage(){
    const language = this.profileForm.value.Language??"";
    // kiểm tra dl có lỗi k nếu có thì cook
    if(language?.length > 0){
      if(!this.isUpdateLanguage){
        this.isUpdateLanguage = true;
      }
      this.store.dispatch(CandidateActions.updateLanguageAtProfile({language: language, id:'6610f3b7dc62116473071b2e'}));
    }
    else{
      alert('Invalid date');
    }
    
  }

  updateDesiredJob(){
    // kiểm tra dl có lỗi k nếu có thì cook
    if(this.profileForm.value.Location=="" || this.profileForm.value.Salary=="" ){
      alert('Invalid date');      
    }else{
      const desiredJobData = {
        Location: this.profileForm.value.Location,
        Salary: parseInt(this.profileForm.value.Salary??""),
        DesiredJobId: generateUuid()
      }
      if(!Number.isNaN(desiredJobData.Salary)){
        if(!this.isUpdateDesiredJob){
          this.isUpdateDesiredJob = true;
        }
        this.store.dispatch(CandidateActions.updateDesiredJobAtProfile({desiredJob: desiredJobData, id:'6610f3b7dc62116473071b2e'}));
        this.profileForm.controls.Location.setValue('');
        this.profileForm.controls.Salary.setValue('');

      }
      else{
        alert('Invalid date');
      }
    }
  }

  updateSkill() {
    if(this.skillsList.length>0){
      console.log(this.skillsList);
    }
    else{
      alert('Invalid date');
    }
  }

  updateAvatar(){
    if(this.file){
      let fileName ="ImgOf_"+ this.candidateToRender.Name +"_"+ generateUuid();
      this.foldernameCreatedAtProfile=fileName;
      this.store.dispatch(StorageActions.createAtProfile({fileName:fileName, file:this.file}));
    }
    else{
      alert('Invalid date');
    }
  }

  updateBasicInfo(){
    let basicInfo = {
      Name:this.profileForm.value.Name,
      Email: this.profileForm.value.Email,
      Phone: this.profileForm.value.Phone,
      Address: this.profileForm.value.Address,
      Experience: parseInt(this.profileForm.value.Experience??""),
      Career: this.profileForm.value.Career,
      Field: this.profileForm.value.Field,
      Position: this.profileForm.value.Position,
      DateOfBirth: this.candidateToRender.DateOfBirth,
    }
    console.log(basicInfo);
    
    if(basicInfo.Name=="" || basicInfo.Email=="" || basicInfo.Phone=="" || basicInfo.Address=="" || basicInfo.Experience==null || basicInfo.Career=="" || basicInfo.Field=="" || basicInfo.Position==""){
      alert('Invalid date');
    }
    else{
      if(!this.isUpdateBasicInfo){
        this.isUpdateBasicInfo = true;
      }
      this.store.dispatch(CandidateActions.updateBasicInfoAtProfile({basicInfo: basicInfo, id:'6610f3b7dc62116473071b2e'}));
    }

  }
  
  @ViewChild('exprienceDialog', { static: true })
  exprienceDialog!: ElementRef<HTMLDialogElement>;
  cdr1 = inject(ChangeDetectorRef);
  openExperienceDialog() {
    this.exprienceDialog.nativeElement.showModal();
    this.cdr1.detectChanges();
  }
  closeExperienceDialog() {
    this.exprienceDialog.nativeElement.close();
    this.cdr1.detectChanges();
  }

  @ViewChild('learnDialog', { static: true })
  learnDialog!: ElementRef<HTMLDialogElement>;
  cdr2 = inject(ChangeDetectorRef);
  openLearnDialog() {
    this.learnDialog.nativeElement.showModal();
    this.cdr2.detectChanges();
  }
  closeLearnDialog() {
    this.learnDialog.nativeElement.close();
    this.cdr2.detectChanges();
  }

  @ViewChild('skillDialog', { static: true })
  skillDialog!: ElementRef<HTMLDialogElement>;
  cdr3 = inject(ChangeDetectorRef);
  openSkillDialog() {
    this.skillDialog.nativeElement.showModal();
    this.cdr3.detectChanges();
  }
  closeSkillDialog() {
    this.skillDialog.nativeElement.close();
    this.cdr3.detectChanges();
  }

  skillsList : string[] = [];
  addSkill(){
    const newSkill = this.profileForm.value.Skill;
    if(newSkill){
      this.skillsList.push(newSkill);
      this.profileForm.controls.Skill.setValue('');
    }
    console.log(this.skillsList);
  }
  removeTag(index: number){
    this.skillsList.splice(index, 1);
    console.log(this.skillsList);
  }

  @ViewChild('languageDialog', { static: true })
  languageDialog!: ElementRef<HTMLDialogElement>;
  cdr4 = inject(ChangeDetectorRef);
  openLanguageDialog() {
    this.languageDialog.nativeElement.showModal();
    this.cdr4.detectChanges();
  }
  closeLanguageDialog() {
    this.languageDialog.nativeElement.close();
    this.cdr4.detectChanges();
  }

  @ViewChild('desiredDialog', { static: true })
  desiredDialog!: ElementRef<HTMLDialogElement>;
  cdr5 = inject(ChangeDetectorRef);
  openDesiredDialog() {
    this.desiredDialog.nativeElement.showModal();
    this.cdr5.detectChanges();
  }
  closeDesiredDialog() {
    this.desiredDialog.nativeElement.close();
    this.cdr5.detectChanges();
  }

  @ViewChild('userDialog', { static: true })
  userDialog!: ElementRef<HTMLDialogElement>;
  cdr6 = inject(ChangeDetectorRef);
  openUserDialog() {
    this.userDialog.nativeElement.showModal();
    this.cdr6.detectChanges();
  }
  closeUserDialog() {
    this.userDialog.nativeElement.close();
    this.cdr6.detectChanges();
  }
  


  selectedImage: string | ArrayBuffer | null = null;
  formData: FormData = new FormData();
  file: any;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.formData.append('image', file, file.name);
    this.file = file;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.selectedImage = reader.result;
    };
    console.log(this.file);
  }
}
