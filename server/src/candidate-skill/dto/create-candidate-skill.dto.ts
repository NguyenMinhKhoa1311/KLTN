export class CreateCandidateSkillDto {
    constructor(
        public CandidateSkillId: string,
        public Skill: string,
        public Proficiency: string,
    ){}
}
