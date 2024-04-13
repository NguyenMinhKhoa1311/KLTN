import { ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { ShareModule } from '../../../shared/shared.module';
import { TaigaModule } from '../../../shared/taiga.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { candidateState } from '../../../ngrx/states/candidate.state';
import { convertStringToDate, generateUuid, parseDate } from '../../../../environments/environments';
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
import { Education } from '../../../models/education.model';
import { WorkExperience } from '../../../models/work-experience.model';
import { Skill } from '../../../models/skill.model';
import { Reference } from '../../../models/reference.model';

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
        this.profileForm.controls.Location.setValue(this.candidateToRender.DesiredJob.Location);
        this.profileForm.controls.Salary.setValue(this.candidateToRender.DesiredJob.Salary.toString());

        
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
              this.isUpdateEducation = false;
              this.profileForm.controls.School.setValue('');
              this.profileForm.controls.Major.setValue('');
              this.profileForm.controls.Degree.setValue('');
              this.profileForm.controls.StartDay.setValue('');
              this.profileForm.controls.EndDay.setValue('');
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
              this.isUpdateWorkExperience = false;
              this.profileForm.controls.JobTitle.setValue('');
              this.profileForm.controls.Company.setValue('');
              this.profileForm.controls.StartDay.setValue('');
              this.profileForm.controls.EndDay.setValue('');
              this.profileForm.controls.Description.setValue('');
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
              this.isUpdateLanguage = false;
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
              this.profileForm.controls.Location.setValue('');
              this.profileForm.controls.Salary.setValue('');
            }
        }
      }),
      //theo dõi candidate dc cập nhật avatar
      this.candidateUpdateAdvatarAtProfile$.subscribe((candidate) => {
        if(this.isUpdateImageOfCandidate){
          if(candidate._id!="500"){
            console.log(candidate);
            this.candidateToRender = candidate;
            sessionStorage.setItem('userLogged', JSON.stringify(candidate));
            this.isUpdateImage = false;
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
            if(!this.isUpdateImageOfCandidate){
              this.isUpdateImageOfCandidate = true;
            }
            this.store.dispatch(CandidateActions.updateAvatarAtProfile({ id:this.candidateToRender._id, storage:file}))
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
      }),
      // theo dõi candidate dc update skill
      this.candidateUpdateSkillAtProfile$.subscribe((candidate) => {
        if(this.isUpdateSkill){
            if(candidate._id!="500"){
              console.log(candidate);
              this.candidateToRender = candidate;
              sessionStorage.setItem('userLogged', JSON.stringify(candidate));
              this.skillDialog.nativeElement.close();
              this.cdr3.detectChanges();
              this.isUpdateSkill=false;
            }
        }
      }),
      // theo dõi candidate dc delete skill
      this.candidateDeletedSkillAtProfile$.subscribe((candidate) => {
        if(this.isDeleteSkill){
            if(candidate._id!="500"){
              console.log(candidate);
              this.candidateToRender = candidate;
              sessionStorage.setItem('userLogged', JSON.stringify(candidate));
              this.isDeleteSkill = false;
            }
        }
      }),
      // theo dõi candidate dc delete education
      this.candidateDeletedEducationAtProfile$.subscribe((candidate) => {
        if(this.isDeleteEducation){
            if(candidate._id!="500"){
              console.log(candidate);
              this.candidateToRender = candidate;
              sessionStorage.setItem('userLogged', JSON.stringify(candidate));
              this.isDeleteEducation = false;
            }
        }
      }),
      // theo dõi candidate dc delete work experience
      this.candidateDeletedWorkExperienceAtProfile$.subscribe((candidate) => {
        if(this.isDeleteWorkExperience){
            if(candidate._id!="500"){
              console.log(candidate);
              this.candidateToRender = candidate;
              sessionStorage.setItem('userLogged', JSON.stringify(candidate));
              this.isDeleteWorkExperience = false;
            }
        }
      }),
      // theo dõi candidate dc delete language
      this.candidateDeletedLanguageAtProfile$.subscribe((candidate) => {
        if(this.isDeleteLanguage){
            if(candidate._id!="500"){
              console.log(candidate);
              this.candidateToRender = candidate;
              sessionStorage.setItem('userLogged', JSON.stringify(candidate));
              this.isDeleteLanguage = false;
            }
        }
      }),
      // theo dõi candidate dc update one of education
      this.candidateUpdatedOneOfEducationAtProfile$.subscribe((candidate) => {
        if(this.isUpdateOneOfEdcation){
            if(candidate._id!="500"){
              console.log(candidate);
              this.candidateToRender = candidate;
              sessionStorage.setItem('userLogged', JSON.stringify(candidate));
              this.updateLearnDialog.nativeElement.close();
              this.cdr7.detectChanges();
            }
        }
      }),
      // theo dõi candidate dc update one of work experience
      this.candidateUpdatedOneOfWorkExperienceAtProfile$.subscribe((candidate) => {
        if(this.isUpdateOneOfWorkExperience){
            if(candidate._id!="500"){
              console.log(candidate);
              this.candidateToRender = candidate;
              sessionStorage.setItem('userLogged', JSON.stringify(candidate));
              this.updateExprienceDialog.nativeElement.close();
              this.cdr8.detectChanges();
            }
        }
      }),

      //theo dõi candidate dc update reference
      this.candidateUpdatedReferenceAtProfile$.subscribe((candidate) => {
        if(this.isUpdateReferenceOfNgrx){
            if(candidate._id!="500"){
              console.log(candidate);
              this.candidateToRender = candidate;
              sessionStorage.setItem('userLogged', JSON.stringify(candidate));
              this.closereFerenceDialog();
            }
        }
      }),
      //theo dõi candidate dc update one of skill
      this.candidateUpdatedOneOfSkillAtProfile$.subscribe((candidate) => {
        if(this.isUpdateOneOfSkill){
            if(candidate._id!="500"){
              console.log(candidate);
              this.candidateToRender = candidate;
              sessionStorage.setItem('userLogged', JSON.stringify(candidate));
              this.closeSkillDialog();
            }
        }
      }),
      //theo dõi candidate dc update one of reference
      this.candidateUpdatedOndOfReferenceAtProfile$.subscribe((candidate)=>{
        if(this.isUpdateOneOfReference){
          if(candidate._id!="500"){
            console.log(candidate);
            this.candidateToRender = candidate;
            sessionStorage.setItem('userLogged', JSON.stringify(candidate));
            this.closereFerenceDialog();
          }
        }

      }),
      // theo dõi candidate dc update career goal
      this.candidateUpdatedCareerGoalAtProfile$.subscribe((candidate) => {
        if(this.isUpdateCareerGoald){
            if(candidate._id!="500"){
              console.log(candidate);
              this.candidateToRender = candidate;
              sessionStorage.setItem('userLogged', JSON.stringify(candidate));
              this.closeTargetDialog();
            }
        }
      }),
      //theo dõi candidate dc delete reference
      this.candidateDeletedReferenceAtProfile$.subscribe((candidate) => {
        if(this.isDeleteReference){
            if(candidate._id!="500"){
              console.log(candidate);
              this.candidateToRender = candidate;
              sessionStorage.setItem('userLogged', JSON.stringify(candidate));
              this.closereFerenceDialog();
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
  isUpdateImage: boolean = false;
  isUpdateImageOfCandidate: boolean = false;
  isDeleteSkill: boolean = false;
  isUpdateSkill: boolean = false;
  isUpdateSkillForDialog: boolean = false;
  isAddSkillForDialog: boolean = false;
  isDeleteEducation: boolean = false;
  isUpdateOneOfSkill: boolean = false;
  isUpdateReferenceOfNgrx: boolean = false;
  isUpdateOneOfReference:boolean= false;
  isDeleteReference: boolean = false;
  isUpdateCarreerGoal: boolean = false;
  isDeleteWorkExperience: boolean = false;
  isDeleteLanguage: boolean = false;
  isAddReference: boolean = false;
  isUpdateReference: boolean = false;
  isUpdateCareerGoald: boolean = false;
  subscriptions: Subscription[] = [];
  candidateToRender: Candidate=<Candidate>{} ;
  isUpdateOneOfEdcation: boolean = false;
  isUpdateOneOfWorkExperience: boolean = false;
  educationToUpdate: Education=<Education>{};
  workExperienceToUpdate: WorkExperience=<WorkExperience>{};
  nullReference: Reference=<Reference>{};
  referenceToUpdate: Reference=<Reference>{};
  nullSkill: Skill=<Skill>{};
  skillToUpdate: Skill=<Skill>{};
  foldernameCreatedAtProfile: string = "";
  careerList: Career[] = [];
  fieldList: Field[] = [];

  //ngrx of candidate
  candidateupdatedEducationAtProfile$ = this.store.select('candidate','candidateUpdatedEducationAtProfile');
  candidateupdatedWorkExperienceAtProfile$ = this.store.select('candidate','candidateUpdatedWorkExperienceAtProfile');
  candidateupdatedLanguageAtProfile$ = this.store.select('candidate','candidateUpdatedLanguageAtProfile');
  candidateupdatedDesiredJobAtProfile$ = this.store.select('candidate','candidateUpdatedDesiredJobAtProfile');
  candidateUpdateBasicInfoAtProfile$ = this.store.select('candidate','candidateUpdatedBasicInfoAtProfile');
  candidateUpdateAdvatarAtProfile$ = this.store.select('candidate','candidateUpdatedAvatarAtProfile');
  candidateUpdateSkillAtProfile$ = this.store.select('candidate','candidateUpdatedSkillAtProfile');
  candidateDeletedSkillAtProfile$ = this.store.select('candidate','candidateDeletedSkillAtProfile');
  candidateDeletedLanguageAtProfile$ = this.store.select('candidate','candidateDeletedLanguageAtProfile');
  candidateDeletedWorkExperienceAtProfile$ = this.store.select('candidate','candidateDeletedWorkExperienceAtProfile');
  candidateDeletedEducationAtProfile$ = this.store.select('candidate','candidateDeletedEducationAtProfile');
  candidateUpdatedOneOfEducationAtProfile$ = this.store.select('candidate','candidateUpdatedOneOfEducationAtProfile');
  candidateUpdatedOneOfWorkExperienceAtProfile$ = this.store.select('candidate','candidateUpdatedOneOfWorkExperienceAtProfile');
  candidateUpdatedReferenceAtProfile$ = this.store.select('candidate','candidateUpdatedReferenceAtProfile');
  candidateUpdatedOneOfSkillAtProfile$ = this.store.select('candidate','candidateUpdatedOneOfSkillAtProfile');
  candidateUpdatedCareerGoalAtProfile$ = this.store.select('candidate','candidateUpdatedCareerGoalAtProfile');
  candidateUpdatedOndOfReferenceAtProfile$ = this.store.select('candidate','candidateUpdatedOneOfReferenceAtProfile');
  candidateDeletedReferenceAtProfile$ = this.store.select('candidate','candidateDeletedReferenceAtProfile');




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

    CareerGoal: new FormControl('', Validators.required),

    JobTitle: new FormControl('', Validators.required),
    School: new FormControl('', Validators.required),
    Reference: new FormControl('', Validators.required),
    NameReference: new FormControl('', Validators.required),
    PositionReference: new FormControl('', Validators.required),
    PhoneReference: new FormControl('', Validators.required),
    CompanyReference: new FormControl('', Validators.required),
    EmailReference: new FormControl('', Validators.required),
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
      School:this.profileForm.value.School,
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
      this.store.dispatch(CandidateActions.updateEducationAtProfile({education: educationData, id: this.candidateToRender._id}));
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
      this.store.dispatch(CandidateActions.updateWorkExperienceAtProfile({workExperience: workExperienceData, id:this.candidateToRender._id}));
    }
  }

  updateLanguage(){
    const language = this.profileForm.value.Language??"";
    // kiểm tra dl có lỗi k nếu có thì cook
    if(language?.length > 0){
      if(!this.isUpdateLanguage){
        this.isUpdateLanguage = true;
      }
      this.store.dispatch(CandidateActions.updateLanguageAtProfile({language: language, id:this.candidateToRender._id}));
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
        console.log(desiredJobData);
        this.store.dispatch(CandidateActions.updateDesiredJobAtProfile({desiredJob: desiredJobData, id:this.candidateToRender._id}));
      }
      else{
        alert('Invalid date');
      }
    }
  }

  updateSkill() {
    const skill = {
      Name: this.profileForm.value.Skill??"",
      SkillId: generateUuid(),
      Level: parseInt(this.profileForm.value.Level??"0"),
    }
    // kiểm tra dl có lỗi k nếu có thì cook
    if(skill?.Name.length > 0){

      
      if(!this.isUpdateSkill){    
        this.isUpdateSkill = true;
      }

      
      this.store.dispatch(CandidateActions.updateSkillAtProfile({skill: skill, id:this.candidateToRender._id}));
    }
    else{
      alert('Invalid date');
    }
  }

  updateOneOfSkill() {
    const skill = {
      _id: this.skillToUpdate._id,
      Name: this.profileForm.value.Skill??"",
      Level: parseInt(this.profileForm.value.Level??"0"),
    }
    // kiểm tra dl có lỗi k nếu có thì cook
    if(skill?.Name.length > 0){
      if(!this.isUpdateOneOfSkill){
        this.isUpdateOneOfSkill = true;
      }
      this.store.dispatch(CandidateActions.updateOneOfSkillAtProfile({skill: skill, id:this.candidateToRender._id}));
    }
    else{
      alert('Invalid date');
    }
  }

  updateOrAddSkill(isUpdate: boolean, isAdd: boolean){
    if(isUpdate){
      this.updateOneOfSkill();
    }
    if(isAdd){
      this.updateSkill();
    }
  }
  updateAvatar(){
    if(this.file){
      let fileName ="ImgOf_"+ this.candidateToRender.Name +"_"+ generateUuid();
      this.foldernameCreatedAtProfile=fileName;
      this.store.dispatch(StorageActions.createAtProfile({fileName:fileName, file:this.file}));
    }
    else{
      alert('Invalid image');
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
      this.store.dispatch(CandidateActions.updateBasicInfoAtProfile({basicInfo: basicInfo, id:this.candidateToRender._id}));
    }
  }

  updateCareerGoal(){
      let careerGoal= this.profileForm.value.CareerGoal;
      console.log(careerGoal);
      
    if(   careerGoal ==""){
      alert('Invalid date');
    }
    else{
      if(!this.isUpdateCareerGoald){
        this.isUpdateCareerGoald = true;
      }
      this.store.dispatch(CandidateActions.updateCareerGoalAtProfile({careerGoal: careerGoal??"", id:this.candidateToRender._id}));
    }
  }

  deleteSkill(skill: Skill){
    console.log(skill);
    if(!this.isDeleteSkill){
      this.isDeleteSkill = true;
    }
    this.store.dispatch(CandidateActions.deleteSkillAtProfile({skill: skill._id, id: this.candidateToRender._id}));
    
  }
  deleteEducation(education: string){
    console.log(education);
    if(!this.isDeleteEducation){
      this.isDeleteEducation = true;
    }
    this.store.dispatch(CandidateActions.deleteEducationAtProfile({education: education, id: this.candidateToRender._id}));
  }

  deleteWorkExperience(workExperience: string){
    console.log(workExperience);
    if(!this.isDeleteWorkExperience){
      this.isDeleteWorkExperience = true;
    }
    this.store.dispatch(CandidateActions.deleteWorkExperienceAtProfile({workExperience: workExperience, id: this.candidateToRender._id}));
    
  }

  deleteLanguage(language: string){
    console.log(language);
    if(!this.isDeleteLanguage){
      this.isDeleteLanguage = true;
    }
    this.store.dispatch(CandidateActions.deleteLanguageAtProfile({language: language, id: this.candidateToRender._id}));
  }
  updateOneOfEducation (){
    let updateOneOfEducationData = {
      _id: this.educationToUpdate._id,
      EducationId: this.educationToUpdate.EducationId,
      Major: this.profileForm.value.Major,
      Degree: this.profileForm.value.Degree,
      School:this.profileForm.value.School,
      StartDate: convertStringToDate(this.profileForm.value.StartDay??""),
      EndDate: convertStringToDate(this.profileForm.value.EndDay??""),
    }
    console.log(updateOneOfEducationData);
    
    // níu dữ liệu lỗi thì cook
    if(updateOneOfEducationData.StartDate==null || updateOneOfEducationData.EndDate ==null|| updateOneOfEducationData.Major==""||updateOneOfEducationData.Degree==""){
      alert('Invalid date');
    }
    else{
      if(!this.isUpdateOneOfEdcation){
        this.isUpdateOneOfEdcation = true;
      }
      this.store.dispatch(CandidateActions.updateOneOfEducationAtProfile({education: updateOneOfEducationData, id: this.candidateToRender._id}));
    }

    
  }
  updateOneOfWorkExperience (){
    let updateOneOfWorkExperienceData = {
      _id: this.workExperienceToUpdate._id,
      WorkExperienceId: this.workExperienceToUpdate.WorkExperienceId,
      JobTitle: this.profileForm.value.JobTitle,
      CompanyName: this.profileForm.value.Company,
      StartDate: convertStringToDate(this.profileForm.value.StartDay??""),
      EndDate: convertStringToDate(this.profileForm.value.EndDay??""),
      Description: this.profileForm.value.Description,
    }
    console.log(updateOneOfWorkExperienceData);
    
    // níu dữ liệu lỗi thì cook
    if(updateOneOfWorkExperienceData.StartDate==null || updateOneOfWorkExperienceData.EndDate ==null|| updateOneOfWorkExperienceData.JobTitle==""||updateOneOfWorkExperienceData.CompanyName==""||updateOneOfWorkExperienceData.Description==""){
      alert('Invalid data');
    }
    else{
      if(!this.isUpdateOneOfWorkExperience){
        this.isUpdateOneOfWorkExperience = true;
      }
      this.store.dispatch(CandidateActions.updateOneOfWorkExperienceAtProfile({workExperience: updateOneOfWorkExperienceData, id:this.candidateToRender._id}));
    }
    
  }


  updateReference(){
    let referenceData = {
      _id: this.referenceToUpdate._id,
      ReferenceId: generateUuid(),
      Name: this.profileForm.value.NameReference,
      Position: this.profileForm.value.PositionReference,
      Company: this.profileForm.value.CompanyReference,
      Phone: this.profileForm.value.PhoneReference,
      Email: this.profileForm.value.EmailReference,
    }
    console.log(referenceData);
    // níu dữ liệu lỗi thì cook
    if(referenceData.Name=="" || referenceData.Position=="" || referenceData.Company=="" || referenceData.Phone=="" || referenceData.Email==""){
      alert('Invalid data');
    }
    else{
      if(!this.isUpdateOneOfReference){
        this.isUpdateOneOfReference = true;
      }
      this.store.dispatch(CandidateActions.updateOneOfReferenceAtProfile({reference: referenceData, id:this.candidateToRender._id}));
    }
  }
  addReference(){
    let referenceData = {
      ReferenceId: generateUuid(),
      Name: this.profileForm.value.NameReference,
      Position: this.profileForm.value.PositionReference,
      Company: this.profileForm.value.CompanyReference,
      Phone: this.profileForm.value.PhoneReference,
      Email: this.profileForm.value.EmailReference,
    }
    console.log(referenceData);
    // níu dữ liệu lỗi thì cook
    if(referenceData.Name=="" || referenceData.Position=="" || referenceData.Company=="" || referenceData.Phone=="" || referenceData.Email==""){
      alert('Invalid data');
    }
    else{
      if(!this.isUpdateReferenceOfNgrx){
        this.isUpdateReferenceOfNgrx = true;
      }
      this.store.dispatch(CandidateActions.updateReferenceAtProfile({references: referenceData, id:this.candidateToRender._id}));
    }

  }

  updateAndAddReference(isUpdate: boolean,isAdd: boolean){
    if(isUpdate){
      this.updateReference();
    }
    if(isAdd){
      this.addReference();
    }
  }
  deleteReference(reference: Reference){
    console.log(reference);
    if(!this.isDeleteReference){
      this.isDeleteReference = true;
    }
    this.store.dispatch(CandidateActions.deleteReferenceAtProfile({reference: reference._id, id: this.candidateToRender._id}));
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
  openSkillDialog(isUpdate: boolean, isAdd: boolean, skill: Skill) {
    this.isUpdateSkillForDialog = isUpdate;
    this.isAddSkillForDialog = isAdd;
    if(isAdd){
      this.profileForm.controls.Skill.setValue('');
      this.profileForm.controls.Level.setValue('');
    }
    if(isUpdate){
      this.skillToUpdate = skill;
      this.profileForm.controls.Skill.setValue(skill.Name);
      this.profileForm.controls.Level.setValue(skill.Level.toString());
    }
    this.skillDialog.nativeElement.showModal();
    this.cdr3.detectChanges();
  }
  closeSkillDialog() {
    this.skillDialog.nativeElement.close();
    this.cdr3.detectChanges();
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
    this.isUpdateImage = true;
  }

  @ViewChild('updateLearnDialog', { static: true })
  updateLearnDialog!: ElementRef<HTMLDialogElement>;
  cdr7 = inject(ChangeDetectorRef);
  openUpdateLearnDialog(education: Education) {
    this.educationToUpdate = education;
    this.profileForm.controls.School.setValue(education.School);
    this.profileForm.controls.Major.setValue(education.Major);
    this.profileForm.controls.StartDay.setValue(parseDate(education.StartDate));
    this.profileForm.controls.EndDay.setValue(parseDate(education.EndDate));
    this.profileForm.controls.Degree.setValue(education.Degree);
    this.updateLearnDialog.nativeElement.showModal();
    this.cdr7.detectChanges();
  }
  closeUpdateLearnDialog() {
    this.updateLearnDialog.nativeElement.close();
    this.cdr7.detectChanges();
  }

  @ViewChild('updateExprienceDialog', { static: true })
  updateExprienceDialog!: ElementRef<HTMLDialogElement>;
  cdr8 = inject(ChangeDetectorRef);
  openUpdateExprienceDialog(workExperience: WorkExperience) {
    this.workExperienceToUpdate = workExperience;
    this.profileForm.controls.Company.setValue(workExperience.CompanyName);
    this.profileForm.controls.JobTitle.setValue(workExperience.JobTitle);
    this.profileForm.controls.StartDay.setValue(parseDate(workExperience.StartDate));
    this.profileForm.controls.EndDay.setValue(parseDate(workExperience.EndDate));
    this.profileForm.controls.Description.setValue(workExperience.Description);

    this.updateExprienceDialog.nativeElement.showModal();
    this.cdr8.detectChanges();
  }
  closeUpdateExprienceDialog() {
    this.updateExprienceDialog.nativeElement.close();
    this.cdr8.detectChanges();
  }

  levelList=[
    {_id: 1, name: 'level 1'},
    {_id: 2, name: 'level 2'},
    {_id: 3, name: 'level 3'},
    {_id: 4, name: 'level 4'},
    {_id: 5, name: 'level 5'},
  ];

  @ViewChild('targetDialog', { static: true })
  targetDialog!: ElementRef<HTMLDialogElement>;
  cdr9 = inject(ChangeDetectorRef);
  openTargetDialog() {
    if(this.candidateToRender.CareerGoal!=""){
      this.profileForm.controls.CareerGoal.setValue(this.candidateToRender.CareerGoal);
    }
    this.targetDialog.nativeElement.showModal();
    this.cdr9.detectChanges();
  }
  closeTargetDialog() {
    this.targetDialog.nativeElement.close();
    this.cdr9.detectChanges();
  }


  @ViewChild('referenceDialog', { static: true })
  referenceDialog!: ElementRef<HTMLDialogElement>;
  cdr10 = inject(ChangeDetectorRef);
  openreFerenceDialog(isAdd: boolean,isUpdate: boolean, reference: Reference) {

    this.isUpdateReference = isUpdate;
    this.isAddReference = isAdd
    if(isAdd){
      this.profileForm.controls.NameReference.setValue('');
      this.profileForm.controls.PositionReference.setValue('');
      this.profileForm.controls.CompanyReference.setValue('');
      this.profileForm.controls.PhoneReference.setValue('');
      this.profileForm.controls.EmailReference.setValue('');
    }
    if(isUpdate){
      this.referenceToUpdate = reference;
      this.profileForm.controls.NameReference.setValue(reference.Name);
      this.profileForm.controls.PositionReference.setValue(reference.Position);
      this.profileForm.controls.CompanyReference.setValue(reference.Company);
      this.profileForm.controls.PhoneReference.setValue(reference.Phone);
      this.profileForm.controls.EmailReference.setValue(reference.Email);
    
    }
    this.referenceDialog.nativeElement.showModal();
    this.cdr10.detectChanges();
  }
  closereFerenceDialog() {
    this.referenceDialog.nativeElement.close();
    this.cdr10.detectChanges();
  }
}
