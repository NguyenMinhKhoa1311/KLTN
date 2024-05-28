import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type TokenResetPasswordDocument = HydratedDocument<TokenResetPassword>

@Schema({timestamps: true})
export class TokenResetPassword {
    @Prop({required: true, unique: true})
    TokenId: string;

    @Prop({required: true})
    User: string;

    @Prop({required: true})
    Token: string;

    @Prop({required: true})
    Expires: Date;
}


export const TokenResetPasswordSchema = SchemaFactory.createForClass(TokenResetPassword);