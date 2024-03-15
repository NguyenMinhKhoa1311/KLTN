export class CreateBillDto {
    constructor(
        public BillId: string,
        public Voucher: string,
        public Job: string,
        public ServicePackage: string,
        public Total: number,
        public Discount: number,
        public GrandTotal: number,
        public DatePayment: Date,
    ){}
}
