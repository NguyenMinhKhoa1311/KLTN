import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReferencesService } from './references.service';
import { CreateReferenceDto } from './dto/create-reference.dto';
import { UpdateReferenceDto } from './dto/update-reference.dto';

@Controller('references')
export class ReferencesController {
  constructor(private readonly referencesService: ReferencesService) {}

  @Post("create")
  async create(@Body() createReferenceDto: CreateReferenceDto) {
    try{
       const reference = await this.referencesService.create(createReferenceDto);
       if(reference._id.toString().length > 0){
         return reference;
       }
       else{
         return {
           _id: "500",
         };
       }
    }
    catch(error){
      return {
        _id: "500",
        error: error
      }
    }
  }


}
