export class CreateServicePackageDto {
    constructor(
        public ServicePackageId: string,
        public Name: string,
        public Description: string,
        public Price: number
    ){}
}
