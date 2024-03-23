export class CreateServicePackageDto {
    constructor(
        public ServicePackageId: string,
        public Name: string,
        public Description: string,
        public Price: number,
        public Priority: number,
        public Hot: boolean,
        public ColorTitle: boolean,
        public Urgent: boolean,
    ){}
}
