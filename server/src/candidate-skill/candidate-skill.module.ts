import { Module, forwardRef } from '@nestjs/common';
import { CandidateSkillService } from './candidate-skill.service';
import { CandidateSkillController } from './candidate-skill.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CandidateSkillSchema } from './entities/candidate-skill.entity';
import { SkillSchema } from 'src/skill/entities/skill.entity';
import { SkillModule } from 'src/skill/skill.module';

@Module({
  imports: [
      MongooseModule.forFeature([
        {
          name:'CandidateSkill',
          schema: CandidateSkillSchema
        },
        {
          name:'Skill',
          schema: SkillSchema
        }
      ]),
      forwardRef(()=>SkillModule)
    ],
  controllers: [CandidateSkillController],
  providers: [CandidateSkillService],
  exports: [CandidateSkillService],
})
export class CandidateSkillModule {}
