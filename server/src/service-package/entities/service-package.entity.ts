import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ServicePackageDocument = HydratedDocument<ServicePackage>;

@Schema({timestamps: true})
export class ServicePackage {
    @Prop({required: true, unique: true})
    ServicePackageId: string;

    @Prop({required: true})
    Name: string;

    @Prop({required: true})
    Description: string;

    @Prop({required: true})
    Price: number;
}
export const ServicePackageSchema = SchemaFactory.createForClass(ServicePackage);
