export class CreateCandidateDto {
    constructor(
        public CandidateId: string,
        public Name: string,
        public Avatar: string,
        public Storage: string,
        public Phone: string,
        public Address: string,
        public Position: string,
        public Experience: number,
        public Education: string,
        public Skill: string[],
        public DesiredJob: string,
        public Field: string,
        public Career: string,
        public User: string,
        public DateOfBirth: Date,
        
    ){}
}
