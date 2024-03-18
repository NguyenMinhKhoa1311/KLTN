export class CreateJobDto {
    constructor(
        public JobId: string,
        public Name: string,
        public Description: string,
        public Company: string,
        public Location: string,
        public Requirement :string,
        public Salary: number,
        public Welfare: string[],
        public Career: string,
        public Recruiter: string,
        public Field: string,
        public EndDate: Date,
        public ServicePackage: string,
        public StatusPayment: boolean,
        public StatusRecruitment: boolean,
        public Tags: string[],
    ){}
}
