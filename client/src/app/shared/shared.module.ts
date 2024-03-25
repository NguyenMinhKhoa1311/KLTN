import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, InfiniteScrollModule ],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule,InfiniteScrollModule ],
})
export class ShareModule {}