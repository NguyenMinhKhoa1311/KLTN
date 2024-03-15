export class CreateDesiredJobDto {
    constructor(
        public DesiredJobId: string,
        public Location: string,
        public Field: string,
        public Career: string,
        public Salary: number,
    ){}
}
