import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BanService } from './ban.service';
import { CreateBanDto } from './dto/create-ban.dto';
import { UpdateBanDto } from './dto/update-ban.dto';
import { CandidateService } from 'src/candidate/candidate.service';
import { RecruiterService } from 'src/recruiter/recruiter.service';
import { DeleteBanDto } from './dto/delete-ban.dto';
import { log } from 'console';

@Controller('ban')
export class BanController {
  constructor(
    private readonly banService: BanService,
    private readonly CandidateService: CandidateService,
    private readonly recruiterService: RecruiterService
  ) {}

  @Post('create')
  async create(@Body() createBanDto: CreateBanDto) {
    try{
      if(createBanDto.Candidate){
        const banAlreadyExist = await this.banService.findByCandidate(createBanDto.Candidate);
        log(banAlreadyExist._id, "banAlreadyExist")
        if(banAlreadyExist._id=="500"){        
          const result = await this.CandidateService.banCandidate(createBanDto.Candidate);
          log(result, "result")
          if(result){
            const newBan = await this.banService.create(createBanDto);
            log(newBan)
            return newBan;
          }
        }else{ 
          log("ban already exist")
          return false
        }
      } else if(createBanDto.Recruiter){
        const banAlreadyExist = await this.banService.findByRecruiter(createBanDto.Recruiter);
        console.log(banAlreadyExist._id, "banAlreadyExist")
        if(banAlreadyExist._id=="500"){  
          const result = await this.recruiterService.banRecruiter(createBanDto.Recruiter);
          if(result){
            const newBan = await this.banService.create(createBanDto);
            return newBan;
          }else{
            return false
          }
        }else return false

      }
    } catch(error){
      log("error: ",error)
      return false
    }
  }

  @Delete('delete')
  async delete(@Body() deleteBanDto: DeleteBanDto){
    if(deleteBanDto.ForCandidate){
      const result = await this.CandidateService.unBanCandidate(deleteBanDto.User);
      if(result){
        return await this.banService.delete(deleteBanDto._id);
      }else{
        return false
      }
    }else if(deleteBanDto.ForRecruiter){
      const result = await this.recruiterService.unBanRecruiter(deleteBanDto.User);
      if(result){
        return await this.banService.delete(deleteBanDto._id);
      }else{
        return false
      }
    }
  }



}
