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

    }>
  ) {
    let userLogged = sessionStorage.getItem('userLogged');
    if(userLogged){
      let userAfterParse = JSON.parse(userLogged) as Candidate;
      if(userAfterParse?._id.length > 0&&userAfterParse?._id!=""){
        this.candidateToRender = userAfterParse;
        console.log(this.candidateToRender);
        
      }
    }
    this.subscriptions.push(
      // theo dõi candidate dc cập nhật education
      this.candidateupdatedEducationAtProfile$.subscribe((candidate) => {
        if(this.isUpdateEducation){
            if(candidate._id!="500"){
              console.log(candidate);
              
            }
        }
      }),
      // theo dõi candidate dc cập nhật work experience
      this.candidateupdatedWorkExperienceAtProfile$.subscribe((candidate) => {
        if(this.isUpdateWorkExperience){
            if(candidate._id!="500"){
              console.log(candidate);
              
            }
        }
      }),
      // theo dõi candidate dc cập nhật language
      this.candidateupdatedLanguageAtProfile$.subscribe((candidate) => {
        if(this.isUpdateLanguage){
            if(candidate._id!="500"){
              console.log(candidate);
              
            }
        }
      }),
      // theo dõi candidate dc cập nhật desired job
      this.candidateupdatedDesiredJobAtProfile$.subscribe((candidate) => {
        if(this.isUpdateDesiredJob){
            if(candidate._id!="500"){
              console.log(candidate);
              
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
  subscriptions: Subscription[] = [];
  candidateToRender: Candidate=<Candidate>{}

  //ngrx of candidate
  candidateupdatedEducationAtProfile$ = this.store.select('candidate','candidateUpdatedEducationAtProfile');
  candidateupdatedWorkExperienceAtProfile$ = this.store.select('candidate','candidateUpdatedWorkExperienceAtProfile');
  candidateupdatedLanguageAtProfile$ = this.store.select('candidate','candidateUpdatedLanguageAtProfile');
  candidateupdatedDesiredJobAtProfile$ = this.store.select('candidate','candidateUpdatedDesiredJobAtProfile');


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
  });


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
      
    }
  }

  updateWorkExperience(){
    let workExperienceData = {
      WorkExperienceId: generateUuid(),
      JobTitle: this.profileForm.value.Position,
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
      }
      else{
        alert('Invalid date');
      }
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
  
  careerList=[
    {_id: 1, name: 'career1'},
    {_id: 2, name: 'career2'},
    {_id: 3, name: 'career3'},
    {_id: 4, name: 'career4'},
    {_id: 5, name: 'career5'},
  ];

  levelList=[
    {_id: 1, name: 'level1'},
    {_id: 2, name: 'level2'},
    {_id: 3, name: 'level3'},
    {_id: 4, name: 'level4'},
    {_id: 5, name: 'level5'},
  ];

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
