export interface ServicePackage {
    _id: string;
     ServicePackageId: string,
     Name: string,
     Description: string,
     Price: number
      Priority: number,
      Hot: boolean,
      ColorTitle: boolean,
      Urgent: boolean,
    createAt: Date;
    updateAt: Date;
}