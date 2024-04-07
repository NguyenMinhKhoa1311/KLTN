import { ChangeDetectorRef, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ShareModule } from '../../../shared/shared.module';
import { TaigaModule } from '../../../shared/taiga.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { candidateState } from '../../../ngrx/states/candidate.state';
import { convertToDatetime, generateUuid } from '../../../../environments/environments';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ShareModule, TaigaModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.less'
})
export class ProfileComponent {
  constructor(
    private store: Store<{
      candidate: candidateState,

    }>
  ) {
    let userLogged = sessionStorage.getItem('userLogged');
    if(userLogged){
      let userAfterParse = JSON.parse(userLogged);
      if(userAfterParse?._id.length > 0&&userAfterParse!=null&&userAfterParse!="null"&&userAfterParse!="undefined"&&userAfterParse?._id!=""){
        console.log('userLogged',userLogged);
  
      }
    }
   }

  profileForm = new FormGroup({
    Name: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Phone: new FormControl('', Validators.required),
    Address: new FormControl('', Validators.required),
    Experience: new FormControl('', Validators.required),

    Position: new FormControl('', Validators.required),
    Company: new FormControl('', Validators.required),
    StartDay: new FormControl('', Validators.required),
    EndDay: new FormControl('', Validators.required),
    Description: new FormControl('', Validators.required),

    Major: new FormControl('', Validators.required),
    Achievement: new FormControl('', Validators.required),
    Skill: new FormControl(''),
    Language: new FormControl(''),

    Location: new FormControl('', Validators.required),
    Salary: new FormControl('', Validators.required),
  });


  updateEducation(){
    let educationData = {
      EducationId: generateUuid(),
      Major: this.profileForm.value.Major,
      Degree: this.profileForm.value.Achievement,
      StartDate: convertToDatetime(this.profileForm.value.StartDay??""),
      EndDate: convertToDatetime(this.profileForm.value.EndDay??""),
    }
    console.log(educationData);
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
  
}
