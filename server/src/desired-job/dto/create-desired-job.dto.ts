export class CreateDesiredJobDto {
    constructor(
        public DesiredJobId: string,
        public Location: string,
        public Salary: number,
    ){}
}
