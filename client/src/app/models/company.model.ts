import { Field } from "./field.model";
import { Storage } from "./storage.model";

export interface Company{
    _id: string;
      CompanyId: string,
      Name: string,
      Email: string,
      Phone: string,
      Address: string,
      Field: Field,
      Avatar: string,
      StorageAvatar: Storage,
      StorageCover: Storage,
      Cover: string,
      Description: string
        createAt: Date;
        updateAt: Date;
        JobQuantity: number;
}