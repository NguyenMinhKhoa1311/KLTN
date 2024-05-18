export class CreateCompanyDto {
    constructor(
        public  CompanyId: string,
        public  Name: string,
        public  Email: string,
        public  Phone: string,
        public  Address: string,
        public  Field: string,
        public  Avatar: string,
        public  StorageAvatar: string,
        public  StorageCover: string,
        public  Cover: string,
        public  JobQuantity: number,
        public  Description: string,
    ){}
}
