export interface Voucher{
    _id: string;
     VoucherId: string,
     Name: string,
     Code: string,
     Discount: number,
     EndDate: Date,
    createAt: Date;
    updateAt: Date;
}