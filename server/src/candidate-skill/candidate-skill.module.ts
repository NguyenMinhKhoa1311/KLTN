import { Module, forwardRef } from '@nestjs/common';
import { CandidateSkillService } from './candidate-skill.service';
import { CandidateSkillController } from './candidate-skill.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CandidateSkillSchema } from './entities/candidate-skill.entity';


@Module({
  imports: [
      MongooseModule.forFeature([
        {
          name:'CandidateSkill',
          schema: CandidateSkillSchema
        },

      ]),

    ],
  controllers: [CandidateSkillController],
  providers: [CandidateSkillService],
  exports: [CandidateSkillService],
})
export class CandidateSkillModule {}
