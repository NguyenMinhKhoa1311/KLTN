import { PartialType } from '@nestjs/mapped-types';
import { CreateCandidateSkillDto } from './create-candidate-skill.dto';

export class UpdateCandidateSkillDto extends PartialType(CreateCandidateSkillDto) {}
