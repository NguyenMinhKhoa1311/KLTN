import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
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
  async delete(@Query('ban') ban: string, @Query('user') User: string, @Query('forCandidate') ForCandidate: string, @Query('forRecruiter') ForRecruiter: string) {
    const deleteBanDto: DeleteBanDto = {
      _id: ban,
      User: User,
      ForCandidate: false,
      ForRecruiter: false
    }
    if(ForCandidate=="true"){
      deleteBanDto.ForCandidate = true;
    }
    if(ForRecruiter=="true"){
      deleteBanDto.ForRecruiter = true;
    }
    log(deleteBanDto, "deleteBanDto")
    if(deleteBanDto.ForCandidate){
      const result = await this.CandidateService.unBanCandidate(deleteBanDto.User);
      log(result, "result")
      if(result){
        return await this.banService.delete(deleteBanDto._id);
      }else{
        return false
      }
    }
    log(deleteBanDto.ForCandidate, "deleteBanDto.ForCandidate")
    log(deleteBanDto.ForRecruiter, "deleteBanDto.ForRecruiter")
    if(deleteBanDto.ForRecruiter){
      const result = await this.recruiterService.unBanRecruiter(deleteBanDto.User);
      log(result, "result")
      if(result){
        return await this.banService.delete(deleteBanDto._id);
      }else{
        return false
      }
    }
  }

  @Get('getByCandidate')
  async findByCandidate(@Query('candidate') candidate: string){
    return await this.banService.findByCandidate(candidate);
  }
  @Get('getByRecruiter')
  async findByRecruiter(@Query('recruiter') recruiter: string){
    return await this.banService.findByRecruiter(recruiter);
  }




}
