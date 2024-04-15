export class CreateJobDto {
    constructor(
        public JobId: string,
        public Name: string,
        public Description: string,
        public Address: string,
        public Location: string[],
        public Requirement :string,
        public Salary: string,
        public Welfare: string[],
        public Career: string,
        public Recruiter: string,
        public Recruitment: string,
        public Field: string,
        public StartDate: Date,
        public EndDate: Date,
        public ServicePackage: string,
        public StatusPayment: boolean,
        public Tags: string[],
        public Priority: number,
        public Hot: boolean,
        public ColorTitle: boolean,
        public Urgent: boolean,
        public Company: string,
        public ImageOfCompany: string,
        
    ){}
}
