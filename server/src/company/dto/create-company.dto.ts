export class CreateCompanyDto {
    constructor(
        public  CompanyId: string,
        public  Name: string,
        public  Email: string,
        public  Phone: string,
        public  Address: string,
        public  Field: string,
    ){}
}
