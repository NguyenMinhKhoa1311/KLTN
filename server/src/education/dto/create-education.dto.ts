export class CreateEducationDto {
    constructor(
        public EducationId: string,
        public School: string,
        public Degree: string,
        public StartDate: Date,
        public EndDate: Date,
        public Major: string,
    ){}
}
