export class CreateCandidateLanguageDto {
    constructor(
        public CandidateLanguageId: string,
        public Language: string,
        public Proficiency: number,
    ){}
}
