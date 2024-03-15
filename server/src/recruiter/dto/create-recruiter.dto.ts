export class CreateRecruiterDto {
    constructor(
        public  RecruiterId: string,
        public User: string,
        public  Name: string,
        public  Email: string,
        public  Phone: string,
        public  voucher: string[],
        public  Address: string,
        public Company: string
    ){}
}
