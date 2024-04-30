import { Component,ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ShareModule } from '../../../shared/shared.module';
import { TaigaModule } from '../../../shared/taiga.module';
import { Store } from '@ngrx/store';
import {FormControl, FormGroup, Validators} from '@angular/forms';


import { jobState } from '../../../ngrx/states/job.state';
import { FieldState } from '../../../ngrx/states/field.state';
import { CareerState } from '../../../ngrx/states/career.state';

import * as JobActions from '../../../ngrx/actions/job.actions';
import * as FieldActions from '../../../ngrx/actions/field.actions';
import * as CareerActions from '../../../ngrx/actions/career.actions';

import { Job } from '../../../models/job.model';
import { Field } from '../../../models/field.model';
import { Career } from '../../../models/career.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { candidateState } from '../../../ngrx/states/candidate.state';
import * as CandidateActions from '../../../ngrx/actions/candidate.actions';
import { Candidate } from '../../../models/candidate.model';


@Component({
  selector: 'app-job',
  standalone: true,
  imports: [ShareModule,TaigaModule ],
  templateUrl: './job.component.html',
  styleUrl: './job.component.less',
  
})
export class JobComponent implements OnDestroy{

  subscriptions: Subscription[] = [];


  //variables
  isGetByLocation: boolean = false;
  isGetByField: boolean = false;
  isGetByFieldName: boolean = false;
  isGetByCareer: boolean = false;
  isGetAll: boolean = false;
  isGetByKeyword: boolean = false;
  isGetAllAndSortSuccess: boolean = false;
  isGetByKeywordSuccess: boolean = false;
  isGetByCareerSuccess: boolean = false;
  isGetByFieldSuccess: boolean = false;
  isGetByFieldNameSuccess: boolean = false;
  isGetByLocationSuccess: boolean = false;

  page: number = 0;
  fieldId: string = "";
  isUpdatedFavoriteJob: boolean = false;
  isDeletedFavoriteJob: boolean = false;
  jobToRender: Job[] = [];
  fieldList: readonly string[] = [];
  careerList: readonly string[] = [];
  candidateLogged: Candidate = <Candidate>{};


  // ngrx of job
  isGetAllAndSortAtJobSuccess$ = this.store.select('job', 'isGetAllAndSortAtJobSuccess');
  jobsTakenByAllAndSort$ = this.store.select('job', 'JobTakenBygetAllAndSortAtJob');
  isGetByFieldSuccess$ = this.store.select('job', 'isGetByFieldAtJobSuccess');
  jobsTakenByField$ = this.store.select('job', 'jobsTakenByFieldAtJob');
  isGetByFieldNameSuccess$ = this.store.select('job', 'isGetByFieldNameAtJobSuccess');
  jobTakenByFieldName$ = this.store.select('job', 'JobTakenByFieldNameAtJob');
  isGetByCareerSuccess$ = this.store.select('job', 'isGetByCareerNameAtJobSuccess');
  jobTakenByCareerName$ = this.store.select('job', 'JobTakenByCareerNameAtJob');
  isGetByLocationSuccess$ = this.store.select('job', 'isGetByLocationAtJobSuccess');
  jobTakenByLocation$ = this.store.select('job', 'jobsTakenByLocationAtJob');
  isGetByKeywordSuccess$ = this.store.select('job', 'isGetByKeywordAtJobSuccess');
  jobTakenByKeyword$ = this.store.select('job', 'jobsTakenByKeywordAtJob');

  // ngrx of field
  fieldNoLimitAtJob$ = this.store.select('field','fieldNoLimitAtJob');

  //ngrx of career
  careersTakenByGetAllAtJob$ = this.store.select('career','careersTakenByGetAllAtJob');  
  careerTakenByFieldName$ = this.store.select('career','careersTakenByGetByFieldNameAtJob')

  //ngrx of candidate
  candidateUpdatedFavoriteJob$ = this.store.select('candidate','candidateUpdatedFavoriteJobAtJob');
  candidateDeletedFavoriteJob$ = this.store.select('candidate','candidateDeletedFavoriteJobAtJob');


  searchForm = new FormGroup({
    Keyword: new FormControl('', Validators.required),
  })



  constructor(
    private store: Store<{ job: jobState, field : FieldState, career : CareerState, candidate: candidateState }>,
    private route: ActivatedRoute,
    private router: Router
  ){
    this.fieldId = this.route.snapshot.paramMap.get('fieldId')??"";
    if(this.fieldId.length > 0){
      this.isGetAll = false;
      this.isGetByField = true;
      this.isGetByCareer = false;
      this.isGetByLocation = false;
      this.isGetByKeyword = false;
      this.store.dispatch(JobActions.getByFieldAtJob({field: this.fieldId, page: 0, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
    }else{
      this.isGetAll = true;
      this.isGetByField = false;
      this.isGetByCareer = false;
      this.isGetByLocation = false;
      this.isGetByKeyword = false;
      this.store.dispatch(JobActions.getAllAndSortAtJob({page: this.page, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
    }
    
    let userLogged = sessionStorage.getItem('userLogged');
    if(userLogged){
      let userAfterParse = JSON.parse(userLogged) as Candidate;
      if(userAfterParse?._id.length > 0 && userAfterParse?._id != ""){
        this.candidateLogged = userAfterParse;
        console.log(this.candidateLogged);
        
      }
    }

    this.store.dispatch(FieldActions.getAllNoLimit());
    this.store.dispatch(CareerActions.getAllAtJobs());
    this.subscriptions.push(
      // subscribe to ngrx of isGetAllAndSortAtJobSuccess
      this.isGetAllAndSortAtJobSuccess$.subscribe((isSuccess)=>{
        if(isSuccess){
          this.isGetAllAndSortSuccess = isSuccess;
        }
      }),

      //subscribe to ngrx of getAllAndSortAtJob
      this.jobsTakenByAllAndSort$.subscribe((jobs)=>{
        if(jobs.length>0){
          this.jobToRender = jobs;
        }else if(this.isGetAll && this.isGetAllAndSortSuccess){
          if(this.page>0){
            this.page--;
          }
          alert("Không có công việc nào");
        }
      }),
      //subscribe to ngrx of isGetByFieldAtJobSuccess
      this.isGetByFieldSuccess$.subscribe((isSuccess)=>{
        if(isSuccess){
          this.isGetByFieldSuccess = isSuccess;
        }
      }),
      //subscribe to ngrx of jobsTakenByFieldAtJob
      this.jobsTakenByField$.subscribe((jobs)=>{        
        if(jobs.length>0){
          this.jobToRender = jobs;
        }else if(this.isGetByField&&this.isGetByFieldSuccess){
          if(this.page>0){
            this.page--;
          }
          alert("Không có công việc nào");
        }
      }),
      
      //subscribe to ngrx of fieldNoLimitAtJob
      this.fieldNoLimitAtJob$.subscribe((fields)=>{
        if(fields.length>0){
          //lấy ra danh sách các field name
          this.fieldList = fields.map(field => field.FieldName);
        }
      }),
      
      //subscribe to ngrx of careersTakenByGetAllAtJob
      this.careersTakenByGetAllAtJob$.subscribe((careers)=>{
        if(careers.length>0){

          //lấy ra danh sách các industry name
          this.careerList = careers.map(career => career.Name);
        }
      }),
      //subscribe to ngrx of isGetByFieldNameAtJobSuccess
      this.isGetByFieldNameSuccess$.subscribe((isSuccess)=>{
        if(isSuccess){
          this.isGetByFieldNameSuccess = isSuccess;
        }
      }),
      //subscribe to ngrx of getByFieldNameAtJob
      this.jobTakenByFieldName$.subscribe((jobs)=>{
        if(jobs.length>0){
          this.jobToRender = jobs;
        } else if(this.isGetByFieldName&&this.isGetByFieldNameSuccess){
          if(this.page>0){
            this.page--;
          }
          alert("Không có công việc nào");
        }
      }),
      //subscribe to ngrx of isGetByCareerNameAtJobSuccess
      this.isGetByCareerSuccess$.subscribe((isSuccess)=>{
        if(isSuccess){
          this.isGetByCareerSuccess = isSuccess;
        }
      }),
      //subscribe to ngrx of getByCareerNameAtJob
      this.jobTakenByCareerName$.subscribe((jobs)=>{
        if(jobs.length>0){
          this.jobToRender = jobs;
        } else if(this.isGetByCareer&&this.isGetByCareerSuccess){
          if(this.page>0){
            this.page--;
          }
          alert("Không có công việc nào");
        }
      }),

      //subscribe to ngrx of getByFieldNameAtJob
      this.careerTakenByFieldName$.subscribe((careers)=>{
        console.log("CAREER: ", careers);
        
        if(careers.length>0){
          console.log("CAREER: ", careers);
          
          this.careerList = careers.map(career => career.Name);
        }
      }),
      //subscribe to ngrx of isGetByLocationAtJobSuccess
      this.isGetByLocationSuccess$.subscribe((isSuccess)=>{
        if(isSuccess){
          this.isGetByLocation = isSuccess;
        }
      }),
      //subscribe to ngrx of getByLocationdWithKeywordsAtJob
      this.jobTakenByLocation$.subscribe((jobs)=>{
        if(jobs.length>0){
          this.jobToRender = jobs;
        }else if(this.isGetByLocation&&this.isGetByLocationSuccess){
          if(this.page>0){
            this.page--;
          }
          alert("Không có công việc nào");
        }
      }),

      //subscribe to ngrx of candidateUpdatedFavoriteJobAtJob
      this.candidateUpdatedFavoriteJob$.subscribe((candidate)=>{
        if(this.isUpdatedFavoriteJob){
          if(candidate._id !="500"){
            this.candidateLogged = candidate;
            sessionStorage.setItem('userLogged', JSON.stringify(candidate));
          }
        }
      }),

      //subscribe to ngrx of candidateDeletedFavoriteJobAtJob
      this.candidateDeletedFavoriteJob$.subscribe((candidate)=>{
        if(this.isDeletedFavoriteJob){
          if(candidate._id !="500"){
            this.candidateLogged = candidate;
            sessionStorage.setItem('userLogged', JSON.stringify(candidate));
          }
        }
      }),
      //subscribe to ngrx of isGetByKeywordAtJobSuccess
      this.isGetByKeywordSuccess$.subscribe((isSuccess)=>{
        if(isSuccess){
          this.isGetByKeywordSuccess = isSuccess;
        }
      }),
      //subscribe to ngrx of getByKeywordAtJob
      this.jobTakenByKeyword$.subscribe((jobs)=>{
        if(jobs.length>0){
          this.jobToRender = jobs;
        }else if(this.isGetByKeyword&&this.isGetByKeywordSuccess){
          if(this.page>0){
            this.page--;
          }
          alert("Không có công việc nào");
        }
      })

      
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
    JobActions.resetState();
  }

  //check favorite
  checkFavoriteJob(job: Job){
    let isFavorite = 'iconHeartNotFilled';
    if(this.candidateLogged.FavoriteJobs ==undefined){
      return isFavorite;
    }
    else{    
      this.candidateLogged.FavoriteJobs.forEach(favoriteJob => {
        if(favoriteJob._id == job._id){
          isFavorite = 'iconHeartFilled';
        }
      });      
      return isFavorite;
    }
  }

  updatedAndDeleteFavoriteJob(job: Job){
    if(this.candidateLogged._id!=undefined){
      console.log("JOB: ", job);
      
      if(!this.isUpdatedFavoriteJob){
        this.isUpdatedFavoriteJob = true;
      }
      let result = this.checkFavoriteJob(job);
      if(result == 'iconHeartFilled'){
        if(!this.isDeletedFavoriteJob){
          this.isDeletedFavoriteJob = true;
        }
        this.store.dispatch(CandidateActions.deleteFavoriteJobAtJob({id:this.candidateLogged._id,jobId: job._id}));
      }else if(result == 'iconHeartNotFilled'){
        if(this.isUpdatedFavoriteJob){
          this.isUpdatedFavoriteJob = true;
        }
        this.store.dispatch(CandidateActions.updateFavoriteJobsAtJob({id:this.candidateLogged._id,jobId: job._id}));
      }
    }
    else{
      this.router.navigate(['/login']);
    }
  }


  fieldValue: any;
  onFieldValueChange() {
    console.log("Giá trị đã chọn là: ", this.fieldValue);
    if(this.fieldValue != null){
      this.isGetAll = false;
      this.isGetByField = false;
      this.isGetByFieldName = true;
      this.isGetByCareer = false;
      this.isGetByLocation = false;
      this.isGetByKeyword = false;
      if(this.page>0){
        this.page = 0;
      }
      this.store.dispatch(JobActions.getByFieldNameAtJob({fieldName: this.fieldValue, page: 0, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
      this.store.dispatch(CareerActions.getByFieldNameAtJob({fieldName: this.fieldValue}));
    }else{
      this.isGetAll = true;
      this.isGetByField = false;
      this.isGetByCareer = false;
      this.isGetByFieldName = false;
      this.isGetByLocation = false;
      this.isGetByKeyword = false;
      if(this.page>0){
        this.page = 0;
      }
      this.store.dispatch(CareerActions.getAllAtJobs());
      this.store.dispatch(JobActions.getAllAndSortAtJob({page: 0, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
    }
  }

  careerValue:any;
  onCareerValueChange(){
    console.log("Giá trị đã chọn là: ", this.careerValue);
    if(this.careerValue != null){
      this.isGetAll = false;
      this.isGetByField = false;
      this.isGetByCareer = true;
      this.isGetByFieldName = false;
      this.isGetByLocation = false;
      this.isGetByKeyword = false;
      if(this.page>0){
        this.page = 0;
      }
      this.store.dispatch(JobActions.getByCareerNameAtJob({careerName: this.careerValue, page: 0, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
    }else{
      this.isGetAll = true;
      this.isGetByField = false;
      this.isGetByCareer = false;
      this.isGetByFieldName = false;
      this.isGetByLocation = false;
      this.isGetByKeyword = false;
      if(this.page>0){
        this.page = 0;
      }
      this.store.dispatch(JobActions.getByFieldNameAtJob({fieldName: this.fieldValue, page: 0, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));

    }
  }
  
  locationValue = '';
  locationValueChange(){
    console.log("Giá trị đã chọn là: ", this.locationValue);
    if(this.locationValue != null){
      this.isGetAll = false;
      this.isGetByField = false;
      this.isGetByFieldName = false;
      this.isGetByCareer = false;
      this.isGetByLocation = true;
      this.isGetByKeyword = false;
      if(this.page>0){
        this.page = 0;
      }
      this.store.dispatch(JobActions.getByLocationdWithKeywordsAtJob({location: this.locationValue, page: 0, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
    }else{
      if(this.page>0){
        this.page = 0;
      }
      this.isGetAll = true;
      this.isGetByField = false;
      this.isGetByFieldName = false;
      this.isGetByCareer = false;
      this.isGetByLocation = false;
      this.isGetByKeyword = false;
      this.store.dispatch(JobActions.getAllAndSortAtJob({page: 0, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
    }
  }

  searchByKeyword():void {
    this.isGetAll = false;
    this.isGetByField = false;
    this.isGetByFieldName = false;
    this.isGetByCareer = false;
    this.isGetByLocation = false;
    this.isGetByKeyword = true;
    if(this.page>0){
      this.page = 0;
    }
    this.store.dispatch(JobActions.getByKeywordAtJob({keyword: this.searchForm.value.Keyword??"", page: 0, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
  }

  nextJobs(){
    this.page++;
    if(this.isGetByCareer){
      this.store.dispatch(JobActions.getByCareerNameAtJob({careerName: this.careerValue, page: this.page, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
    }else if(this.isGetByField){
      this.store.dispatch(JobActions.getByFieldAtJob({field: this.fieldId, page: this.page, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
    } else if(this.isGetByLocation){
      this.store.dispatch(JobActions.getByLocationdWithKeywordsAtJob({location: this.locationValue, page: this.page, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
    }else if(this.isGetByKeyword){
      this.store.dispatch(JobActions.getByKeywordAtJob({keyword: this.searchForm.value.Keyword??"", page: this.page, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
    }else if(this.isGetAll){
      this.store.dispatch(JobActions.getAllAndSortAtJob({page: this.page, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
    } else if(this.isGetByFieldName){
      this.store.dispatch(JobActions.getByFieldNameAtJob({fieldName: this.fieldValue, page: this.page, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
    }

  }
  previousJobs(){
    if(this.page > 0){
      this.page--;
      if(this.isGetByCareer){
        this.store.dispatch(JobActions.getByCareerNameAtJob({careerName: this.careerValue, page: this.page, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
      }else if(this.isGetByField){
        this.store.dispatch(JobActions.getByFieldAtJob({field: this.fieldId, page: this.page, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
      } else if(this.isGetByLocation){
        this.store.dispatch(JobActions.getByLocationdWithKeywordsAtJob({location: this.locationValue, page: this.page, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
      } else if(this.isGetByKeyword){
        this.store.dispatch(JobActions.getByKeywordAtJob({keyword: this.searchForm.value.Keyword??"", page: this.page, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
      }else if(this.isGetAll){
        this.store.dispatch(JobActions.getAllAndSortAtJob({page: this.page, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
      }else if(this.isGetByFieldName){
        this.store.dispatch(JobActions.getByFieldNameAtJob({fieldName: this.fieldValue, page: this.page, limit: 9, sortBy: "createdAt", sortOrder: "desc"}));
      }
    }

  }

  readonly locationList = [
    "An Giang",
    "Bà Rịa-Vũng Tàu",
    "Bắc Giang",
    "Bắc Kạn",
    "Bạc Liêu",
    "Bắc Ninh",
    "Bến Tre",
    "Bình Định",
    "Bình Dương",
    "Bình Phước",
    "Bình Thuận",
    "Cà Mau",
    "Cao Bằng",
    "Đắk Lắk",
    "Đắk Nông",
    "Điện Biên",
    "Đồng Nai",
    "Đồng Tháp",
    "Gia Lai",
    "Hà Giang",
    "Hà Nam",
    "Hà Tĩnh",
    "Hải Dương",
    "Hậu Giang",
    "Hòa Bình",
    "Hưng Yên",
    "Khánh Hòa",
    "Kiên Giang",
    "Kon Tum",
    "Lai Châu",
    "Lâm Đồng",
    "Lạng Sơn",
    "Lào Cai",
    "Long An",
    "Nam Định",
    "Nghệ An",
    "Ninh Bình",
    "Ninh Thuận",
    "Phú Thọ",
    "Quảng Bình",
    "Quảng Nam",
    "Quảng Ngãi",
    "Quảng Ninh",
    "Quảng Trị",
    "Sóc Trăng",
    "Sơn La",
    "Tây Ninh",
    "Thái Bình",
    "Thái Nguyên",
    "Thanh Hóa",
    "Thừa Thiên Huế",
    "Tiền Giang",
    "Trà Vinh",
    "Tuyên Quang",
    "Vĩnh Long",
    "Vĩnh Phúc",
    "Yên Bái",
    "Hà Nội",
    "Hồ Chí Minh"
  ];

  navigateToJobDetail(jobId: string) {
    this.router.navigate(['/job-detail',{
      jobId: jobId
    }]);
  }


  onSelectionChange(_id: string) {
    console.log("Giá trị đã chọn là: ", _id);
  }

  
  testForm = new FormGroup({
    testValue2: new FormControl(false),
  });


}
