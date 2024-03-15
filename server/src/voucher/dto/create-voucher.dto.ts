export class CreateVoucherDto {
    constructor(
        public VoucherId: string,
        public Name: string,
        public Code: string,
        public Discount: number,
        public EndDate: Date,
    ){
    }
}
