import { Component, OnDestroy } from '@angular/core';
import { ShareModule } from '../../../shared/shared.module';
import { TaigaModule } from '../../../shared/taiga.module';
import { ActivatedRoute, Router } from '@angular/router';
import { jobState } from '../../../ngrx/states/job.state';
import { TuiAlertService } from '@taiga-ui/core';
import { Store } from '@ngrx/store';
import { ServicePackageState } from '../../../ngrx/states/service-package.state';
import * as ServicePackageActions from '../../../ngrx/actions/service-package.actions';
import * as JobActions from '../../../ngrx/actions/job.actions';
import { Subscription } from 'rxjs';
import { Job } from '../../../models/job.model';
import { ServicePackage } from '../../../models/service-package.model';
import { generateUuid } from '../../../../environments/environments';
import { PaymentSate } from '../../../ngrx/states/payment.state';
import * as PaymentActions from '../../../ngrx/actions/payment.actions';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [ShareModule, TaigaModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.less'
})
export class PaymentComponent implements OnDestroy{



  subscriptions: Subscription[] = [];
  parseDate(date: string | number | Date): Date {
    return new Date(date);
  }

  //variables
  jobId: string = "";
  jobToRender: Job = <Job>{};
  servicePackageAtPayment: ServicePackage = <ServicePackage>{};
  isGetJobSuccess: boolean = false;


  //ngrx of job
  jobAtPayment$ = this.store.select('job', 'jobTakenByIdAtPayment');

  //ngrx of service package
  servicePackageAtPayment$ = this.store.select('servicePackage', 'servicePackageAtPayment');

  //ngrx of payment
  paymentAtPayment$ = this.store.select('payment', 'paymentCreatedAtConfirmPayment');

  constructor(
    private route: ActivatedRoute,
    private store : Store<{job: jobState, servicePackage: ServicePackageState, payment: PaymentSate}>,
    private readonly alerts: TuiAlertService,
    private router: Router,
    ) {
      this.jobId =this.route.snapshot.queryParamMap.get('job')??"";
      this.store.dispatch(JobActions.getByJobIdAtPayment({id: this.jobId}));
      this.subscriptions.push(
        this.jobAtPayment$.subscribe(job => {
          if(job._id){
            console.log("job: ", job);
            
            this.jobToRender = job;
            this.isGetJobSuccess = true;
            this.store.dispatch(ServicePackageActions.getByIdAtPayment({id: job.ServicePackage._id}));
          }
        }),
        this.servicePackageAtPayment$.subscribe(servicePackage => {
          if(servicePackage._id){
            this.servicePackageAtPayment = servicePackage;
          }
        }),
        this.paymentAtPayment$.subscribe(payment => {
          if(payment.status){
            console.log("payment: ", payment);
            window.location.href = payment.data.shortLink;
          }
        })
      );


    }
  
  payment(){
    const bill = {
      BillId: generateUuid(),
      Voucher: "6642b2cebcf7b121f84366d3",
      Job: this.jobToRender._id,
      ServicePackage: this.servicePackageAtPayment._id,
      Total: this.servicePackageAtPayment.Price,
      Discount: 0,
      GrandTotal: this.servicePackageAtPayment.Price,
      DatePayment: new Date(),
      Recruiter: this.jobToRender.Recruiter,
      Field: this.jobToRender.Field._id,
      Company: this.jobToRender.Company._id,
      Career: this.jobToRender.Career._id,
    }
    console.log("bill: ", bill);
    this.store.dispatch(PaymentActions.createAtConfirmPayment({bill: bill}));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
