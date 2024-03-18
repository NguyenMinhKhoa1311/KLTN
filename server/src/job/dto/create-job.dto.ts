export class CreateJobDto {
    constructor(
        public JobId: string,
        public Name: string,
        public Description: string,
        public Company: string,
        public Location: string,
        public Salary: number,
        public Welfare: string[],
        public Career: string,
        public Recruiter: string,
        public field: string,
        public EndDate: Date,
        public Status: boolean
    ){}
}
