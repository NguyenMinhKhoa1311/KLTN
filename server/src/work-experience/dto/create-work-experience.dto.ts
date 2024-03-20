export class CreateWorkExperienceDto {
    constructor(
        public WorkExperienceId: string,
        public CompanyName: string,
        public JobTitle: string,
        public StartDate: Date,
        public EndDate: Date,
        public Description: string,
    ){}
}
