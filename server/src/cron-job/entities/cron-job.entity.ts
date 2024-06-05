import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CronJobOfServerDocument = HydratedDocument<CronJobOfServer>;
@Schema({timestamps: true})
export class CronJobOfServer {
    @Prop({required: true})
    cronTime: string;

    @Prop({required: true})
    format: number;
}

export const CronJobOfServerSchema = SchemaFactory.createForClass(CronJobOfServer);