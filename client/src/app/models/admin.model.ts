import { User } from "./user.model";

export interface Admin {
    _id: string;
    AdminId: string;
    Name: string;
    User: User;
    StatusConfirm: string;
    createdAt: Date;
    updatedAt: Date;
    Avatar: string;
}