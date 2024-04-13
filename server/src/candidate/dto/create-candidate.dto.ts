export class CreateCandidateDto {
    constructor(
        public CandidateId: string,
        public Name: string,
        public Avatar: string,
        public Gender: string,
        public Storage: string,
        public Phone: string,
        public Email: string,
        public Address: string,
        public Position: string,
        public Experience: number,
        public Education: string[],
        public WorkExperience: string[],
        public Skills: string[],
        public Languages: string[],
        public DesiredJob: string,
        public Field: string,
        public Career: string,
        public User: string,
        public DateOfBirth: Date,
        public FavoriteJobs: string[],
        public References: string[],
        CareerGoal
        
        
    ){}
}
