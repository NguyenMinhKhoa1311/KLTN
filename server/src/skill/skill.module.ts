import { Module } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillController } from './skill.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillSchema } from './entities/skill.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name:'Skill',
        schema: SkillSchema
      }
    ])
  ],
  controllers: [SkillController],
  providers: [SkillService],
  exports: [SkillService],
})
export class SkillModule {}
