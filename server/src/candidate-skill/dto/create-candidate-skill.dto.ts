export class CreateCandidateSkillDto {
    constructor(
        public CandidateSkillId: string,
        public Name: string,
        public Skill: string,
        public Proficiency: string,
    ){}
}
