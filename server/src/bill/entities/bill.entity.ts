import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type BillDocument = HydratedDocument<Bill>;

@Schema({timestamps: true})
export class Bill {
    @Prop({required: true, unique: true})
    BillId: string;

    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Voucher'
    })
    Voucher: string;

    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job'
    })
    Job: string;

    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServicePackage'
    })
    ServicePackage: string;

    @Prop({required: true})
    Total: number;

    @Prop({required: true})
    Discount: number;

    @Prop({required: true})
    GrandTotal: number;

    @Prop({required: true})
    DatePayment: Date;
}

export const BillSchema = SchemaFactory.createForClass(Bill);
