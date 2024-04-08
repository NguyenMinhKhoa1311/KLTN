export class CreateCandidateSkillDto {
    constructor(
        public CandidateSkillId: string,
        public Name: string,
        public Proficiency: string,
    ){}
}
