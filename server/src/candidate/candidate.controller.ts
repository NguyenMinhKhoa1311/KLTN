import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { EducationService } from 'src/education/education.service';
import { CreateEducationDto } from 'src/education/dto/create-education.dto';
import { CreateWorkExperienceDto } from 'src/work-experience/dto/create-work-experience.dto';
import { WorkExperienceService } from 'src/work-experience/work-experience.service';
import { log } from 'console';
import { DesiredJobService } from 'src/desired-job/desired-job.service';
import { CreateDesiredJobDto } from 'src/desired-job/dto/create-desired-job.dto';
import { storage } from 'firebase-admin';
import { CreateStorageDto } from 'src/storage/dto/create-storage.dto';

@Controller('candidate')
export class CandidateController {
  constructor(
    private readonly candidateService: CandidateService,
    private readonly educationService: EducationService,
    private readonly workExperienceService: WorkExperienceService,

    private readonly desiredJobService: DesiredJobService
    ) {}

  @Post('create')
  async create(@Body() createCandidateDto: CreateCandidateDto) {
    try{
      const newCandidate = await this.candidateService.create(createCandidateDto)
      return newCandidate;
    }
    catch(error){
      throw error;
    }
  }

  @Get('getAll')
  async findAll() {
    return this.candidateService.findAll();
  }

  @Get('getByUser')
  async findByUser(@Query('user') user:string){
    try{
      const candidate = await this.candidateService.findByUser(user);
      return candidate;
    }
    catch(error){
      throw error;
    }
  }

  @Put('updateEducation')
  async updateEducation(@Body() createEducationDto: CreateEducationDto, @Query('id') id: string){
    try{
      const newEducation = await this.educationService.create(createEducationDto);
      if(newEducation._id.toString()=="500"){
        return {
          _id: "500",
        }
      }
      const candidate = await this.candidateService.updateEducation(id, newEducation._id.toString());
      if(candidate._id.toString() !="500"){
        return candidate;
      }
      else{
        return {
          _id: "500",
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }

  @Put('updateWorkExperience')
  async updateWorkExperience(@Query('id') id: string, @Body()createWorkExperienceDto: CreateWorkExperienceDto){
    try{
      const workExperience = await this.workExperienceService.create(createWorkExperienceDto);
      if(workExperience._id.toString()=="500"){
        return {
          _id: "500",
        }
      }
      const candidate = await this.candidateService.updateWorkExperience(id, workExperience._id.toString());
      if(candidate._id.toString()!="500"){
        return candidate;
      }
      else{
        return {
          _id: "500",
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }

  @Put('updateSkills')
  async updateSkill(@Query('id') id: string, @Query('skill')skill: string){
    try{
      const candidate = await this.candidateService.updateSkill(id, skill);
      if(candidate._id.toString()!="500"){
        return candidate;
      }
      else{
        return {
          _id: "500",
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }


  @Put('updateAvatar')
  async updateAvatar(@Query('id') id: string, @Body() storage: any){
    try{
      const candidate = await this.candidateService.updateAvatar(id, storage);
      if(candidate._id.toString()!="500"){
        return candidate;
      }
      else{
        return {
          _id: "500",
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }

  @Put('UpdateFavoriteJobs')
  async updateFavoriteJobs(@Query('id') id: string, @Query('job_id') job_id: string){
    try{
      const candidate = await this.candidateService.updateFavoriteJobs(id, job_id);
      if(candidate._id.toString()!="500"){
        return candidate;
      }
      else{
        return {
          _id: "500",
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }

  @Put('updateBasicInfo')
  async updateBasicInfo(@Query('id') id: string, @Body() updateCandidateDto: UpdateCandidateDto){
    try{
      const candidate = await this.candidateService.updateBasicInfo(id,updateCandidateDto );
      if(candidate._id.toString()!="500"){
        return candidate;
      }
      else{
        return {
          _id: "500",
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }

  @Put('updateLanguage')
  async updateLanguage(@Query('id') id: string, @Query('language') language: string){
    try{
      const candidate = await this.candidateService.updateLanguage(id, language);
      if(candidate._id.toString()!="500"){
        return candidate;
      }
      else{
        return {
          _id: "500",
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }

  @Put('updateDesiredJob')
  async updateDesiredJob(@Query('id') id: string, @Body() createDesiredJobDto: CreateDesiredJobDto){
    try{
      const desiredJob = await this.desiredJobService.create(createDesiredJobDto);
      log(desiredJob)
      if(desiredJob._id.toString()=="500"){
        return {
          _id: "500",
        }
      }
      log(desiredJob._id.toString())
      log(id)
      const candidate = await this.candidateService.updateDesiredJob(id, desiredJob._id.toString());
      if(candidate._id.toString()!="500"){
        return candidate;
      }
      else{
        return {
          _id: "500",
        }
      }

    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }

  @Put('DeleteFavoriteJobs')
  async deleteFavoriteJobs(@Query('id') id: string, @Query('job_id') job_id: string){
    try{
      const candidate = await this.candidateService.deleteFavoriteJobs(id, job_id);
      if(candidate._id.toString()!="500"){
        return candidate;
      }
      else{
        return {
          _id: "500",
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }


  @Put('DeleteSkills')
  async deleteSkills(@Query('id') id: string, @Query('skill') skill: string){
    try{
        const candidate = await this.candidateService.deleteSkills(id, skill);
        if(candidate._id.toString()!="500"){
          return candidate;
        }
        else{
          return {
            _id: "500",
          }
        }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }

  @Put('DeleteWorkExperience')
  async deleteWorkExperience(@Query('id') id: string, @Query('work_experience_id') work_experience_id: string){
    try{
      const result = this.workExperienceService.delete(work_experience_id);
      if(result){
        const candidate = await this.candidateService.deleteWorkExperience(id, work_experience_id);
        if(candidate._id.toString()!="500"){
          return candidate;
        }
        else{
          return {
            _id: "500",
          }
        }
      }
      else{
        return {
          _id: "500",
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }

  @Put('UpdateOneOfEducation')
  async updateOneOfEducation(@Query('id') id: string, @Body() education: any){
    try{
      const educationAfterUpdate = await this.educationService.update(education);
      if(educationAfterUpdate._id!="500"){
        const candidate = await this.candidateService.findById(id);
        if(candidate._id.toString()!="500"){
          return candidate;
        }
        else{
          return {
            _id: "500",
          }
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }

  @Put('UpdateOneOfWorkExperience')
  async updateOneOfWorkExperience(@Query('id') id: string, @Body() workExperience: any){
    try{
      const workExperienceAfterUpdate = await this.workExperienceService.update(workExperience);
      if(workExperienceAfterUpdate._id!="500"){
        const candidate = await this.candidateService.findById(id);
        if(candidate._id.toString()!="500"){
          return candidate;
        }
        else{
          return {
            _id: "500",
          }
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }

  

  @Put('DeleteEducation')
  async deleteEducation(@Query('id') id: string, @Query('education_id') education_id: string){
    try{
      const result = this.educationService.delete(education_id);
      if(result){
        const candidate = await this.candidateService.deleteEducation(id, education_id);
        if(candidate._id.toString()!="500"){
          return candidate;
        }
        else{
          return {
            _id: "500",
          }
        }
      }
      else{
        return {
          _id: "500",
        }
      }

    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }

  @Put('deleteLanguage')
  async deleteLanguage(@Query('id') id: string, @Query('language') language: string){
    try{
      const candidate = await this.candidateService.deleteLanguage(id, language);
      if(candidate._id.toString()!="500"){
        return candidate;
      }
      else{
        return {
          _id: "500",
        }
      }
    }
    catch(error){
      return {
        _id: "500",
      }
    }
  }


  


}
