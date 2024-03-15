import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type VoucherDocument = HydratedDocument<Voucher>;

@Schema({timestamps: true})
export class Voucher {
    @Prop({required: true,unique: true})
    VoucherId: string;

    @Prop({required: true})
    Name: string;

    @Prop({required: true})
    Code: string;

    @Prop({required: true})
    Discount: number;

    @Prop({required: true})
    EndDate: Date;
}

export const VoucherSchema = SchemaFactory.createForClass(Voucher);
